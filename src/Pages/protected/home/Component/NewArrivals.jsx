import React from 'react';
import {useGetProductByCategoryQuery} from "../../../../features/API/productAPI.js";
import Loading from "../../../../helper/Loading.jsx";
import ErrorComponent from "../../../../helper/ErrorComponent.jsx";

const NewArrivals = () => {
    const {data, error, isLoading} = useGetProductByCategoryQuery("motorcycle");
    if (isLoading) return <Loading />;
    if (error) return <ErrorComponent error={error} />;

    // Get the first 4 products from the API data
    const products = data?.products?.slice(0, 4) || [];

    // Define grid layouts for different products
    const getGridClass = (index) => {
        switch(index) {
            case 0: return "relative lg:col-span-2 row-span-2"; // Large item
            case 1: return "relative lg:col-span-2 h-full"; // Wide item
            case 2:
            case 3: return "relative min-h-[140px]"; // Small items
            default: return "relative";
        }
    };

    const getBackgroundColor = (index) => {
        const colors = ["bg-black", "bg-gray-800", "bg-gray-700", "bg-gray-900"];
        return colors[index] || "bg-black";
    };

    return (
        <div className={"container mx-auto"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 lg:grid-cols-4 gap-5 lg:max-h-[600px]"}>
                {products.map((product, index) => (
                    <div key={product.id} className={getGridClass(index)}>
                        <div className={`${getBackgroundColor(index)} h-full`}>
                            <img
                                src={product.thumbnail || product.images?.[0] || ""}
                                alt={product.title}
                                className={"w-full h-full object-contain"}
                            />
                        </div>
                        <div className={"absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start gap-y-5 p-5 "}>
                            <h3 className={"medium-heading text-white"}>{product.title}</h3>
                            <p className={"small-text text-white line-clamp-2"}>
                                {product.description}
                            </p>
                            <div className="flex items-center gap-2 mb-2">
                                <span className={"normal-text-medium text-white font-bold"}>
                                    ${product.price}
                                </span>
                                {product.discountPercentage && (
                                    <span className={"small-text text-green-400"}>
                                        -{Math.round(product.discountPercentage)}% off
                                    </span>
                                )}
                            </div>
                            <a
                                href={`#product/${product.id}`}
                                className={"normal-text-medium text-white transition-all duration-150 hover:underline"}
                            >
                                Shop Now
                            </a>
                        </div>
                    </div>
                ))}

                {/* Fill remaining slots if less than 4 products */}
                {products.length < 4 && Array.from({ length: 4 - products.length }).map((_, index) => (
                    <div key={`empty-${index}`} className={getGridClass(products.length + index)}>
                        <div className="bg-gray-600 h-full flex items-center justify-center">
                            <div className="text-center p-5">
                                <h3 className={"medium-heading text-white"}>Coming Soon</h3>
                                <p className={"small-text text-white"}>New products arriving soon</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default React.memo(NewArrivals);
