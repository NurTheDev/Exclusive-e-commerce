import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {billingFields} from "../../../../data/data.js";

const BillingInput = ({label, placeholder, type, register, name, required}) => {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend text-text1">{label}</legend>
            <input type={type} className="input w-full lg:w-2/3" placeholder={placeholder} {...register(name, {required: required})}/>
        </fieldset>
    )
}
const BillingDetails = ({onChange}) => {
    const {
        register,
        watch,
        formState: {errors},
    } = useForm();
    useEffect(() => {
       const runValidation =()=>{
           const currentValues = watch();
           const requiredFields = billingFields.filter((item)=> item.require)
           const isAllFieldsFilled = requiredFields.every((field)=> currentValues[field.id] && currentValues[field.id].trim() !== "")
           onChange({
               data: currentValues,
               isValid: isAllFieldsFilled && Object.keys(errors).length === 0,
               errors: errors
           })
       }
    //    run initially
        runValidation();
       const subscribe = watch((value, {type})=>{
           if(type === "change"){
               runValidation();
           }
       })
    //     dispose
        return ()=> subscribe.unsubscribe();
    }, [onChange, watch, errors]);
    return (
        <div className={"w-full"}>
            <h2 className={"large-heading-semi-bold"}>Billing Details</h2>
            <form action="">
                {billingFields?.map((item, index) => (
                   <div key={index}>
                       <BillingInput
                           label={item.label}
                           placeholder={item.placeholder}
                           type={item.type}
                           register={register}
                           name={item.id}
                           required={item.required}
                           errors={errors}
                       />
                       {errors[item.id] && (
                           <span className="text-red-500 font-semibold">{item.label} is required</span>
                       )}
                   </div>))}
                <div className="flex items-center me-4 mt-4">
                    <input id="green-checkbox" type="checkbox" value=""
                           className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="green-checkbox"
                           className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Save this information
                        for next time</label>
                </div>
                {Object.keys(errors).length > 0 && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded">
                        <p className="text-red-600 font-medium">Please fill in all required fields</p>
                    </div>
                )}
            </form>
        </div>
    );
};

export default BillingDetails;
