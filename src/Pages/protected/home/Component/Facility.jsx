import React from 'react';
import {FacilityData} from "../../../../data/data.js";
import {getImgUrl} from "../../../../utils/index.js";

const FacilityCard = (props) => {
    return (
        <div className={"flex flex-col items-center justify-center gap-y-2"}>
            <div>
                <img src={props.image} alt=""/>
            </div>
            <h3 className={"small-heading-semi-bold mt-4"}>
                {props.title}
            </h3>
            <p className={"small-text"}>
                {props.description}
            </p>
        </div>
    );
};
const FacilitySection =()=>{
    return (
        <div className={"container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"}>{
            FacilityData.map((item, index) => (
                <FacilityCard
                    key={index}
                    image={getImgUrl(item.image)}
                    title={item.title}
                    description={item.description}
                />
            ))
        }
        </div>
    )
}

export default FacilitySection;
