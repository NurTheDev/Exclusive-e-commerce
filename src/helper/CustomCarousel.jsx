import React, { useRef } from 'react';
import Slider from "react-slick";
import ProductCard from "../comonComponent/ProductCard.jsx";
import ArrowGroup from "./ArrowGroup.jsx";
import CategoryCard from "../comonComponent/CategoryCard.jsx";
import Button from "../comonComponent/Button.jsx";
const CustomCarousel = (props) => {
    const sliderRef = useRef(null);
    return (
        <div className={"container mx-auto relative"}>
            {props.button === "arrows" ? <ArrowGroup ref={sliderRef} className={"absolute top-1/2 lg:-top-[70px]" +
                " right-0" +
                " z-10"} /> : <Button btnText={"View All"} className={"bg-secondary2 hover:scale-105 text-white py-4 px-4" +
                " mt-10" +
                " absolute lg:-top-[100px] -bottom-[80px] right-1/2 translate-x-1/2 lg:right-20 z-10"}/>}
            <div>
                <Slider ref={sliderRef} {...props.settings}>
                    {props.data?.map((item, index) =>(
                        <div key={index} className="px-2 lg:px-4 !flex !justify-center !items-center">
                            {props.type === "product" ? <ProductCard product={item}/> : <CategoryCard data={item}/>}
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default CustomCarousel;
