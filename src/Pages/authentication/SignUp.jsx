import React, {useContext, useState} from 'react';
import { useForm } from 'react-hook-form';
import {Link, useNavigate} from 'react-router';
import SignUpImg from "../../assets/Login/signup.jpg";
import AuthForm from './AuthForm.jsx';
import {Index} from "../../Context/index.js";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const { signUp, isLoading } = useContext(Index);
  const [passwordShown, setPasswordShown] = useState(false);
const navigate = useNavigate();
  const onSubmit = async (data) => {
    const success = await signUp(data);
    if (success) {
      navigate('/login');
    }
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
