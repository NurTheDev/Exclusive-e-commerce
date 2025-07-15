import React, {useState} from 'react';
import iconPhone from "../../../assets/icons-phone.svg";
import iconEmail from "../../../assets/icons-mail.svg";
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import Input from "../../../comonComponent/Input.jsx";
import {useForm} from "react-hook-form";
import Button from "../../../comonComponent/Button.jsx";

const ContactUs = () => {
    const {
        register,
        watch,
        handleSubmit,
        formState: {errors},
    } = useForm({
            defaultValues: {
                name: "",
                email: "",
                phone: "",
                message: ""
            }
        }
    );
    const [success, setSuccess] = useState(false);
    const onSubmit = () => {
        // e.preventDefault();
        setSuccess(true);
    }
    return (
        <div className={"container mx-auto px-3 lg:px-0"}>
            <Breadcrumbs/>
            <div className={"mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-x-10"}>

                <div className={"flex flex-col gap-y-10"}>
                    <div className={"flex flex-col gap-y-3 border-b pb-5 border-black/30"}>
                        <div className={"flex items-center gap-x-2"}>
                            <span><img src={iconPhone || ""} alt="" className={"w-8 h-8"}/></span>
                            <p className={"normal-text-semi-bold"}>Call Us</p>
                        </div>
                        <p>We are available 24/7, 7 days a week.</p>
                        <p className={"normal-text-semi-bold"}>Phone: +880 1234 5678</p>
                    </div>
                    <div className={"flex flex-col gap-y-3"}>
                        <div className={"flex items-center gap-x-2"}>
                            <span><img src={iconEmail || ""} alt="" className={"w-8 h-8"}/></span>
                            <p className={"normal-text-semi-bold"}>Write To US</p>
                        </div>
                        <p>Fill out our form and we will contact you within 24 hours.</p>
                        <p className={"normal-text-semi-bold"}>Emails: customer@exclusive.com</p>
                        <p>Emails: support@exclusive.com</p>
                    </div>
                </div>
                <form className={"lg:col-span-3 lg:ml-20"}>
                    {success && (
                        <div className={`mt-4 mb-4 p-3 rounded border text-center bg-green-100 border-green-300 text-green-700`}>
                            <p className={"normal-text-semi-bold"}>Your message has been sent successfully.</p>
                        </div>
                    )}
                    <div className={"flex justify-between items-center"}>
                        <div className={"lg:w-[calc(33%-10px)]"}><Input type={"text"} placeholder={"Your Name*"}
                                                                        name={"name"} required={true}
                                                                        register={register}/>
                            {errors.name?.type === "required" && (
                                <span className="text-red-500 font-semibold">Name is required</span>)}
                        </div>
                        <div className={"lg:w-[calc(33%-10px)]"}><Input type={"text"} placeholder={"Your Email *"}
                                                                        name={"email"} required={true}
                                                                        register={register}/>
                            {errors.email?.type === "required" && (
                                <span className="text-red-500 font-semibold">Email is required</span>)}
                        </div>
                        <div className={"lg:w-[calc(33%-10px)]"}><Input type={"text"} placeholder={"Your Phone *"}
                                                                        name={"phone"} required={true}
                                                                        register={register}/>
                            {errors.phone?.type === "required" && (
                                <span className="text-red-500 font-semibold">Phone is required</span>)}
                        </div>
                    </div>
                    <Input type={"textarea"} placeholder={"Your Message *"} name={"message"} required={true}
                           register={register} className={"textarea h-40"}/>
                    {errors.message?.type === "required" && (
                        <span className="text-red-500 font-semibold">Message is required</span>
                    )}
                    <div className={"flex justify-end"}>
                        <Button btnText={"Send Message"} className={"mt-5 bg-secondary2 text-white"} type={"submit"} onClick={handleSubmit(onSubmit)}/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
