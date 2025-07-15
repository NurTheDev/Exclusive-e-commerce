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
        <div className={"w-full z-40 bg-white rounded-lg shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)]" +
            " border-b border-black/10 hover:bg-secondaryColor transition-all duration-300 group relative"}>

            {/* Desktop/Tablet Grid Layout */}
            <div className={"hidden md:grid grid-cols-4 items-center py-4 px-4 text-center"}>
                <div className={"flex items-center relative justify-start"}>
                    <img src={product?.images[0]} alt={product.name} className={"w-16 h-16 object-cover rounded-lg mr-4"}/>
                    <div className={"flex flex-col items-start"}>
                        <p className={"normal-text font-medium"}>{product.name}</p>
                        <p className={"text-sm text-gray-500"}>{product.category}</p>
                    </div>
                    <button
                        onClick={()=>removeCart(product)}
                        className={"absolute -top-2 -left-2 w-6 h-6 flex items-center justify-center" +
                            " text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100" +
                            " transition-all duration-200 hover:scale-110 rounded-full bg-white shadow-sm"}>
                        <IoMdCloseCircleOutline size={20} />
                    </button>
                </div>
                <p className={"normal-text"}>${product.price}</p>
                <div className={"flex justify-center"}>
                    <input
                        onChange={handleQuantity}
                        value={quantity <= 0 ? 1 : quantity}
                        type="number"
                        min="1"
                        className={"w-16 h-10 text-center rounded-lg border border-gray-300 text-gray-900"}
                    />
                </div>
                <p className={"normal-text font-semibold"}>${price > 0 ? price : product.price}</p>
            </div>

            {/* Mobile Card Layout */}
            <div className={"md:hidden p-4"}>
                <div className={"flex gap-4 relative"}>
                    {/* Remove Button - Mobile */}
                    <button
                        onClick={()=>removeCart(product)}
                        className={"absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center" +
                            " text-red-500 hover:text-red-700 transition-all duration-200" +
                            " rounded-full bg-white shadow-md border border-gray-200 z-10"}>
                        <IoMdCloseCircleOutline size={20} />
                    </button>

                    {/* Product Image */}
                    <img
                        src={product?.images[0]}
                        alt={product.name}
                        className={"w-20 h-20 object-cover rounded-lg flex-shrink-0"}
                    />

                    {/* Product Info */}
                    <div className={"flex-1 min-w-0"}>
                        <h3 className={"font-semibold text-base text-gray-900 mb-1 line-clamp-2"}>{product.name}</h3>
                        <p className={"text-sm text-gray-500 mb-2"}>{product.category}</p>

                        {/* Price and Quantity Row */}
                        <div className={"flex items-center justify-between"}>
                            <div className={"flex items-center gap-3"}>
                                <span className={"text-sm font-medium text-gray-700"}>Qty:</span>
                                <input
                                    onChange={handleQuantity}
                                    value={quantity <= 0 ? 1 : quantity}
                                    type="number"
                                    min="1"
                                    className={"w-16 h-8 text-center rounded-md border border-gray-300 text-gray-900 text-sm"}
                                />
                            </div>
                            <div className={"text-right"}>
                                <p className={"text-sm text-gray-500"}>Unit: ${product.price}</p>
                                <p className={"text-lg font-bold text-gray-900"}>${price > 0 ? price : product.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartRow;
