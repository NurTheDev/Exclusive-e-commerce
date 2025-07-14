import { getAuth, updatePassword, updateEmail, updateProfile, EmailAuthProvider, reauthenticateWithCredential  } from "firebase/auth";
const auth = getAuth();
const user = auth.currentUser;

const reauthenticate = async (currentPassword) => {
    const credential = EmailAuthProvider.credential(user.email, currentPassword);
    try{
        await reauthenticateWithCredential(user, credential);
        return true;
    } catch (error) {
        console.log("error reauthenticating", error);
        return false;
    }
}
const setNewPassword = async (currentPassword, password) => {
   try {
       await reauthenticate(currentPassword);
       await updatePassword(user, password);
       console.log("password updated");
   } catch (error) {
       console.log("error updating password", error);
   }

};
const setNewEmail = async (currentPassword, email) => {
   try {
       await reauthenticate(currentPassword);
        await updateEmail(user, email);
       console.log("email updated");
   } catch (error) {
       console.log("error updating email", error);
   }
};
const updateProfileInfo = async (displayName, address) => {
   try {
       const result = await updateProfile(user, {
           displayName: displayName,
           address: address
       });
       console.log(result);
   } catch (error) {
       console.log("error updating profile", error);
   }
};
export { setNewPassword, setNewEmail, updateProfileInfo };
