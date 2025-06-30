import React from 'react';
import Slider from "react-slick";
import {offerData} from "../../../../data/data.js";
import {getBannerImg, getSettings} from "../../../../utils/index.js";
import Timer from "../../../../helper/Timer.jsx";
import Button from "../../../../comonComponent/Button.jsx";

const Offer = () => {
    const settings = getSettings("banner")
    return (
        <div className={"container mx-auto"}>
            <div className={"px-2 lg:px-0"}>
                <div className="slider-container">
                    <Slider {...settings}>
                        {offerData.map((item, index) => (
                            <div key={index}
                                 className="w-full relative h-[350px] lg:h-[550px] !flex !justify-around bg-black">
                                <div className={"absolute p-4 lg:p-10 lg:relative top-0 left-0 w-1/2 h-full" +
                                    " flex" +
                                    " flex-col" +
                                    " justify-center gap-y-10 items-start"}>
                                    <p className={"text-button normal-text-semi-bold"}>Categories</p>
                                    <h2 className={"text-white xl-heading-semi-bold"}>{item.title}</h2>
                                    <Timer className={"text-white"} active={true}/>
                                    <Button btnText={"Buy Now"} className={"bg-button border-none transition-all" +
                                        " duration-200 hover:scale-105" +
                                        " text-white" +
                                        " py-4" +
                                        " px-12 mt-10"}/>
                                </div>
                                <img src={getBannerImg(item.image)} alt={item.name} className="lg:w-2/3 object-cover"/>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Offer;
