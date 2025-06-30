import React from 'react';

const ProductCardSkeleton = () => {
    return (
        <div className="relative group animate-pulse">
            <div className="relative">
                {/* Main product image skeleton */}
                <div className="p-12 bg-gray-200">
                    <div className="w-full h-32 bg-gray-300 rounded"></div>
                </div>

                {/* Top overlay skeleton (discount badge and action buttons) */}
                <div className="flex justify-between items-start absolute w-full p-3 top-0">
                    {/* Discount badge skeleton */}
                    <div className="bg-gray-300 px-3 py-1 rounded-sm w-12 h-6"></div>

                    {/* Action buttons skeleton */}
                    <div className="text-xl">
                        <div className="bg-gray-300 w-10 h-10 rounded-full mb-3"></div>
                        <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
                    </div>
                </div>

                {/* Add to cart button skeleton */}
                <div className="bg-gray-300 absolute bottom-0 left-0 w-full h-10"></div>
            </div>

            {/* Product details skeleton */}
            <div className="flex flex-col justify-between gap-2 font-poppins bg-white">
                {/* Product name skeleton */}
                <div className="mt-4">
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                </div>

                {/* Price skeleton */}
                <div className="flex items-center gap-2">
                    <div className="h-5 bg-gray-300 rounded w-16"></div>
                    <div className="h-5 bg-gray-200 rounded w-16"></div>
                </div>

                {/* Rating skeleton */}
                <div className="flex items-center mt-2 gap-2">
                    <div className="h-5 bg-gray-300 rounded w-24"></div>
                    <div className="h-4 bg-gray-200 rounded w-8"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
