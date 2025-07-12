import React, {useState} from 'react';
import {updateCart} from "../../../../utils/addToDatabase.js";

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
            " border-b border-black/10"}>
            <div className={"flex items-center"}>
                <img src={product?.images[0]} alt={product.name} className={"w-16 h-16 object-cover" +
                    " rounded-full mr-4"}/>
                <div className={"flex flex-col items-start"}>
                    <p className={"normal-text"}>{product.name}</p>
                    <p className={"normal-text"}>{product.category}</p>
                </div>
            </div>
            <p className={"normal-text"}>${product.price}</p>
            <div>
                <input onChange={handleQuantity} value={quantity <= 0 ? 1 : quantity} type="number" className={"w-1/5" +
                    " h-8" +
                    " text-center rounded-lg" +
                    " border" +
                    " border-gray-300"}/>
            </div>
            <p className={"normal-text"}>${price > 0 ? price : product.price}</p>
        </div>
    );
};

export default CartRow;
