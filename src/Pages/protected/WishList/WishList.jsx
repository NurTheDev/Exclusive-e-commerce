import React from 'react';
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import Button from "../../../comonComponent/Button.jsx";
import {useGetProductQuery} from "../../../features/API/productAPI.js";
import ProductCard from "../../../comonComponent/ProductCard.jsx";
import useGetProduct from "../../../hooks/useGetProduct.js";
import CustomCarousel from "../../../helper/CustomCarousel.jsx";
import {getSettings} from "../../../utils/index.js";

const WishList = () => {
    const settings = getSettings("product");
    const {data} = useGetProductQuery()
    const {product} = useGetProduct("wishList")
    return (
        <div className={"container mx-auto p-6"}>
            <Breadcrumbs />
            <div className={"flex justify-between items-center mt-6"}>
                <h3 className={"small-heading-medium"}>Wishlist (6)</h3>
                <Button btnText={"Move All To Bag"} className={"px-12 bg-transparent border border-black"}/>
                <div>
                    <CustomCarousel button={"arrows"} type={"product"} data={product || []}  settings={settings} />
                </div>
            </div>
            <div className={"grid grid-cols-2 lg:grid-cols-4 gap-5 mt-10"}>
                {data?.products.slice(0, 4).map((product) => (
                    <div key={product.id} className={"mt-10"}>
                        <ProductCard product={product} discount={true} wishItem={true}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishList;
