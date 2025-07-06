import React from 'react';
import login from "../../assets/Login/login.jpg"
import { useForm } from "react-hook-form"
const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    console.log(errors)
    return (
        <div className={"w-full h-screen items-center justify-center flex flex-col lg:flex-row"}>
            <div className={"w-full h-full flex flex-col items-center justify-center overflow-hidden"}>
                <img src={login || ""} alt=""/>
            </div>
            <div className={"w-full h-full flex flex-col lg:items-start justify-center px-10 gap-5"}>
               <h1 className={"font-inter text-4xl font-bold"}>
                   Log in to Exclusive
               </h1>
                <p className={"normal-text"}>Enter your details below</p>
                <form action="" className={"flex flex-col gap-5 lg:w-1/2"} onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input {...register("numberEmail", {required: true, pattern: /^(?:\+?\d{10,15}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
                        })} type="text" placeholder={"Email or Phone" +
                            " Number"} className={"outline-none" +
                            " border-none" +
                            " w-full focus:outline-none focus:border-none focus:ring-0 px-0 placeholder:text-text1"}/>
                        <hr className={"bg-black/30 opacity-30 w-full h-0.5"}/>
                        {errors.numberEmail?.type === "required" && (
                            <span className="text-red-500 font-semibold">Email or Phone Number is required</span>
                        )}
                        {errors.numberEmail?.type === "pattern" && (
                            <span className="text-red-500 font-semibold">Please enter a valid email or phone number</span>
                        )}
                    </div>
                    <div>
                        <input {...register("password", {required: true, minLength: 6, maxLength: 20})} type="text" placeholder={"Password"} className={"outline-none border-none" +
                            " w-full focus:outline-none focus:border-none focus:ring-0 px-0"}/>
                        <hr className={"bg-black/30 opacity-30 w-full h-0.5"}/>
                        {errors.password?.type === "required" && (
                            <span className="text-red-500 font-semibold">Password is required</span>)}
                        {errors.password?.type === "minLength" && (
                            <span className="text-red-500 font-semibold">Password must be at least 6 characters</span>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <span className="text-red-500 font-semibold">Password must be at most 20 characters</span>
                        )}
                    </div>
                    <button className={"bg-black text-white py-2 rounded-full hover:scale-95 transition-all mt-5" +
                        " duration-300 cursor-pointer"}>Log in</button>
                    <p className={"normal-text"}>Forgot your password? <span className={"font-semibold" +
                        " cursor-pointer hover:underline"}>Reset</span></p>
                    <p className={"normal-text"}>Don't have an account? <span className={"font-semibold" +
                        " cursor-pointer hover:underline"}>Sign up</span></p>

                </form>
            </div>
        </div>
    );
};

export default Login;
