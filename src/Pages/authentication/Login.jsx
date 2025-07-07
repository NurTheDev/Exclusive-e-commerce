import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import login from "../../assets/Login/login.jpg";
import AuthForm from './AuthForm.jsx';
import {Link} from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [passwordShown, setPasswordShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      console.log(data);
      // Add your login logic here
      // await authService.login(data);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="w-full h-screen items-center justify-center flex flex-col lg:flex-row">
      <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
        <img src={login || ""} alt="Login" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full flex flex-col lg:items-start justify-center px-10 gap-5">
        <h1 className="font-inter text-4xl font-bold">
          Log in to Exclusive
        </h1>
        <p className="normal-text">Enter your details below</p>

        <AuthForm
          formType="login"
          onSubmit={handleSubmit(onSubmit)}
          register={register}
          errors={errors}
          passwordShown={passwordShown}
          onTogglePassword={togglePasswordVisibility}
          isLoading={isLoading}
        />

        <p className="normal-text">
          Forgot your password?{' '}
          <span className="font-semibold cursor-pointer hover:underline">
            Reset
          </span>
        </p>
        <p className="normal-text">
          Don't have an account?{' '}
          <Link to="/signup" className="font-semibold cursor-pointer hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
