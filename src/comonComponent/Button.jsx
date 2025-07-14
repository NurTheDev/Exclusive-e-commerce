import React from 'react';

const Button = ({btnText, className, onClick, type}) => {
    return (
        <button type={type} onClick={onClick} className={`btn ${className}  transition-all py-6 cursor-pointer hover:scale-95`}>
            {btnText}
        </button>
    );
};

export default Button;
