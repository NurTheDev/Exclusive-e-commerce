import React from 'react';
import Banner from "./Component/Banner.jsx";
import FlashSell from "./Component/FlashSell.jsx";
import CatagoryProduct from "./Component/CatagoryProduct.jsx";
import BestSell from "./Component/BestSell.jsx";
import Offer from "./Component/Offer.jsx";
import ExploreProduct from "./Component/ExploreProduct.jsx";
import NewArrivals from "./Component/NewArrivals.jsx";
import FacilitySection from "./Component/Facility.jsx";
import Footer from "../../../comonComponent/Footer.jsx";

const Home = () => {
    return (
        <div className="w-full overflow-x-hidden">
            <Banner/>
            <div className="mt-6 sm:mt-8 lg:mt-16">
                <FlashSell/>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-16">
                <CatagoryProduct/>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-16">
                <BestSell/>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-16">
                <Offer/>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-16">
                <ExploreProduct/>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-16">
                <NewArrivals/>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-16">
                <FacilitySection/>
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-16">
                <Footer/>
            </div>
        </div>
    );
};

export default React.memo(Home);
