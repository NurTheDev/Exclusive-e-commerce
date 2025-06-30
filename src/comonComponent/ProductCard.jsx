import React from 'react';
import {FaRegHeart} from "react-icons/fa";
import {GoEye} from "react-icons/go";
import Button from "./Button.jsx";
import ProductSkeleton from "../helper/ProductSkeleton.jsx";
const ProductCard = ({product = {}}) => {

    return (
        <>
            {Object.keys(product).length > 0 ? <div className={"relative group"}>
                <div className={"relative"}>
                    <div className={"p-12 bg-secondaryColor "}>
                        <img src={product.thumbnail} alt="" />
                    </div>
                    <div className={"flex justify-between items-start absolute w-full p-3 top-0"}>
                    <span className={"bg-secondary2 px-3 py-1 small-text text-white rounded-sm "}>
                        -40%
                    </span>
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
                        <span className={"text-lg normal-text-medium "}>$ {product.price}</span>
                        <span className={"text-gray-500 line-through ml-2"}>$ {Math.floor(product.price * product.discountPercentage)}</span>
                    </div>
                    <div className={"flex items-center mt-2 "}>
                        <span className={"text-yellow-500 text-lg"}>★ ★ ★ ★ ☆</span>
                        <span className={"text-gray-500 ml-2"}>(4.0)</span>
                    </div>
                </div>
            </div> : <ProductSkeleton/> }
        </>

    );
};

export default ProductCard;

