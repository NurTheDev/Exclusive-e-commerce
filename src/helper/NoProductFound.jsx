import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FiShoppingBag, FiRefreshCw } from 'react-icons/fi';
import { BiCategory } from 'react-icons/bi';
import { MdOutlineFilterList } from 'react-icons/md';
import {useNavigate} from "react-router";

const NoProductsFound = ({
                             searchQuery = '',
                             onClearFilters,
                             onRetry,
                             showSuggestions = true,
                             className = ''
                         }) => {
    const navigate = useNavigate();

    const suggestions = [
        { name: 'Electronics', icon: '📱', path: '/category/electronics' },
        { name: 'Fashion', icon: '👕', path: '/category/fashion' },
        { name: 'Home & Garden', icon: '🏠', path: '/category/home' },
        { name: 'Sports', icon: '⚽', path: '/category/sports' }
    ];

    const handleGoHome = () => {
        navigate('/');
    };

    const handleClearSearch = () => {
        if (onClearFilters) {
            onClearFilters();
        } else {
            navigate('/products');
        }
    };

    return (
        <div className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}>
            {/* Animated Empty Box */}
            <div className="relative mb-8">
                <div className="empty-box-container">
                    <div className="empty-box">
                        <div className="box-lid"></div>
                        <div className="box-body">
                            <div className="box-content">
                                <FiShoppingBag className="text-4xl text-gray-400 animate-bounce" />
                            </div>
                        </div>
                    </div>
                    {/* Floating search icon */}
                    <div className="floating-search">
                        <IoMdSearch className="text-2xl text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Main Message */}
            <div className="max-w-md mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    No Products Found
                </h2>

                {searchQuery ? (
                    <p className="text-gray-600 mb-2">
                        We couldn't find any products matching
                        <span className="font-semibold text-gray-800"> "{searchQuery}"</span>
                    </p>
                ) : (
                    <p className="text-gray-600 mb-2">
                        No products match your current filters.
                    </p>
                )}

                <p className="text-sm text-gray-500">
                    Try adjusting your search or browse our popular categories below.
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mb-8">
                {searchQuery || onClearFilters ? (
                    <button
                        onClick={handleClearSearch}
                        className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
                    >
                        <MdOutlineFilterList className="text-lg" />
                        Clear Filters
                    </button>
                ) : null}

                {onRetry && (
                    <button
                        onClick={onRetry}
                        className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                        <FiRefreshCw className="text-lg" />
                        Try Again
                    </button>
                )}

                <button
                    onClick={handleGoHome}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                    <span>🏠</span>
                    Go to Homepage
                </button>
            </div>

            {/* Popular Categories */}
            {showSuggestions && (
                <div className="w-full max-w-2xl">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
                        <BiCategory className="text-xl" />
                        Popular Categories
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {suggestions.map((category, index) => (
                            <button
                                key={category.name}
                                onClick={() => navigate(category.path)}
                                className="suggestion-card group"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="suggestion-icon">
                                    {category.icon}
                                </div>
                                <span className="suggestion-text">
                                    {category.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Help Text */}
            <div className="mt-8 text-sm text-gray-500">
                <p>Need help? <a href="/contact" className="text-blue-500 hover:underline">Contact our support team</a></p>
            </div>
        </div>
    );
};

export default React.memo(NoProductsFound);
