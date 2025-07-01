import React from 'react';
import { getImgUrl} from "../utils/index.js";

const CategoryCard = (props) => {

    return (
        <div className="flex flex-col items-center justify-center group rounded-sm border py-6 w-full border-black/30 hover:shadow-lg hover:scale-95 transition-all duration-300 cursor-pointer hover:bg-secondary2 hover:text-white">
            <img
                src={getImgUrl(props.data.image)}
                alt={props.data.name}
                className="w-24 h-24 object-cover mb-4 rounded-full transition-all duration-300 group-hover:scale-105 group-hover:invert"
            />
            <h3 className="text-lg font-semibold ">{props.data.name}</h3>
        </div>
    );
};

export default CategoryCard;
