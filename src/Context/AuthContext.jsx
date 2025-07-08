import React, {createContext, useEffect, useReducer} from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signOut,
    updateProfile
} from "firebase/auth";
import {toast, Zoom} from "react-toastify";
import {AUTH_INITIAL_STATE, TOAST_CONFIG, AUTH_ERROR_MESSAGES} from "../constance/authConstance.js";
import {authReducer, authActions} from "../Reducer/authReducer.js";

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{
    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
    const auth = getAuth()
    // Listen for authentication state changes
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(
            auth, (user)=>{
                if(user){
                    const userData = {
                        uid: user.uid,
                        email: user.email,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                        emailVerified: user.emailVerified,
                    }
                    dispatch(authActions.setUser(userData))
                    // Store in localStorage for persistence
                    localStorage.setItem('user', JSON.stringify(userData));
                    localStorage.setItem('token', user.accessToken);
                } else{
                //     user is signed out
                    dispatch(authActions.logout())
                    localStorage.removeItem('user')
                    localStorage.removeItem('token')
                }
            }
        )
        return () => {
            unsubscribe()
        }
    }, [auth])
    // Helper functions
    const showErrorToast = (message) => {
        toast.error(message, { ...TOAST_CONFIG, transition: Zoom });
    };

    const showSuccessToast = (message) => {
        toast.success(message, { ...TOAST_CONFIG, transition: Zoom });
    };


    const handleAuthError = (error) => {
        const message = AUTH_ERROR_MESSAGES[error.code] || "Something went wrong";
        showErrorToast(message);
        dispatch(authActions.setError(message));
    };
//     auth methods
    const signUp = async (data)=>{
        dispatch(authActions.setLoading(true))
        if(!data.numberEmail.includes("@") || !data.numberEmail.includes(".com")){
            showErrorToast("Please enter a valid email address.");
            dispatch(authActions.setLoading(false))
            return false;
        }
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, data.numberEmail, data.password);
            const user = userCredential.user;
            await updateProfile(user, {
                displayName: data.name
            })
            showSuccessToast("Account created successfully");
            return true
        } catch(error){
            handleAuthError(error);
            return false;
        }
    }
    const signIn = async (data)=>{
        dispatch(authActions.setLoading(true))
        if(!data.numberEmail.includes("@") || !data.numberEmail.includes(".com")){
            showErrorToast("Please enter a valid email address.");
            dispatch(authActions.setLoading(false))
            return false;
        }
        try{
            const userCredential = await signInWithEmailAndPassword(auth, data.numberEmail, data.password);
            const user = userCredential.user;
            showSuccessToast("Login successful");
            console.log(user)
            return true
        } catch(error){
            handleAuthError(error);
            return false;
        }
    }
    const signOutUser = async ()=>{
        try {
            await signOut(auth);
            showSuccessToast("Logout successful");
            dispatch(authActions.logout())
        } catch (error){
            handleAuthError(error);
        }
    }
    const resetError = ()=>{
        dispatch(authActions.resetError())
    }
    const value ={
        ...state,
        dispatch,
        signUp,
        signIn,
        signOutUser,
        resetError
    }
    return (
        <AuthProvider value={value}>
            {children}
        </AuthProvider>
    )
}
