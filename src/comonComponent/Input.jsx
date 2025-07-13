import React from 'react';

const Input = (props) => {
    const {register, name, placeholder, pattern, required, type, className} = props
    return (
        <div>
            <input {...register(name, {required: required, pattern: pattern})} type={type} placeholder={placeholder} className={`outline-none border-none
                 w-full focus:outline-none focus:border-none focus:ring-0 px-0 placeholder:text-text1 ${className}`}/>
        </div>
    );
};

export default React.memo(Input);
