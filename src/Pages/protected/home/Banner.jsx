import React, {useState} from 'react';
import {menuItems, bannerData} from '../../../data/data.js';
import {MdArrowForwardIos} from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    // slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 3,
        arrows: false,
    };
    return (
        <div className={"container mx-auto"}>
            <div >
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
                    <div className={"col-span-3 bg-red-400"}>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {bannerData.map((item, index) => (
                                    <div key={index}>
                                        <img src={item.image} alt={item.name}/>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    {/*    Carousel Image end*/}
                </div>
            </div>
        </div>
    );
};

export default Banner;
