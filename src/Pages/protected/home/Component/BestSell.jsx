import React from 'react';
import Heading from "../../../../comonComponent/Heading.jsx";
import {product} from "../../../../data/data.js";
import CustomCarousel from "../../../../helper/CustomCarousel.jsx";
import {getSettings} from "../../../../utils/index.js";
import Button from "../../../../comonComponent/Button.jsx";

const BestSell = () => {
    const settings = getSettings("product");
    return (
        <div className={"container mx-auto"}>
            <div className={"flex flex-col lg:flex-row justify-between items-center px-3 lg:px-0"}>
                <Heading heading={"Best Selling Products"} title={"This Month"}/> <Button className={"bg-secondary2 text-white py-4 px-12 mt-10"} btnText={"View All"}/>
            </div>
            <div className={"mt-10"}>
            <CustomCarousel button={"button"} type={"product"} data={product} settings={settings}/>
            </div>
        </div>
    );
};

export default BestSell;
