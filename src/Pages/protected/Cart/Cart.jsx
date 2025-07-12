import React, {useCallback, useEffect, useState} from 'react';
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import useGetProduct from "../../../hooks/useGetProduct.js";
import Button from "../../../comonComponent/Button.jsx";
import CartRow from "./component/CartRow.jsx";
import CartRowSkeleton from "../../../Skeleton/CartRowSkeleton.jsx";
const Cart = () => {
    const {product, loading} = useGetProduct("cart")
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [coupon, setCoupon] = useState("");
    const [isCouponValid, setIsCouponValid] = useState(false);
    const [wrongCouponMessage, setWrongCouponMessage] = useState("");
    const handleUpdate = useCallback(()=>{
        let sum = 0;
        product.forEach((item) => {
            sum += item.price * item.quantity || 1;
        });
        setSubTotal(parseFloat(sum.toFixed(2)));
        setTotal(parseFloat((sum + 100).toFixed(2)));
    }, [product])
    const handleCoupon = useCallback(()=>{
        if(total >0){
            if(coupon === "exclusive100"){
                setTotal(parseFloat((subTotal - 100).toFixed(2)));
                setIsCouponValid(false);
            }else{
                setWrongCouponMessage("Coupon is not valid");
                setIsCouponValid(true);
            }
        }else{
            setIsCouponValid(true);
            setWrongCouponMessage("Update cart first");
        }

    }, [coupon, subTotal, total])
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
                {loading ? (<CartRowSkeleton/>):!loading && product && (
                    product.map((product, index) => (
                        <CartRow
                            key={index}
                            product={product}
                        />
                    ))
                )}
                <div className={"flex justify-between items-center px-3 lg:px-0"}>
                    <Button onClick={() => window.location.href = "/"} btnText={"Return To Shop"} className={"border hover:bg-secondary2 hover:text-white" +
                        " border-black/50 px-12 mt-10"}/>
                    <Button onClick={handleUpdate} btnText={"Update Cart"} className={"border hover:bg-secondary2 hover:text-white" +
                        " border-black/50 px-12 mt-10"}/>
                </div>
            </div>
            <div className={"flex justify-between items-start mt-10"}>
                <div className={"flex justify-center items-start gap-6"}>
                    <div>
                        <input onChange={(e) => setCoupon(e.target.value)} placeholder={"Coupon Code"} type="text" className={"border rounded-lg p-3 w-full"}/>
                        {isCouponValid && (
                            <p className={"text-red-500"}>{wrongCouponMessage}</p>
                        )}
                    </div>
                    <Button onClick={handleCoupon} btnText={"Apply Coupon"} className={"border bg-secondary2 hover:bg-secondaryColor" +
                        " hover:text-black" +
                        " text-white border-black/50 px-12 "}/>
                </div>
                <div className={"lg:w-1/3 border border-gray-300 rounded-lg p-5 flex flex-col "}>
                    <h5 className={"small-heading-semi-bold"}>Cart Total</h5>
                    <div className={"flex justify-between items-center mt-4 border-b border-black/30 pb-4"}>
                        <p>Subtotal</p>
                        <p>$ {subTotal}</p>
                    </div>
                    <div className={"flex justify-between items-center mt-4 border-b border-black/30 pb-4"}>
                        <p>Shipping</p>
                        <p>$ 100</p>
                    </div>
                    {!isCouponValid && coupon === "exclusive100" && (
                        <div className={"flex justify-between items-center mt-4 border-b border-black/30 pb-4"}>
                            <p>Discount</p>
                            <p>-$100</p>
                        </div>
                    )}
                    <div className={"flex justify-between items-center mt-4 "}>
                        <p>Total</p>
                        <p>$ {total}</p>
                    </div>

                    <Button  btnText={"Checkout"} className={"border bg-secondary2 hover:bg-secondaryColor" +
                        " hover:text-black" +
                        " text-white border-black/50 px-12 mt-4"}/>
                </div>
            </div>
        </div>
    );
};

export default Cart;
