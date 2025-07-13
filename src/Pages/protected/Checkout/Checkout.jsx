import React from 'react';
import Breadcrumbs from "../../../comonComponent/Breadcrumbs.jsx";
import BillingDetails from "./component/BillingDetails.jsx";
import CheckoutProduct from "./component/CheckoutProduct.jsx";
import {useForm} from "react-hook-form";

const Checkout = () => {
    const handleSubmit = () => {
        console.log("submit")
    };
    return (
        <div className={"container mx-auto px-4"}>
            <Breadcrumbs/>
            <div className={"mt-10 lg:mt-20 flex flex-col lg:flex-row justify-between items-center lg:items-start"}>
                <BillingDetails onSubmit={handleSubmit}/>
                <CheckoutProduct/>
            </div>
        </div>
    );
};

export default Checkout;
