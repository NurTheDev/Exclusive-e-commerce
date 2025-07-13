import React, {useCallback, useState} from 'react';
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import BillingDetails from "./component/BillingDetails.jsx";
import CheckoutProduct from "./component/CheckoutProduct.jsx";
import OrderConfirmationModal from "./component/OrderConfirmationModal.jsx";
const Checkout = () => {
    const [billingData, setBillingData] = useState({});
    const [isProcessing, setIsProcessing] = useState(false);
    const [isBillingComplete, setIsBillingComplete] = useState(false);
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [orderDetails, setOrderDetails] = useState(null);
    // receive data from child component
    const handleBillingChange = useCallback((billingInfo) => {
        setBillingData(billingInfo.data);
        setIsBillingComplete(billingInfo.isValid);
    }, []);
    const generateOrderNumber = () => {
        const timestamp = Date.now();
        const random = Math.random().toString(36).slice(2, 10).toUpperCase();
        return `ORD-${timestamp}-${random}`;
    };
    // receive data from child component
    const handlCheckoutSubmit = useCallback(async(paymentData)=>{
        setIsProcessing(true);
        try{
            const orderData = {
                billing: billingData,
                payment: paymentData,
                ...paymentData,
                timestamp : new Date().toISOString(),
                orderNumber: generateOrderNumber()
            }
            setOrderDetails(orderData);
            setShowOrderModal(true);
        } catch (error) {
            console.error('Checkout failed:', error);
            alert('Checkout failed. Please try again.');
        } finally {
            setIsProcessing(false);
        }
    }, [billingData]);
    const canProceed = isBillingComplete && Object.keys(billingData).length > 0;
    const handleCloseModal = () => {
        setShowOrderModal(false);
        setOrderDetails(null);
    };
    return (
        <div className={"container mx-auto px-4"}>
            <Breadcrumbs/>
            <div className={"mt-10 lg:mt-20 flex flex-col lg:flex-row justify-between items-center lg:items-start"}>
                <BillingDetails onChange={handleBillingChange}/>
                <CheckoutProduct isProcessing={isProcessing} onSubmit={handlCheckoutSubmit} canProceed={canProceed}/>
            </div>
            {/* Order Confirmation Modal */}
            <OrderConfirmationModal
                isOpen={showOrderModal}
                onClose={handleCloseModal}
                orderData={orderDetails}
                orderNumber={orderDetails?.orderNumber}
            />
        </div>
    );
};

export default Checkout;
