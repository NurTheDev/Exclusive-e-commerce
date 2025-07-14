import React from 'react';
import Input from "../../../../comonComponent/Input.jsx";
import {useForm} from "react-hook-form";
import Button from "../../../../comonComponent/Button.jsx";
import {useAuth} from "../../../../hooks/useAuth.js";
import {setNewPassword, setNewEmail, updateProfileInfo} from "../../../../utils/updateUserInfo.js";

const EditProfile = () => {
    const {
        register,
        watch,
        formState: {errors},
    } = useForm();
    const {user} = useAuth()
    const displayName = user?.displayName || "";
    const nameParts = displayName.split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts[1] || "";
    console.log(user)
    const [updateData, setUpdateData] = React.useState({
        firstName: firstName,
        lastName: lastName,
        email: user?.email || "",
        address: "",
    });
const handleChange = watch((value, {type})=>{
    const newUpdateData = {...updateData, ...value}
    if(type === "change"){
        setUpdateData(newUpdateData)
    }
})
    const onSubmit = (e, data) => {
        e.preventDefault();
        const {currentPassword,password, confirmPassword} = data;
        if(password && confirmPassword){
            if (password === confirmPassword) {
                const setPassword = async()=>{
                    try {
                        await setNewPassword(currentPassword, password)
                        return true
                    } catch (error) {
                        console.log(error)
                    }
                }
                setPassword().then(r => {
                    console.log(r)
                })
            }
        } if(updateData.email  && updateData.email !== user.email){
            const setEmail = async()=>{
                try {
                    await setNewEmail(currentPassword, updateData.email)
                    return true
                } catch (error) {
                    console.log(error)
                }
            }
            setEmail().then(r => {
                console.log(r)
            })
        } if(
            updateData.firstName !== user.displayName?.split(" ")[0] ||
            updateData.lastName !== user.displayName?.split(" ")[1] ||
            updateData.address !== user.address
        ){
            const setProfile = async()=>{
                const displayName = `${updateData.firstName} ${updateData.lastName}`
                try {
                    await updateProfileInfo(displayName, updateData.address)
                    return true
                } catch (error) {
                    console.log(error)
                }
            }
            setProfile().then(r => {
                console.log(r)
            })
        }
    };
    return (
        <div>
            <h3 className={"small-heading-semi-bold text-secondary2"}>Edit Your Profile</h3>
            <form action="">
                <div>
                    <div className={"grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-2 "}>
                        <Input label={"First Name"} type={"text"} placeholder={"First Name"} required={true}
                               register={register} name={"firstName"} value={updateData.firstName} onChange={handleChange}/>
                        <Input label={"Last Name"} type={"text"} placeholder={"Last Name"} required={true}
                               register={register} name={"lastName"} value={updateData.lastName}/>
                        <Input label={"Email"} type={"email"} placeholder={"Email"} required={true} register={register}
                               name={"email"} value={updateData.email}/>
                        <Input label={"Address"} type={"text"} placeholder={"Address"} required={true}
                               register={register} name={"address"} value={updateData.address}/>
                    </div>
                    <div className={"mt-5"}>
                        <Input type={"password"} placeholder={"Current Password"}
                               required={true} register={register}
                               name={"currentPassword"} label={"Set New Password"}/>
                        <Input
                            type={"password"} placeholder={"New Password"}
                            required={true} register={register}
                            name={"password"}/><Input
                        type={"password"} placeholder={"Confirm New" +
                        " Password"}
                        required={true} register={register}
                        name={"confirmPassword"}/>
                    </div>
                </div>
                <div className={"mt-10 flex justify-end gap-x-5"}>
                    <Button type={"submit"} className={"bg-secondary2 text-white"} btnText={"Save Changes"}
                            onClick={(e) => onSubmit(e, watch())}/>
                    <Button type={"reset"} className={""} btnText={"Cancel"}/>
                </div>
            </form>
        </div>
    );
};

export default React.memo(EditProfile);
