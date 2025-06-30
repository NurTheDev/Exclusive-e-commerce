import React from 'react';
import Heading from "../../../../comonComponent/Heading.jsx";
import {product} from "../../../../data/data.js";
import CustomCarousel from "../../../../helper/CustomCarousel.jsx";
import {getSettings} from "../../../../utils/index.js";

const BestSell = () => {
    const settings = getSettings("product");
    return (
        <div className={"container mx-auto"}>
            <Heading heading={"Best Selling Products"} title={"This Month"}/>
            <div className={"mt-10"}>
            <CustomCarousel button={"button"} type={"product"} data={product} settings={settings}/>
            </div>
        </div>
    );
};

export default BestSell;
