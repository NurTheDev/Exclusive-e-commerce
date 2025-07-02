import React, { useState } from 'react';
import {useNavigate} from "react-router";

const NotFound = () => {
    const navigate = useNavigate();
    const [nf_searchQuery, setNf_searchQuery] = useState('');

    const handleNf_goHome = () => {
        navigate('/');
    };

    const handleNf_goBack = () => {
        navigate(-1);
    };

    const handleNf_search = (e) => {
        e.preventDefault();
        if (nf_searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(nf_searchQuery)}`);
        }
    };

    const nf_popularCategories = [
        { name: 'Electronics', icon: '📱', path: '/category/electronics' },
        { name: 'Fashion', icon: '👕', path: '/category/fashion' },
        { name: 'Home ', icon: '🏠', path: '/' },
        { name: 'Sports', icon: '⚽', path: '/category/sports' }
    ];

    return (
        <div className="nf-not-found-container">
            {/* Animated Background Elements */}
            <div className="nf-floating-shapes">
                <div className="nf-shape nf-shape-1"></div>
                <div className="nf-shape nf-shape-2"></div>
                <div className="nf-shape nf-shape-3"></div>
                <div className="nf-shape nf-shape-4"></div>
                <div className="nf-shape nf-shape-5"></div>
            </div>

            <div className="nf-not-found-content">
                {/* Animated 404 with Shopping Theme */}
                <div className="nf-error-section">
                    <div className="nf-error-code">
                        <span className="nf-digit">4</span>
                        <div className="nf-shopping-cart">
                            <div className="nf-cart-body">
                                <div className="nf-cart-handle"></div>
                                <div className="nf-cart-wheels">
                                    <div className="nf-wheel nf-wheel-1"></div>
                                    <div className="nf-wheel nf-wheel-2"></div>
                                </div>
                                <div className="nf-cart-items">
                                    <div className="nf-item nf-item-1"></div>
                                    <div className="nf-item nf-item-2"></div>
                                </div>
                            </div>
                        </div>
                        <span className="nf-digit">4</span>
                    </div>

                    <div className="nf-empty-box">
                        <div className="nf-box">
                            <div className="nf-box-lid"></div>
                            <div className="nf-box-body">
                                <div className="nf-sad-face">😔</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Message */}
                <div className="nf-message-section">
                    <h1 className="nf-title">Oops! Product Not Found</h1>
                    <p className="nf-subtitle">
                        It looks like the page you're looking for has been moved, deleted, or doesn't exist.
                        But don't worry! Our exclusive collection has plenty of amazing products waiting for you.
                    </p>
                </div>

                {/* Search Section */}
                <div className="nf-search-section">
                    <h3>Search for what you need:</h3>
                    <form onSubmit={handleNf_search} className="nf-search-form">
                        <div className="nf-search-input-container">
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={nf_searchQuery}
                                onChange={(e) => setNf_searchQuery(e.target.value)}
                                className="nf-search-input"
                            />
                            <button type="submit" className="nf-search-btn">
                                <span>🔍</span>
                            </button>
                        </div>
                    </form>
                </div>

                {/* Popular Categories */}
                <div className="nf-categories-section">
                    <h3>Or explore popular categories:</h3>
                    <div className="nf-categories-grid">
                        {nf_popularCategories.map((category, index) => (
                            <button
                                key={category.name}
                                onClick={() => navigate(category.path)}
                                className="nf-category-card"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <span className="nf-category-icon">{category.icon}</span>
                                <span className="nf-category-name">{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="nf-action-buttons">
                    <button onClick={handleNf_goHome} className="nf-btn nf-btn-primary">
                        <span className="nf-btn-icon">🏠</span>
                        <span className="nf-btn-text">Go to Homepage</span>
                        <div className="nf-btn-ripple"></div>
                    </button>
                    <button onClick={handleNf_goBack} className="nf-btn nf-btn-secondary">
                        <span className="nf-btn-icon">←</span>
                        <span className="nf-btn-text">Go Back</span>
                        <div className="nf-btn-ripple"></div>
                    </button>
                </div>

                {/* Help Section */}
                <div className="nf-help-section">
                    <p>Still need help? <a href="/contact">Contact our support team</a></p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
