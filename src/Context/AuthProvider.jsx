import React, { useEffect, useReducer} from 'react';
import {AuthContext} from "./index.js";
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
    }, [auth, dispatch])

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

    // Helper function for email validation
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

//     auth methods
    const signUp = async (data)=>{
        dispatch(authActions.setLoading(true))
        if(!isValidEmail(data.numberEmail)){
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
            dispatch(authActions.setLoading(false))
            return true
        } catch(error){
            handleAuthError(error);
            dispatch(authActions.setLoading(false))
            return false;
        }
    }
    const signIn = async (data)=>{
        dispatch(authActions.setLoading(true))
        if(!isValidEmail(data.numberEmail)){
            showErrorToast("Please enter a valid email address.");
            dispatch(authActions.setLoading(false))
            return false;
        }
        try{
            const userCredential = await signInWithEmailAndPassword(auth, data.numberEmail, data.password);
            const user = userCredential.user;
            showSuccessToast("Login successful");
            console.log(user)
            dispatch(authActions.setLoading(false))
            return true
        } catch(error){
            handleAuthError(error);
            dispatch(authActions.setLoading(false))
            return false;
        }
    }
    const signOutUser = async ()=>{
        dispatch(authActions.setLoading(true))
        try {
            await signOut(auth);
            showSuccessToast("Logout successful");
            dispatch(authActions.logout())
            return true
        } catch (error){
            handleAuthError(error);
            dispatch(authActions.setLoading(false))
            return false;
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
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
