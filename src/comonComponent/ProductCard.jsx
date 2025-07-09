import React, { useState, useCallback } from 'react';
import { FaHeart, FaRegHeart, FaRegTrashAlt } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import { useNavigate } from "react-router";

import Button from "./Button.jsx";
import ProductSkeleton from "../Skeleton/ProductSkeleton.jsx";
import Rating from "./Rating.jsx";
import { getDiscountPrice } from "../utils/index.js";
import addWishList from "../utils/addWishList.js";
import removeWishList from "../utils/removeWishList.js";

const ProductCard = ({
                         product = {},
                         loading = false,
                         discount = false,
                         wishItem = false
                     }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();

    // Event handlers
    const handleProductClick = useCallback((product) => {
        navigate(`/product/${product.id}`);
    }, [navigate]);

    const handleFavorite = useCallback((e, product) => {
        e.stopPropagation();

        if (!isFavorite) {
            addWishList(product);
            setIsFavorite(true);
        } else {
            removeWishList(product);
            setIsFavorite(false);
        }
    }, [isFavorite]);

    const handleQuickView = useCallback((e) => {
        e.stopPropagation();
        // Add quick view logic here
    }, []);

    const handleAddToCart = useCallback((e) => {
        e.stopPropagation();
        // Add to cart logic here
    }, []);

    const handleRemoveFromWishlist = useCallback((e) => {
        e.stopPropagation();
        removeWishList(product);
    }, [product]);

    // Render helpers
    const renderDiscountBadge = () => {
        if (!discount || !product.discountPercentage) return null;

        return (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                {Math.round(product.discountPercentage)}% OFF
            </span>
        );
    };

    const renderActionButtons = () => {
        const baseButtonClass = "bg-white hover:scale-95 cursor-pointer w-10 h-10 flex justify-center items-center rounded-full transition-transform duration-200";

        return (
            <div className="text-xl space-y-3">
                {/* Heart/Trash Icon */}
                {!wishItem ? (
                    <button
                        onClick={(e) => handleFavorite(e, product)}
                        className={baseButtonClass}
                        aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
                    >
                        {isFavorite ? (
                            <FaHeart className="text-red-500" />
                        ) : (
                            <FaRegHeart />
                        )}
                    </button>
                ) : (
                    <button
                        onClick={handleRemoveFromWishlist}
                        className={baseButtonClass}
                        aria-label="Remove from wishlist"
                    >
                        <FaRegTrashAlt />
                    </button>
                )}

                {/* Quick View Button */}
                {!wishItem &&(  <button
                    onClick={handleQuickView}
                    className={baseButtonClass}
                    aria-label="Quick view"
                >
                    <GoEye />
                </button>)}
            </div>
        );
    };

    const renderProductImage = () => (
        <div className="relative">
            <div className="p-12 bg-secondaryColor overflow-hidden">
                <img
                    src={product.images}
                    alt={product.title || "Product image"}
                    className="hover:scale-105 transition-all duration-300 w-full h-auto"
                />
            </div>

            {/* Overlay with discount and actions */}
            <div className="flex justify-between items-start absolute w-full p-3 top-0">
                {renderDiscountBadge()}
                {renderActionButtons()}
            </div>

            {/* Add to Cart Button */}
            <Button
                className="bg-black group-hover:opacity-100 opacity-0 text-white absolute bottom-0 left-0 w-full transition-opacity duration-300"
                btnText="Add to Cart"
                onClick={handleAddToCart}
            />
        </div>
    );

    const renderProductInfo = () => {
        const discountedPrice = getDiscountPrice(product.price, product.discountPercentage);

        return (
            <div className="flex flex-col justify-between gap-2 font-poppins bg-white">
                <h3 className="text-lg mt-4 normal-text-medium line-clamp-2">
                    {product.title}
                </h3>

                <div className="flex items-center gap-2">
                    <span className="text-lg normal-text-medium">
                        ${discountedPrice}
                    </span>
                    {discount && product.discountPercentage > 0 && (
                        <span className="text-gray-500 line-through">
                            ${product.price}
                        </span>
                    )}
                </div>

                {product.rating && (
                    <div className="flex items-center mt-2">
                        <Rating value={product.rating} />
                        <span className="text-gray-500 ml-2 text-sm">
                            ({Math.round(product.rating * 10) / 10})
                        </span>
                    </div>
                )}
            </div>
        );
    };

    // Loading state
    if (loading) {
        return <ProductSkeleton />;
    }

    // Main render
    return (
        <div
            onClick={() => handleProductClick(product)}
            className="relative group cursor-pointer hover:scale-95 transition-all duration-300 hover:shadow-lg"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleProductClick(product);
                }
            }}
        >
            {renderProductImage()}
            {renderProductInfo()}
        </div>
    );
};

export default React.memo(ProductCard);
