import React, { useRef } from 'react';
import Slider from "react-slick";
import {getSettings} from "../utils/index.js";
import ProductCard from "../comonComponent/ProductCard.jsx";
import ArrowGroup from "./ArrowGroup.jsx";
const CustomCarousel = (props) => {
    console.log(props.data)
    const sliderRef = useRef(null);
    const settings = getSettings("product");
    return (
        <div className={"container mx-auto relative"}>
            {props.button === "arrows" && <ArrowGroup ref={sliderRef} className={"absolute top-1/2 left-0" +
                " right-0" +
                " z-10"} />}
            <div>
                <Slider ref={sliderRef} {...settings}>
                    {Array.from({length: props.data?.length || 10}).map((_, index) =>(
                        <div key={index} className="px-2 lg:px-0 !flex !justify-center !items-center">
                            {props.children}
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CustomCarousel;
