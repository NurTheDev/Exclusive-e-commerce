import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SignUpImg from "../../assets/Login/signup.jpg";
import AuthForm from './AuthForm.jsx';
import {createUserWithEmailAndPassword, getAuth, updateProfile} from "firebase/auth";
import {toast, Zoom} from "react-toastify";
const SignUp = () => {
  const auth = getAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passwordShown, setPasswordShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    if(data.numberEmail.includes("@") && data.numberEmail.includes(".com")){
      try {
       const userCredential = await createUserWithEmailAndPassword(auth, data.numberEmail, data.password);
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: data.name
        })
        toast.success('Account created successfully', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Zoom,
        });
        console.log(user)
      } catch (error) {
        if(error.code === "auth/email-already-in-use"){
          toast.error("Email already in use", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom,
          });
        } else if(error.code === "auth/invalid-email"){
          toast.error("Invalid email", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom,
          });
        }
        else{
          toast.error("Something went wrong", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Zoom,
          });
        }
      }
    }
    else{
      console.log("can't sign up with phone number")
    }
    setIsLoading(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="w-full h-screen items-center justify-center flex flex-col lg:flex-row">
      <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
        <img src={SignUpImg || ""} alt="Sign Up" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full flex flex-col lg:items-start justify-center px-10 gap-5">
        <h1 className="font-inter text-4xl font-bold">
          Create an account
        </h1>
        <p className="normal-text">Enter your details below</p>

        <AuthForm
          formType="signup"
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
          passwordShown={passwordShown}
          onTogglePassword={togglePasswordVisibility}
          isLoading={isLoading}
        />
        <p className="normal-text">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold cursor-pointer hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default React.memo(SignUp);
