import React, { useRef } from 'react';
import Slider from "react-slick";
import {getSettings} from "../utils/index.js";
import ProductCard from "./ProductCard.jsx";
import ArrowGroup from "../helper/ArrowGroup.jsx";
const CustomCarousel = () => {
    const sliderRef = useRef(null);
    const settings = getSettings("product");
    return (
        <div className={"container mx-auto relative"}>
            <ArrowGroup ref={sliderRef}/>
            <div>
                <Slider ref={sliderRef} {...settings}>
                    {Array.from({length: 10}).map((_, index) =>(
                        <div key={index} className="px-2 lg:px-0 !flex !justify-center !items-center">
                            <ProductCard />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CustomCarousel;
