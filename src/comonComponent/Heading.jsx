import React from "react";
import CustomCarousel from "../helper/CustomCarousel.jsx";
import Timer from "../helper/Timer.jsx";

const Heading = (props) => {
    const {heading, title} = props;
    return (<div className={"flex flex-col justify-between lg:justify-start  gap-y-5"}>
        <h4 className={"title normal-text-semi-bold ml-8 mb-5"}>{title}</h4>
        <div className={"flex justify-between items-center px-3 lg:px-0"}>
            <div className={"flex items-center lg:gap-5 "}>
                <h1 className={"large-heading-semi-bold"}>
                    {heading}
                </h1>
            </div>
        </div>

    </div>);
};

export default React.memo(Heading);
