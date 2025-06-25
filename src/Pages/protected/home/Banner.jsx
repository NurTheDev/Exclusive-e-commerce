import React, {useState} from 'react';
import {menuItems, bannerData} from '../../../data/data.js';
import {MdArrowForwardIos} from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {getBannerImg} from "../../../utils/index.js";
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
        slidesToScroll: 1,
        arrows: true,
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
                    <div className={"col-span-3 "}>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {bannerData.map((item, index) => (
                                    <div key={index} className="w-full h-[350px] !flex !justify-around bg-black">
                                        <div className={" flex flex-col justify-center gap-y-10"}>
                                            <p className={"text-white normal-text"}>{item.name}</p>
                                            <h2 className={"text-white xl-heading-semi-bold"}>Up to {item.voucher} off</h2>
                                            <button className={"btn "}>Shop Now</button>
                                        </div>
                                        <img src={getBannerImg(item.image)} alt={item.name} className="w-1/2 object-cover" />
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
