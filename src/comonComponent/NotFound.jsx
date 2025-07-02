import React, { useState } from 'react';
import {useNavigate} from "react-router";

const NotFound = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleGoHome = () => {
        navigate('/');
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    const popularCategories = [
        { name: 'Electronics', icon: '📱', path: '/category/electronics' },
        { name: 'Fashion', icon: '👕', path: '/category/fashion' },
        { name: 'Home & Garden', icon: '🏠', path: '/category/home' },
        { name: 'Sports', icon: '⚽', path: '/category/sports' }
    ];

    return (
        <div className="not-found-container">
            {/* Animated Background Elements */}
            <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
                <div className="shape shape-5"></div>
            </div>

            <div className="not-found-content">
                {/* Animated 404 with Shopping Theme */}
                <div className="error-section">
                    <div className="error-code">
                        <span className="digit">4</span>
                        <div className="shopping-cart">
                            <div className="cart-body">
                                <div className="cart-handle"></div>
                                <div className="cart-wheels">
                                    <div className="wheel wheel-1"></div>
                                    <div className="wheel wheel-2"></div>
                                </div>
                                <div className="cart-items">
                                    <div className="item item-1"></div>
                                    <div className="item item-2"></div>
                                </div>
                            </div>
                        </div>
                        <span className="digit">4</span>
                    </div>

                    <div className="empty-box">
                        <div className="box">
                            <div className="box-lid"></div>
                            <div className="box-body">
                                <div className="sad-face">😔</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Message */}
                <div className="message-section">
                    <h1 className="title">Oops! Product Not Found</h1>
                    <p className="subtitle">
                        It looks like the page you're looking for has been moved, deleted, or doesn't exist.
                        But don't worry! Our exclusive collection has plenty of amazing products waiting for you.
                    </p>
                </div>

                {/* Search Section */}
                <div className="search-section">
                    <h3>Search for what you need:</h3>
                    <form onSubmit={handleSearch} className="search-form">
                        <div className="search-input-container">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                            <button type="submit" className="search-btn">
                                <span>🔍</span>
                            </button>
                        </div>
                    </form>
                </div>

                {/* Popular Categories */}
                <div className="categories-section">
                    <h3>Or explore popular categories:</h3>
                    <div className="categories-grid">
                        {popularCategories.map((category, index) => (
                            <button
                                key={category.name}
                                onClick={() => navigate(category.path)}
                                className="category-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className="category-icon">{category.icon}</span>
                                <span className="category-name">{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="action-buttons">
                    <button onClick={handleGoHome} className="btn btn-primary">
                        <span className="btn-icon">🏠</span>
                        <span className="btn-text">Go to Homepage</span>
                        <div className="btn-ripple"></div>
                    </button>
                    <button onClick={handleGoBack} className="btn btn-secondary">
                        <span className="btn-icon">←</span>
                        <span className="btn-text">Go Back</span>
                        <div className="btn-ripple"></div>
                    </button>
                </div>

                {/* Help Section */}
                <div className="help-section">
                    <p>Still need help? <a href="/contact">Contact our support team</a></p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
