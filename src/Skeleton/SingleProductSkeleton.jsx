import React from 'react';

const ProductDetailsSkeleton = () => {
    const size = ["xs", "s", "m", "l", "xl"]; // Just for mapping skeletons

    return (
        <div className="container mx-auto">
            {/* Breadcrumbs Skeleton */}
            <div className="h-5 w-1/3 bg-gray-200 rounded mb-6 animate-pulse" />

            <div className="grid grid-cols-2 lg:grid-cols-11 gap-5 mt-10">
                {/* Left Image Thumbnails Skeleton */}
                <div>
                    {[...Array(5)].map((_, index) => (
                        <div key={index} className="relative bg-gray-200 overflow-hidden flex flex-col justify-center items-center mb-5 h-20 w-20 rounded animate-pulse"></div>
                    ))}
                </div>

                {/* Main Product Image Skeleton */}
                <div className="lg:col-span-5">
                    <div className="bg-gray-200 overflow-hidden flex justify-center items-center h-96 rounded animate-pulse"></div>
                </div>

                {/* Right Product Details Skeleton */}
                <div className="lg:col-span-5 px-10 flex flex-col gap-6">
                    {/* Title */}
                    <div className="h-8 w-2/3 bg-gray-200 rounded animate-pulse" />

                    {/* Rating & Info */}
                    <div className="flex items-center gap-5">
                        <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
                        <div className="h-5 w-16 bg-gray-200 rounded animate-pulse" />
                        <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
                    </div>

                    {/* Price */}
                    <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />

                    {/* Description */}
                    <div className="h-16 w-full bg-gray-200 rounded animate-pulse" />

                    {/* Color */}
                    <div className="flex items-center gap-5">
                        <div className="h-5 w-12 bg-gray-200 rounded animate-pulse" />
                        <div className="flex gap-2">
                            {[...Array(3)].map((_, i) => (
                                <span key={i} className="w-5 h-5 rounded-full bg-gray-300 animate-pulse"></span>
                            ))}
                        </div>
                    </div>

                    {/* Size */}
                    <div className="flex items-center gap-5">
                        <div className="h-5 w-12 bg-gray-200 rounded animate-pulse" />
                        <div className="flex gap-3">
                            {size.map((item, i) => (
                                <span key={i} className="w-7 h-7 rounded bg-gray-300 animate-pulse"></span>
                            ))}
                        </div>
                    </div>

                    {/* Actions (buttons, heart) */}
                    <div className="flex items-center gap-5">
                        <div className="w-20 h-10 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-32 h-10 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                    </div>

                    {/* Delivery/Return Info Skeleton */}
                    <div className="border border-gray-200 rounded-md lg:w-3/4 flex flex-col justify-center items-start p-6 gap-6">
                        <div className="flex items-center gap-3 w-full pb-6 border-b border-gray-200">
                            <div className="w-10 h-10 bg-gray-200 rounded animate-pulse"></div>
                            <div>
                                <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-4 w-32 bg-gray-100 rounded mt-2 animate-pulse"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 w-full pt-6">
                            <div className="w-10 h-10 bg-gray-200 rounded animate-pulse"></div>
                            <div>
                                <div className="h-5 w-24 bg-gray-200 rounded animate-pulse"></div>
                                <div className="h-4 w-32 bg-gray-100 rounded mt-2 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsSkeleton;
