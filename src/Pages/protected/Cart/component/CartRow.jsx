import React, {useState} from 'react';
import {updateCart} from "../../../../utils/addToDatabase.js";
import {IoMdCloseCircleOutline} from "react-icons/io";
import {removeCart} from "../../../../utils/removeFromData.js";

const CartRow = ({product}) => {
    const [quantity, setQuantity] = useState(product.quantity ||1);
    const handleQuantity =(e)=>{
        const newQuantity = parseInt(e.target.value, 10) || 1;
        setQuantity(newQuantity);
        updateCart(product, newQuantity)
    }
    const price = (product.price * quantity).toFixed(2);
    return (
        <div className={"w-full z-40 bg-white rounded-b-lg text-center" +
            " shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] grid grid-cols-4 items-center py-4" +
            " border-b border-black/10 hover:bg-secondaryColor transition-all duration-300 cursor-pointer group"}>
            <div className={"flex items-center relative"}>
                <img src={product?.images[0]} alt={product.name} className={"w-16 h-16 object-cover" +
                    " rounded-full mr-4"}/>
                <div className={"flex flex-col items-start"}>
                    <p className={"normal-text"}>{product.name}</p>
                    <p className={"normal-text"}>{product.category}</p>
                </div>
                <div className={"absolute -left-2 -top-2"}>
                    <div onClick={()=>removeCart(product)} className={"w-6 h-6 flex items-center justify-center font-bold" +
                        " transition-all" +
                        " duration-200 text-red-500" +
                        " cursor-pointer opacity-0 group-hover:opacity-100 hover:scale-110 rounded-full bg-white shadow-sm"}>
                        <IoMdCloseCircleOutline size={20} />
                    </div>
                </div>
            </div>
            <p className={"normal-text"}>${product.price}</p>
            <div>
                <input onChange={handleQuantity} value={quantity <= 0 ? 1 : quantity} type="number" className={"w-1/5" +
                    " h-8" +
                    " text-center rounded-lg" +
                    " border" +
                    " border-gray-300 text-gray-900"}/>
            </div>
            <p className={"normal-text"}>${price > 0 ? price : product.price}</p>
        </div>
    )
};

export default CartRow;
