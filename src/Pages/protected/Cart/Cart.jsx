import React from 'react';
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import useGetProduct from "../../../hooks/useGetProduct.js";
import Button from "../../../comonComponent/Button.jsx";
import {updateCart} from "../../../utils/addToDatabase.js";
const CartRow =({product})=>{
    const [quantity, setQuantity] = React.useState(1);
    const handleQuantity =(e)=>{
        const value = e.target.value;
        setQuantity(value);
    }
    return(
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
                <input onChange={handleQuantity} value={quantity} type="number" className={"w-1/5 h-8" +
                    " text-center rounded-lg" +
                    " border" +
                    " border-gray-300"}/>
            </div>
            <p className={"normal-text"}>${product.price}</p>
        </div>
    )
}
const Cart = () => {

    const {product, loading} = useGetProduct("cart")
    // Don't render CustomCarousel until data is loaded
    const cartList = Array.isArray(product) ? product :
        (product && typeof product === 'object') ? Object.values(product) : [];
    console.log(cartList)

    const handleUpdateCart = (product, quantity)=>{
        updateCart(product, quantity)
    }
    return (
        <div className={"container mx-auto px-6 lg:px-0"}>
            <Breadcrumbs/>
            <div className={"relative mt-10"}>
                <div className={"static w-full z-50 bg-white rounded-b-lg text-center" +
                    " shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] grid grid-cols-4 items-center py-4"}>
                    <p className={"normal-text"}>Product</p>
                    <p className={"normal-text"}>Price</p>
                    <p className={"normal-text"}>Quantity</p>
                    <p className={"normal-text"}>Total</p>
                </div>
                {!loading && product && (
                    cartList.map((product, index) => (
                        <CartRow
                            key={index}
                            product={product}
                        />
                    ))
                )}
                <div className={"flex justify-between items-center px-3 lg:px-0"}>
                    <Button btnText={"Return To Shop"} className={"border hover:bg-secondary2 hover:text-white border-black/50 px-12 mt-10"}/>
                    <Button btnText={"Update Cart"} className={"border hover:bg-secondary2 hover:text-white border-black/50 px-12 mt-10"}/>
                </div>
            </div>
            <div className={"flex justify-between items-start mt-10"}>
                <div className={"flex justify-center items-center gap-6"}>
                    <input placeholder={"Coupon Code"} type="text" className={"border rounded-lg p-3 w-full"}/>
                    <Button btnText={"Apply Coupon"} className={"border bg-secondary2 hover:bg-secondaryColor" +
                        " hover:text-black" +
                        " text-white border-black/50 px-12 "}/>
                </div>
                <div className={"lg:w-1/3 border border-gray-300 rounded-lg p-5 flex flex-col "}>
                    <h5 className={"small-heading-semi-bold"}>Cart Total</h5>
                    <div className={"flex justify-between items-center mt-4 border-b border-black/30 pb-4"}>
                        <p>Subtotal</p>
                        <p>$ 1000</p>
                    </div>
                    <div className={"flex justify-between items-center mt-4 border-b border-black/30 pb-4"}>
                        <p>Shipping</p>
                        <p>$ 1000</p>
                    </div>
                    <div className={"flex justify-between items-center mt-4 "}>
                        <p>Total</p>
                        <p>$ 1000</p>
                    </div>
                    <Button onClick={handleUpdateCart} btnText={"Checkout"} className={"border bg-secondary2 hover:bg-secondaryColor" +
                        " hover:text-black" +
                        " text-white border-black/50 px-12 mt-4"}/>
                </div>
            </div>
        </div>
    );
};

export default Cart;
