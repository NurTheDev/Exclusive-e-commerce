import React from 'react';
import Heading from "../../../../comonComponent/Heading.jsx";
import CustomCarousel from "../../../../helper/CustomCarousel.jsx";
import Button from "../../../../comonComponent/Button.jsx";
import {product} from "../../../../data/data.js";
import {getSettings} from "../../../../utils/index.js";
import Timer from "../../../../helper/Timer.jsx";

const FlashSell = () => {
    const settings = getSettings("product");
    return (
        <div className={"container mx-auto"}>
            <div className={"flex justify-start items-end px-3 lg:px-0"}>
                <Heading heading={"Flash Sales"} title={"Today’s"} timer={true} />
                <Timer className={"ml-5 lg:ml-20"} time={3}/>
            </div>
            <div className={"mt-10"}>
                <CustomCarousel button={"arrows"} type={"product"} data={product} settings={settings}/>
                <div className={"flex justify-center items-center mt-10 px-3 lg:px-0"}>
                    <Button className={"bg-secondary2 text-white px-12 mt-10"} btnText={"View All Products"}/>
                </div>
            </div>
        </div>
    );
};

export default FlashSell;
