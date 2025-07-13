import React, {useState} from 'react';
import bkash from "../../../../assets/bkash.png";
import visa from "../../../../assets/visa.png";
import mastercard from "../../../../assets/master.png";
import nagad from "../../../../assets/nagad.png";
import Button from "../../../../comonComponent/Button.jsx";
import {useLocation} from "react-router";

const CheckoutProduct = () => {
    const {state} = useLocation()

    // Local state for checkout page
    const [coupon, setCoupon] = useState("");
    const [isCouponApplied, setIsCouponApplied] = useState(state?.isCouponApplied || false);
    const [couponError, setCouponError] = useState("");
    const [currentTotal, setCurrentTotal] = useState(state?.total || 0);

    const handleCoupon = () => {
        // Check if coupon is not already applied
        if (!isCouponApplied && coupon.trim() !== "") {
            if (state?.subTotal > 0) {
                if (coupon === "exclusive100") {
                    // Calculate new total: subtotal + shipping - discount
                    const newTotal = parseFloat((state.subTotal + 100 - 100).toFixed(2));
                    setCurrentTotal(newTotal);
                    setIsCouponApplied(true);
                    setCouponError("");
                } else {
                    setCouponError("Coupon is not valid");
                    setIsCouponApplied(false);
                }
            } else {
                setCouponError("Invalid cart total");
                setIsCouponApplied(false);
            }
        } else if (isCouponApplied) {
            setCouponError("You have already applied a coupon");
        } else {
            setCouponError("Please enter a coupon code");
        }
    }

    return (
        <div className={"md:w-1/2"}>
            <div>
                {state?.product?.map((item, index) => (
                    <div key={item.id || index} className={"flex justify-between items-center py-4"}>
                        <div className={"flex items-center gap-4"}>
                            <div>
                                <img src={item.images?.[0]} alt={item.title || item.name} className={"w-14 h-14 object-cover"}/>
                            </div>
                            <p>{item.title || item.name}</p>
                        </div>
                        <p>${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                    </div>
                ))}
            </div>

            <div>
                <div className={"flex justify-between items-center border-b border-black/10 py-4"}>
                    <p>Subtotal:</p>
                    <p>${state?.subTotal?.toFixed(2) || "0.00"}</p>
                </div>
                <div className={"flex justify-between items-center border-b border-black/10 py-4"}>
                    <p>Shipping:</p>
                    <p>$100.00</p>
                </div>
                {isCouponApplied && coupon === "exclusive100" && (
                    <div className={"flex justify-between items-center border-b border-black/10 py-4"}>
                        <p>Discount:</p>
                        <p className={"text-green-600"}>-$100.00</p>
                    </div>
                )}
            </div>

            <div className={"flex justify-between items-center py-4"}>
                <p className={"font-semibold"}>Total:</p>
                <p className={"font-semibold"}>${currentTotal.toFixed(2)}</p>
            </div>

            <div className={"flex flex-col items-start justify-between gap-4"}>
                <div className={"flex items-center justify-between gap-4 w-full"}>
                    <div className={"flex items-center gap-2"}>
                        <input type="radio" name="payment" id="bank"/>
                        <label htmlFor="bank">Bank</label>
                    </div>
                    <div>
                        <div className={"flex items-center gap-4"}>
                            <div><img src={bkash} alt="bKash" className={"w-14"}/></div>
                            <div><img src={nagad} alt="Nagad" className={"w-14"}/></div>
                            <div><img src={visa} alt="Visa" className={"w-10"}/></div>
                            <div><img src={mastercard} alt="Mastercard" className={"w-10"}/></div>
                        </div>
                    </div>
                </div>
                <div className={"flex items-center gap-2"}>
                    <input defaultChecked type="radio" name="payment" id="cod"/>
                    <label htmlFor="cod">Cash on Delivery</label>
                </div>
            </div>

            <div className={"flex justify-start items-start gap-6 mt-4"}>
                <div>
                    <input
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder={"Coupon Code"}
                        type="text"
                        className={"border rounded-lg p-3 w-full"}
                        disabled={isCouponApplied}
                    />
                    {couponError && (
                        <p className={"text-red-500 text-sm mt-1"}>{couponError}</p>
                    )}
                    {isCouponApplied && (
                        <p className={"text-green-600 text-sm mt-1"}>Coupon applied successfully!</p>
                    )}
                </div>
                <Button
                    onClick={handleCoupon}
                    btnText={isCouponApplied ? "Applied" : "Apply Coupon"}
                    disabled={isCouponApplied}
                    className={"border bg-secondary2 hover:bg-secondaryColor hover:text-black text-white border-black/50 px-12 " +
                        (isCouponApplied ? "opacity-50 cursor-not-allowed" : "")}
                />
            </div>

            <div className={"mt-5 lg:mt-10"}>
                <Button
                    btnText={"Place Order"}
                    className={"border bg-secondary2 hover:bg-secondaryColor hover:text-black text-white border-black/50 px-12 w-full"}
                />
            </div>
        </div>
    );
};

export default CheckoutProduct;
