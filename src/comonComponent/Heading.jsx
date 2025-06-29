import React from "react";
import CustomCarousel from "./CustomCarousel.jsx";
import Timer from "../helper/Timer.jsx";

const Heading = (props) => {
const {heading, title, timer} = props;
    return (<div className={"container mx-auto"}>
        <h4 className={"title normal-text-semi-bold"}>{title}</h4>
        <div className={"flex justify-between items-center mt-8 px-3 lg:px-0 lg:mt-10"}>
            <div className={"flex items-center lg:gap-5 "}>
                <h1 className={"large-heading-semi-bold"}>
                    {heading}
                </h1>
                {timer && <Timer/>}
            </div>
        </div>

    </div>);
};

export default React.memo(Heading);
