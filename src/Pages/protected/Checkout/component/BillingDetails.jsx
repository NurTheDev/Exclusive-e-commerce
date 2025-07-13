import React from 'react';
import {useForm} from "react-hook-form";
import {billingFields} from "../../../../data/data.js";
const BillingInput =({label, placeholder, type, register, name, value, onChange})=>{
    return(
        <fieldset className="fieldset">
            <legend className="fieldset-legend text-text1">{label}</legend>
            <input type={type} className="input" placeholder={placeholder} {...register(name)} value={value} onChange={onChange}/>
        </fieldset>
    )
}
const BillingDetails = () => {
    const [inputValue, setInputValue] = React.useState('');
    console.log(inputValue)
    const {
        register,
        formState: { errors },
    } = useForm();
    return (
        <div className={"w-full"}>
            <h2 className={"large-heading-semi-bold"}>Billing Details</h2>
            <form action="">
                {billingFields?.map((item, index) => (
                    <BillingInput
                        key={index}
                        label={item.label}
                        placeholder={item.placeholder}
                        type={item.type}
                        register={register}
                        name={item.id}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />))}
                <div className="flex items-center me-4 mt-4">
                    <input id="green-checkbox" type="checkbox" value=""
                           className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="green-checkbox"
                           className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Save this information for next time</label>
                </div>
            </form>
        </div>
    );
};

export default BillingDetails;
