import React from 'react';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import Input from "../../comonComponent/Input.jsx";
const AuthForm = ({
  formType = 'login', // 'login' or 'signup'
  onSubmit,
  register,
  errors,
  passwordShown,
  onTogglePassword,
  isLoading = false
}) => {
  return (
    <form className="flex flex-col gap-5 lg:w-1/2" onSubmit={onSubmit}>
      {formType === 'signup' && (
        <div>
          <Input
            register={register}
            name="name"
            placeholder="Name"
            required={true}
            pattern={/^[a-zA-Z\s]{3,}$/}
          />
          <hr className="bg-black/30 opacity-30 w-full h-0.5" />
            {errors.name?.type === "required" && (
              <span className="text-red-500 font-semibold">Name is required</span>)}
            {errors.name?.type === "pattern" && (
              <span className="text-red-500 font-semibold">Name must be at least 3 characters</span>
            )}
        </div>
      )}

      <div>
        <Input
          register={register}
          name="numberEmail"
          placeholder="Email or Phone Number"
          required={true}
          pattern={/^(?:\+?\d{10,15}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/}
        />
        <hr className="bg-black/30 opacity-30 w-full h-0.5" />
        {errors.numberEmail?.type === "required" && (
          <span className="text-red-500 font-semibold">Email or Phone Number is required</span>
        )}
        {errors.numberEmail?.type === "pattern" && (
          <span className="text-red-500 font-semibold">Please enter a valid email or phone number</span>
        )}
      </div>

      <div>
        <div className="relative">
          <Input
            register={register}
            name="password"
            type={passwordShown ? "text" : "password"}
            placeholder="Password"
            required={true}
            pattern={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/}
          />
          <div
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl"
            onClick={() => onTogglePassword?.()}
          >
            {passwordShown ? <IoIosEye /> : <IoIosEyeOff />}
          </div>
        </div>
        <hr className="bg-black/30 opacity-30 w-full h-0.5" />
        {errors.password?.type === "required" && (
          <span className="text-red-500 font-semibold">Password is required</span>
        )}
        {errors.password?.type === "minLength" && (
          <span className="text-red-500 font-semibold">Password must be at least 6 characters</span>
        )}
        {errors.password?.type === "maxLength" && (
          <span className="text-red-500 font-semibold">Password must be at most 20 characters</span>
        )}
        {errors.password?.type === "pattern" && (
          <span className="text-red-500 font-semibold">Password must contain at least one letter and one number</span>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-black text-white py-2 rounded-full hover:scale-95 transition-all mt-5 duration-300 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Processing...' : formType === 'login' ? 'Log in' : 'Sign up'}
      </button>
    </form>
  );
};

export default AuthForm;
