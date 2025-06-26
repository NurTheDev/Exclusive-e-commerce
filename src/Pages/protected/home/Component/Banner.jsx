import React, {useState} from 'react';
import {menuItems, bannerData} from '../../../../data/data.js';
import {MdArrowForwardIos} from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {getBannerImg, getSettings} from "../../../../utils/index.js";
const Banner = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    // slider settings
const settings = getSettings()
    return (
        <div className={"container mx-auto"}>
            <div >
                <div className={"lg:grid grid-cols-4"}>
                    {/*Menu bar start*/}
                    <ul className={"menu rounded-box w-56 font-poppins w-full"}>
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
                    <div className={"col-span-3 px-2 lg:px-0"}>
                        <div className="slider-container">
                            <Slider {...settings}>
                                {bannerData.map((item, index) => (
                                    <div key={index} className="w-full relative h-[250px] lg:h-[350px] !flex !justify-around bg-black">
                                        <div className={"absolute p-4 lg:p-10 lg:relative top-0 left-0 w-full h-full" +
                                            " flex" +
                                            " flex-col" +
                                            " justify-center gap-y-10 items-start"}>
                                            <p className={"text-white normal-text"}>{item.name}</p>
                                            <h2 className={"text-white xl-heading-semi-bold"}>Up to {item.voucher} off</h2>
                                            <button className={"btn lg:w-1/2"}>Shop Now</button>
                                        </div>
                                        <img src={getBannerImg(item.image)} alt={item.name} className="lg:w-1/2 object-cover" />
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

export default React.memo(Banner);
