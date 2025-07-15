import React, {useCallback, useMemo, useState} from 'react';
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import useGetProduct from "../../../hooks/useGetProduct.js";
import Button from "../../../comonComponent/Button.jsx";
import CartRow from "./component/CartRow.jsx";
import CartRowSkeleton from "../../../Skeleton/CartRowSkeleton.jsx";
import {useNavigate} from "react-router";

const Cart = () => {
    const {product, loading} = useGetProduct("cart")
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [coupon, setCoupon] = useState("");
    const [isCouponApplied, setIsCouponApplied] = useState(false);
    const [couponError, setCouponError] = useState("");
    const navigate = useNavigate();
    const productList = useMemo(() => (
        Array.isArray(product) ? product :
            (product && typeof product === 'object') ? Object.values(product) : []
    ), [product])
    const handleUpdate = useCallback(()=>{
        let sum = 0;
        productList.forEach((item) => {
            sum += item.price * (item.quantity || 1);
        });
        setSubTotal(parseFloat(sum.toFixed(2)));
        setTotal(parseFloat((sum + 100).toFixed(2)));
        setIsCouponApplied(false);
        setCouponError("");
    }, [productList])

    const handleCoupon = useCallback(()=>{
        if(subTotal > 0){
            if(coupon === "exclusive100"){
                setTotal(parseFloat((subTotal + 100 - 100).toFixed(2))); // subTotal + shipping - discount
                setIsCouponApplied(true);
                setCouponError("");
            } else {
                setCouponError("Coupon is not valid");
                setIsCouponApplied(false);
            }
        } else {
            setCouponError("Update cart first");
            setIsCouponApplied(false);
        }
    }, [coupon, subTotal])

    const handleCheckout = useCallback(()=>{
        if(total > 0){
            navigate("/checkout", {
                state: {
                    total: total,
                    subTotal: subTotal,
                    isCouponApplied: isCouponApplied,
                    coupon: coupon,
                    product: productList
                }
            });
        } else {
            setCouponError("Update cart first");
            alert("Update cart first");
        }
    }, [coupon, isCouponApplied, navigate, subTotal, total, productList])

    return (
        <div className={"container mx-auto px-6 lg:px-0"}>
            <Breadcrumbs/>
            <div className={"relative mt-10"}>
                <div className={"lg:static w-full z-50 bg-white rounded-b-lg text-center hidden" +
                    " shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] lg:grid grid-cols-4 items-center py-4"}>
                    <p className={"normal-text"}>Product</p>
                    <p className={"normal-text"}>Price</p>
                    <p className={"normal-text"}>Quantity</p>
                    <p className={"normal-text"}>Total</p>
                </div>
                {loading ? (<CartRowSkeleton/>):!loading && product && (
                    productList.map((product, index) => (
                        <CartRow
                            key={product.id || index}
                            product={product}
                        />
                    ))
                )}
                <div className={"flex justify-between gap-x-5 items-center lg:px-3 lg:px-0"}>
                    <Button
                        onClick={() => navigate("/")}
                        btnText={"Return To Shop"}
                        className={"border hover:bg-secondary2 hover:text-white border-black/50 px-12 mt-10"}
                    />
                    <Button
                        onClick={handleUpdate}
                        btnText={"Update Cart"}
                        className={"border hover:bg-secondary2 hover:text-white border-black/50 px-12 mt-10"}
                    />
                </div>
            </div>
            <div className={"flex flex-col lg:flex-row justify-between items-start mt-10"}>
                <div className={"flex justify-center items-start gap-6"}>
                    <div>
                        <input
                            onChange={(e) => setCoupon(e.target.value)}
                            placeholder={"Coupon Code"}
                            type="text"
                            className={"border rounded-lg p-3 w-full"}
                        />
                        {couponError && (
                            <p className={"text-red-500"}>{couponError}</p>
                        )}
                    </div>
                    <Button
                        onClick={handleCoupon}
                        btnText={"Apply Coupon"}
                        className={"border bg-secondary2 hover:bg-secondaryColor hover:text-black text-white border-black/50 px-12"}
                    />
                </div>
                <div className={"lg:w-1/3 w-full mt-10 lg:mt-0 border border-gray-300 rounded-lg p-5 flex flex-col"}>
                    <h5 className={"small-heading-semi-bold"}>Cart Total</h5>
                    <div className={"flex justify-between items-center mt-4 border-b border-black/30 pb-4"}>
                        <p>Subtotal</p>
                        <p>$ {subTotal}</p>
                    </div>
                    <div className={"flex justify-between items-center mt-4 border-b border-black/30 pb-4"}>
                        <p>Shipping</p>
                        <p>$ 100</p>
                    </div>
                    {isCouponApplied && coupon === "exclusive100" && (
                        <div className={"flex justify-between items-center mt-4 border-b border-black/30 pb-4"}>
                            <p>Discount</p>
                            <p>-$100</p>
                        </div>
                    )}
                    <div className={"flex justify-between items-center mt-4"}>
                        <p>Total</p>
                        <p>$ {total}</p>
                    </div>

                    <Button
                        onClick={handleCheckout}
                        btnText={"Checkout"}
                        className={"border bg-secondary2 hover:bg-secondaryColor hover:text-black text-white border-black/50 px-12 mt-4"}
                    />
                </div>
            </div>
        </div>
    );
};

export default Cart;
