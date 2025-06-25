import React from 'react';
import Banner from "./Component/Banner.jsx";
import FlashSell from "./Component/FlashSell.jsx";

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className={"lg:mt-32 mt-10"}>
                <FlashSell/>
            </div>
        </div>
    );
};

export default React.memo(Home) || Home;
