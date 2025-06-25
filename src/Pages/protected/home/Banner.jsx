import React, {useState} from 'react';
import menuItems from '../../../data/menuItem.js';
import {MdArrowForwardIos} from "react-icons/md";

const Banner = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className={"container mx-auto"}>
            <div className={"grid grid-cols-4"}>
                {/*Menu bar start*/}
                <ul className={"menu  rounded-box w-56 font-poppins"}>
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <button
                                className="w-full flex items-center justify-between text-left font-medium"
                                onClick={() => toggle(index)}
                            >
                                <span>{item.title}</span>
                                <MdArrowForwardIos
                                    className={`w-4 h-4 transition-transform duration-200 ${
                                        openIndex === index ? "rotate-90" : ""
                                    }`}
                                />
                            </button>
                            {openIndex === index && (
                                <ul className="pl-4">
                                    {item.children.map((child, childIndex) => (
                                        <li key={childIndex}>
                                            <a>{child}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                {/*Menu bar start*/}
            {/*    Carousel Image start*/}

                {/*    Carousel Image end*/}
            </div>
        </div>
    );
};

export default Banner;
