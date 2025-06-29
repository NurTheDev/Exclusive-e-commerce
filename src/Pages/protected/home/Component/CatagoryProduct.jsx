import React from 'react';
import Heading from "../../../../comonComponent/Heading.jsx";
import CustomCarousel from "../../../../helper/CustomCarousel.jsx";
import {categories} from "../../../../data/data.js";
import {getCategoryImg} from "../../../../utils/index.js";
const CatagoryProduct = () => {
    return (
        <div>
            <Heading heading={"Browse By Category"} title={"Categories"}/>
            <CustomCarousel categories={categories} />
        </div>
    );
};

export default CatagoryProduct;
