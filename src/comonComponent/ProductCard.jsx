import React from 'react';
import joystick from "../assets/joystick.png";
import {FaRegHeart} from "react-icons/fa";
import {GoEye} from "react-icons/go";
import Button from "./Button.jsx";
const ProductCard = ({product}) => {
    return (
        <div className={"max-w-2xs relative group"}>
            <div className={"relative"}>
                <div className={"p-12 bg-secondaryColor "}>
                    <img src={joystick || ""} alt="" />
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
                <Button className={"bg-black group-hover:opacity-100 opacity-0 transition-all duration-200" +
                    " text-white absolute border-none" +
                    " bottom-0" +
                    " left-0" +
                    " w-full"} btnText={"Add" +
                    " to Cart"} />
            </div>
            <div className={"flex flex-col justify-between gap-2 font-poppins bg-white"}>
                <h3 className={"text-lg mt-4 normal-text-medium"}>{product.name}</h3>
                <div>
                    <span className={"text-lg normal-text-medium "}>$ 20.00</span>
                    <span className={"text-gray-500 line-through ml-2"}>$ 30.00</span>
                </div>
                <div className={"flex items-center mt-2 "}>
                    <span className={"text-yellow-500 text-lg"}>★ ★ ★ ★ ☆</span>
                    <span className={"text-gray-500 ml-2"}>(4.0)</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

