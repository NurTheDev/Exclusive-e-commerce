import React from 'react';

const Input = ({label, placeholder, type, register, name, required, className, value, onChange}) => {
    return (
        <fieldset className="fieldset">
            <legend className="fieldset-legend text-text1">{label}</legend>
            <input onChange={onChange} value={value && value} type={type} className={`input w-full ${className}`} placeholder={placeholder} {...register(name, {required: required})}/>
        </fieldset>
    )
};

export default Input;
