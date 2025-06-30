import React from 'react';
import Banner from "./Component/Banner.jsx";
import FlashSell from "./Component/FlashSell.jsx";
import CatagoryProduct from "./Component/CatagoryProduct.jsx";
import BestSell from "./Component/BestSell.jsx";
import Offer from "./Component/Offer.jsx";
import ExploreProduct from "./Component/ExploreProduct.jsx";

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className={"lg:mt-32 mt-10"}>
                <FlashSell/>
            </div>
            <div className={"lg:mt-32 mt-10"}>
                <CatagoryProduct/>
            </div>
            <div className={"lg:mt-32 mt-10"}>

                 <BestSell/>
            </div>
            <div className={"lg:mt-32 mt-10"}>
                <Offer/>
            </div>
            <div className={"lg:mt-32 mt-10"}>
                <ExploreProduct/>
            </div>
        </div>
    );
};

export default React.memo(Home);
