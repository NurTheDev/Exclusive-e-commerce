import React, {useState} from 'react';
import Button from "../../../../comonComponent/Button.jsx";
import {useLocation} from "react-router";
const CheckoutProduct = ({onSubmit, isProcessing, canProceed}) => {
    const {state} = useLocation()
    // Local state for checkout page
    const [coupon, setCoupon] = useState("");
    const [isCouponApplied, setIsCouponApplied] = useState(state?.isCouponApplied || false);
    const [couponError, setCouponError] = useState("");
    const [currentTotal, setCurrentTotal] = useState(state?.total || 0);
    // for payment method
    const [paymentData, setPaymentData] = useState({
        paymentMethod: "credit-card",
        cardHolder: "",
        cardNumber: '',
        expiryDate: '',
        cvv: "",
    });
    const handlePaymentChange = (event) => {
        const {name, value} = event.target;
        setPaymentData(prevData =>({
            ...prevData,
            [name]: value
        }))
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(paymentData);
    }
    const handleCoupon = () => {
        // Check if coupon is not already applied
        if (!isCouponApplied && coupon.trim() !== "") {
            if (state?.subTotal > 0) {
                if (coupon === "exclusive100") {
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
            <form  className="mt-6" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Payment Method</label>
                    <select
                        name="paymentMethod"
                        value={paymentData.paymentMethod}
                        onChange={handlePaymentChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="credit-card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                        <option value="paytm">Paytm</option>
                        <option value="amazon-pay">Amazon Pay</option>
                        <option value="google-pay">Google Pay</option>
                        <option value="phonepe">PhonePe</option>
                        <option value="mobiKwik">MobiKwik</option>
                        <option value="freecharge">Freecharge</option>
                        <option value="cash-on-delivery">Cash on Delivery</option>
                    </select>
                </div>
                {paymentData.paymentMethod === 'credit-card' && (
                    <>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="cardNumber"
                                value={paymentData.cardNumber}
                                onChange={handlePaymentChange}
                                placeholder="Card Number"
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div className="flex gap-4 mb-4">
                            <input
                                type="text"
                                name="expiryDate"
                                value={paymentData.expiryDate}
                                onChange={handlePaymentChange}
                                placeholder="MM/YY"
                                className="w-1/2 p-2 border rounded"
                                required
                            />
                            <input
                                type="text"
                                name="cvv"
                                value={paymentData.cvv}
                                onChange={handlePaymentChange}
                                placeholder="CVV"
                                className="w-1/2 p-2 border rounded"
                                required
                            />
                        </div>
                    </>
                )}
                <button
                    type="submit"
                    disabled={!canProceed || isProcessing}
                    className={`w-full py-3 px-4 rounded font-medium ${
                        canProceed && !isProcessing
                            ? 'bg-secondary2 text-white hover:bg-secondaryColor hover:text-black hover:border' +
                            ' border-black/50 transition-all duration-200 hover:scale-95'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    {isProcessing ? 'Processing...' : 'Place Order'}
                </button>
            </form>


        </div>
    );
};

export default CheckoutProduct;
