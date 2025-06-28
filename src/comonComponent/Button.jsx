import React from 'react';

const Button = ({btnText, className}) => {
    return (
        <button className={`btn ${className}`}>
            {btnText}
            <svg xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-5 ml-2"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14m0 0l-7-7m7 7l-7 7"/>
            </svg>
        </button>
    );
};

export default Button;
