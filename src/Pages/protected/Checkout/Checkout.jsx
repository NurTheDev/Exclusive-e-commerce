import React, {useCallback, useState} from 'react';
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import BillingDetails from "./component/BillingDetails.jsx";
import CheckoutProduct from "./component/CheckoutProduct.jsx";

const Checkout = () => {
    const [billingData, setBillingData] = useState({});
    const [isProcessing, setIsProcessing] = useState(false);
    const [isBillingComplete, setIsBillingComplete] = useState(false);
    // receive data from child component
    const handleBillingChange = useCallback((billingInfo) => {
        setBillingData(billingInfo.data);
        setIsBillingComplete(billingInfo.isValid);
    }, []);
    // receive data from child component
    const handlCheckoutSubmit = useCallback(async(paymentData)=>{
        setIsProcessing(true);
        try{
            const orderData = {
                billing: billingData,
                payment: paymentData,
                timestamp : new Date().toISOString()
            }
            console.log(orderData);
        } catch (error) {
            console.error('Checkout failed:', error);
            alert('Checkout failed. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    }, [billingData]);
    const canProceed = isBillingComplete && Object.keys(billingData).length > 0;

    return (
        <div className={"container mx-auto px-4"}>
            <Breadcrumbs/>
            <div className={"mt-10 lg:mt-20 flex flex-col lg:flex-row justify-between items-center lg:items-start"}>
                <BillingDetails onChange={handleBillingChange}/>
                <CheckoutProduct isProcessing={isProcessing} onSubmit={handlCheckoutSubmit} canProceed={canProceed}/>
            </div>
        </div>
    );
};

export default Checkout;
