import React from 'react';
import {FiMinus, FiPlus} from "react-icons/fi";

const IncrementBtn = () => {
    const [count, setCount] = React.useState(1);
    return (
        <div className="max-w-xs mx-auto">
            <div className="relative flex items-center max-w-[10rem]">
                <button onClick={() => setCount(count - 1)}
                    className="bg-gray-100 hover:bg-secondary2 hover:text-white border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                    <FiMinus/>
                </button>
                <input type="text" value={count}
                       className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center small-heading-medium  w-full py-2.5"
                       placeholder={count} required/>
                <button onClick={() => setCount(count + 1)}
                    className="bg-gray-100 hover:bg-secondary2 hover:text-white border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                    <FiPlus/>
                </button>
            </div>

        </div>
    );
};

export default IncrementBtn;
