import React from 'react';

const Rating = ({value}) => {
    return (
            <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                    <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < value ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className={`w-5 h-5 ${index < Math.round(value) ? 'text-yellow-400' : 'text-gray-300'}`}
                    >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                    </svg>
                ))}
            </div>

    );
};

export default Rating;
