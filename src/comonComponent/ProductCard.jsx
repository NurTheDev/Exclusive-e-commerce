import React from 'react';
import {FaRegHeart} from "react-icons/fa";
import {GoEye} from "react-icons/go";
import Button from "./Button.jsx";
import ProductSkeleton from "../helper/ProductSkeleton.jsx";
import Rating from "./Rating.jsx";
import {getDiscountPrice} from "../utils/index.js";
const ProductCard = ({product = {}, loading, discount}) => {
    return (
        <>
            {!loading ? <div className={"relative group"} key={product.id}>
                <div className={"relative"}>
                    <div className={"p-12 bg-secondaryColor "}>
                        <img src={product.images} alt="" />
                    </div>
                    <div className={"flex justify-between items-start absolute w-full p-3 top-0"}>
                        {discount && <span className={"bg-red-500 text-white px-2 py-1 rounded-full"}>{Math.round(product.discountPercentage)}% OFF</span>}
                        <div className={"text-xl"}>
                            <span className={"bg-white hover:scale-95 cursor-pointer w-10 h-10 flex justify-center items-center rounded-full mb-3"}><FaRegHeart /></span>
                            <span className={"bg-white hover:scale-95 cursor-pointer  w-10 h-10 flex justify-center" +
                                " items-center" +
                                " rounded-full"}><GoEye /></span>
                        </div>
                    </div>
                    <Button className={"bg-black group-hover:opacity-100 opacity-0" +
                        " text-white absolute" +
                        " bottom-0" +
                        " left-0" +
                        " w-full"} btnText={"Add" +
                        " to Cart"} />
                </div>
                <div className={"flex flex-col justify-between gap-2 font-poppins bg-white"}>
                    <h3 className={"text-lg mt-4 normal-text-medium"}>{product.title}</h3>
                    <div>
                        <span className={"text-lg normal-text-medium "}>$ {getDiscountPrice(product.price, product.discountPercentage)}</span>
                        <span className={"text-gray-500 line-through ml-2"}>$ {product.price}</span>
                    </div>
                    <div className={"flex items-center mt-2 "}>
                        <span className={"text-yellow-500 text-lg"}><Rating value={product.rating}/></span>
                        <span className={"text-gray-500 ml-2"}>({Math.round(product.rating)})</span>
                    </div>
                </div>
            </div> : <ProductSkeleton/> }
        </>

    );
};

export default ProductCard;

