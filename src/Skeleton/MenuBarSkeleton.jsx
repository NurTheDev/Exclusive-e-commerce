import React from 'react';

const CategoryListSkeleton = ({ itemCount = 6, showHeading = true, showMoreButton = true }) => {
    return (
        <div className="animate-pulse">
            {showHeading && (
                <div className="mb-4">
                    <div className="h-6 bg-gray-300 rounded w-32 mb-3"></div>
                </div>
            )}

            <ul className="menu w-full font-poppins lg:border-r lg:border-black/30">
                {[...Array(itemCount)].map((_, index) => (
                    <li key={index}>
                        <div className="w-full flex items-center justify-between p-3 rounded-lg">
                            {/* Category name skeleton */}
                            <div
                                className="h-4 bg-gray-300 rounded"
                                style={{
                                    width: `${Math.random() * 40 + 60}px` // Random width between 60-100px
                                }}
                            ></div>

                            {/* Arrow icon skeleton */}
                            <div className="w-4 h-4 bg-gray-300 rounded"></div>
                        </div>
                    </li>
                ))}

                {showMoreButton && (
                    <li>
                        <div className="w-full flex items-center justify-between p-3 bg-gray-200 rounded-lg">
                            <div className="h-4 bg-gray-400 rounded w-28"></div>
                            <div className="w-4 h-4 bg-gray-400 rounded"></div>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default React.memo(CategoryListSkeleton);
