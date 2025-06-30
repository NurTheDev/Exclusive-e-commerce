import React from 'react';
import Heading from "../../../../comonComponent/Heading.jsx";
import CustomCarousel from "../../../../helper/CustomCarousel.jsx";
import {categories} from "../../../../data/data.js";
import {getSettings} from "../../../../utils/index.js";
const CatagoryProduct = () => {
    const settings = getSettings("category");
    return (
        <div>
            <Heading heading={"Browse By Category"} title={"Categories"}/>
            <div className={"mt-10"}>
                <CustomCarousel data={categories} settings={settings} button={"arrows"}/>
            </div>
        </div>
    );
};

export default CatagoryProduct;
