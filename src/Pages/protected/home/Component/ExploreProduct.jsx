import React from 'react';
import Heading from "../../../../comonComponent/Heading.jsx";
import ProductCard from "../../../../comonComponent/ProductCard.jsx";
import Button from "../../../../comonComponent/Button.jsx";
import {useGetProductQuery} from "../../../../features/API/productAPI.js";
import ErrorComponent from "../../../../helper/ErrorComponent.jsx";
import CustomCarousel from "../../../../helper/CustomCarousel.jsx";
import {getSettings} from "../../../../utils/index.js";
const ExploreProduct = () => {
    const { data, error, isLoading } = useGetProductQuery()
    const settings = getSettings("exploreProduct");
    return (
        <div className={"container mx-auto"}>
            <Heading heading={"Explore Our Products"} title={"Our Products"}/>
            {error &&<ErrorComponent/>}
            <div className={"mt-10"}>
                <CustomCarousel button={"arrows"} type={"product"} data={data?.products || []} error ={error} settings={settings} loading={isLoading}/>
            </div>
            <div className={"flex justify-center items-center mt-10"}>
                <Button className={"bg-secondary2 text-white py-4 px-12 mt-10"} btnText={"View All Products"}/>
            </div>
        </div>
    );
};

export default ExploreProduct;
