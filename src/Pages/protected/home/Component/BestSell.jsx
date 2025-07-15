import React from 'react';
import Heading from "../../../../comonComponent/Heading.jsx";
import CustomCarousel from "../../../../helper/CustomCarousel.jsx";
import {getSettings} from "../../../../utils/index.js";
import Button from "../../../../comonComponent/Button.jsx";
import {useGetProductQuery} from "../../../../features/API/productAPI.js";
import {useNavigate} from "react-router";

const BestSell = () => {
    const settings = getSettings("product");
    const { data, error, isLoading } = useGetProductQuery()
    const navigate = useNavigate();
    return (
        <div className={"container mx-auto"}>
            <div className={"flex flex-col lg:flex-row justify-between items-center px-3 lg:px-0"}>
                <Heading heading={"Best Selling Products"} title={"This Month"}/> <Button onClick={()=> navigate("/product")} className={"bg-secondary2 text-white py-4 px-12 mt-10"} btnText={"View All"}/>
            </div>
            <div className={"mt-10"}>
            <CustomCarousel button={"button"} type={"product"} data={data?.products} settings={settings} erro={error} loading={isLoading}/>
            </div>
        </div>
    );
};

export default BestSell;
