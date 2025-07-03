import React from 'react';
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import {useLocation} from "react-router";
import Rating from "../../../comonComponent/Rating.jsx";

const ProductDetails = () => {
    const location = useLocation()
    const product = location.state
    console.log(product?.images.length)
    return (
        <div className={"container mx-auto"}>
            <Breadcrumbs/>
            <div className={"grid grid-cols-2 lg:grid-cols-11 gap-5 mt-10"}>
                <div >
                    {product?.images.length !==1 ? product.images.map((image, index) => (
                        <div key={index} className={"relative bg-secondaryColor overflow-hidden flex flex-col" +
                            " justify-center items-center mb-5 cursor-pointer"}>
                            <img src={image} alt="" className={"w-full hover:scale-105 transition-all duration-300"}/>
                        </div>
                    )) :(
                        Array(5).fill("").map((_, index) => (
                            <div key={index} className={"relative bg-secondaryColor overflow-hidden flex flex-col" +
                                " justify-center items-center mb-5 cursor-pointer"}>
                                <img src={product?.thumbnail} alt="" className={"w-full hover:scale-105" +
                                    " transition-all duration-300"}/>
                            </div>
                        ))
                    )}
                </div>
                <div className={"lg:col-span-5"}>
                    <div className={"bg-secondaryColor overflow-hidden cursor-pointer"}><img src={product?.images || product?.thumbnail} alt="" className={"w-full hover:scale-105 transition-all duration-300"}/></div>
                </div>
                <div className={"lg:col-span-5 px-10"}>
                    <h1 className={"medium-heading"}>{product?.title}</h1>
                    <div className={"mt-4 flex justify-start items-center gap-2 lg:gap-5 small-text text-text1"} >
                        <Rating value={product?.rating} />
                        <span className={"border-r-2 pr-2 lg:pr-5 border-text1/50 "}>({product?.reviews.length} Reviews)</span>
                        <span className={"text-button"}>{product?.availabilityStatus}</span>
                    </div>
                    <p className={"mt-4 medium-heading"}>${product?.price}</p>
                    <p className={"mt-6 small-text border-b-2 border-text1/50 pb-6"}>{product?.description}</p>
                    <div className={"flex justify-start items-center gap-5 mt-6"}>
                        <span className={"small-heading-medium"}>Color:</span> <div className={"flex justify-start items-center" +
                        " gap-2"}>
                        <span className={"bg-black text-white py-1 rounded-full w-5 h-5"}></span>
                        <span className={"bg-red-500 text-white px-2 py-1 rounded-full w-5 h-5"}></span>
                        <span className={"bg-gray-500 text-white px-2 py-1 rounded-full w-5 h-5"}></span>
                    </div>
                        <div>
                            <span className={"small-heading-medium"}>Size:</span>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
