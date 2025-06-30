import React from 'react';
import Heading from "../../../../comonComponent/Heading.jsx";
import ProductCard from "../../../../comonComponent/ProductCard.jsx";
import Button from "../../../../comonComponent/Button.jsx";
import {useGetProductQuery} from "../../../../features/API/productAPI.js";
import ErrorComponent from "../../../../comonComponent/ErrorComponent.jsx";
const ExploreProduct = () => {
    const { data, error, isLoading } = useGetProductQuery()

    return (
        <div className={"container mx-auto"}>
            <Heading heading={"Explore Our Products"} title={"Our Products"}/>
            {error &&<ErrorComponent/>}
            <div className={"grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10 px-5 lg:px-0"}>
                {
                    data?.products.slice(0, 8).map((item, index) => (
                        <ProductCard product={item} key={index} loading={isLoading} error={error}/>
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
