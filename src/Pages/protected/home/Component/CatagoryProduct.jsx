import React, {useRef} from 'react';
import Heading from "../../../../comonComponent/Heading.jsx";
import {categories} from "../../../../data/data.js";
import {getCategoryImg, getSettings} from "../../../../utils/index.js";
import ArrowGroup from "../../../../helper/ArrowGroup.jsx";
import Slider from "react-slick";

const CatagoryProduct = () => {
    const sliderRef = useRef(null);
    const settings = getSettings("category");
    return (
        <div>
            <Heading heading={"Browse By Category"} title={"Categories"}/>
            <div className={"container mx-auto relative"}>
                <ArrowGroup ref={sliderRef} className={"absolute top-1/2 left-0" +
                    " right-0" +
                    " z-10"}/>
                <div>
                    <Slider ref={sliderRef} {...settings}>
                        {categories.map((category, index) => (
                            <div key={index} className="px-2 lg:px-0 !flex !flex-col !justify-center !items-center">
                                <div>
                                    <img src={getCategoryImg(category.image)} alt={category.name}/>
                                </div>
                                <h4>{
                                    category.name
                                }</h4>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default CatagoryProduct;
