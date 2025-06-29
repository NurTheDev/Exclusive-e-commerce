import React from 'react';
import {getCategoryImg} from "../utils/index.js";

const CategoryCard = (props) => {

    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <img
                    src={getCategoryImg(props.data.image)}
                    alt={props.data.name}
                    className="w-24 h-24 object-cover mb-4 rounded-full"
                />
                <h3 className="text-lg font-semibold text-gray-800">{props.data.name}</h3>
            </div>
        </div>
    );
};

export default CategoryCard;
