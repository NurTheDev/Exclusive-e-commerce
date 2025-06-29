import React from 'react';
import Heading from "../../../../comonComponent/Heading.jsx";
import CustomCarousel from "../../../../comonComponent/CustomCarousel.jsx";

const FlashSell = () => {
    return (
        <div>
            <Heading heading={"Flash Sales"} title={"Today’s"} timer={true}/>
            <div className={"mt-10"}>
                <CustomCarousel/>
            </div>
        </div>
    );
};

export default FlashSell;
