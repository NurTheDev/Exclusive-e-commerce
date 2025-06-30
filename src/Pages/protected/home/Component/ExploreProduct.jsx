import React from 'react';
import Heading from "../../../../comonComponent/Heading.jsx";
import {product} from "../../../../data/data.js";
import ProductCard from "../../../../comonComponent/ProductCard.jsx";
import Button from "../../../../comonComponent/Button.jsx";
const ExploreProduct = () => {
    return (
        <div className={"container mx-auto"}>
            <Heading heading={"Explore Our Products"} title={"Our Products"}/>
            <div className={"grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10 px-5 lg:px-0"}>
                {
                    product.slice(0, 8).map((item, index) => (
                        <ProductCard product={item} key={index}/>
                    ))
                }
            </div>
            <div className={"flex justify-center items-center mt-10"}>
                <Button className={"bg-secondary2 text-white py-4 px-12 mt-10"} btnText={"View All Products"}/>
            </div>
        </div>
    );
};

export default ExploreProduct;
