import React, { useRef } from 'react';
import Slider from "react-slick";
import ProductCard from "../comonComponent/ProductCard.jsx";
import ArrowGroup from "./ArrowGroup.jsx";
import CategoryCard from "../comonComponent/CategoryCard.jsx";
const CustomCarousel = (props) => {
    const sliderRef = useRef(null);
    return (
        <div className={"container mx-auto relative"}>
            {props.button === "arrows" && <ArrowGroup ref={sliderRef} className={"absolute top-1/2 left-0" +
                " right-0" +
                " z-10"} />}
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
