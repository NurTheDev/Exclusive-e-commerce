import React from 'react';

const CartRowSkeleton = () => {
    return (
        <div className={"w-full z-40 bg-white rounded-b-lg text-center" +
            " shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] grid grid-cols-4 items-center py-4" +
            " border-b border-black/10"}>

            {/* Product Info Section */}
            <div className={"flex items-center"}>
                {/* Product Image Skeleton */}
                <div className={"w-16 h-16 bg-gray-300 rounded-full mr-4 animate-pulse"}></div>

                <div className={"flex flex-col items-start gap-1"}>
                    {/* Product Name Skeleton */}
                    <div className={"h-4 bg-gray-300 rounded w-28 animate-pulse"}></div>
                    {/* Product Category Skeleton */}
                    <div className={"h-3 bg-gray-200 rounded w-20 animate-pulse"}></div>
                </div>
            </div>

            {/* Price Section */}
            <div className={"h-4 bg-gray-300 rounded w-14 mx-auto animate-pulse"}></div>

            {/* Quantity Input Section */}
            <div className={"flex justify-center"}>
                <div className={"w-12 h-8 bg-gray-300 rounded-lg animate-pulse"}></div>
            </div>

            {/* Total Price Section */}
            <div className={"h-4 bg-gray-300 rounded w-16 mx-auto animate-pulse"}></div>
        </div>
    );
};

export default CartRowSkeleton;
