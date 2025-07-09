import React from 'react';
import Button from '../../comonComponent/Button.jsx';
import { Link } from 'react-router';

const LoginRequired = ({
                           title = "Login Required",
                           message = "You need to login first to access this feature",
                           showLoginButton = true,
                           className = "",
                           onLoginClick
                       }) => {
    return (
        <div className={`container mx-auto p-6 ${className}`}>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                {/* Login Icon */}
                <div className="flex justify-center mb-6">
                    <div className="bg-blue-100 p-4 rounded-full">
                        <svg
                            className="h-10 w-10 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-blue-800 mb-4 small-heading-semi-bold">
                    {title}
                </h3>

                {/* Message */}
                <p className="text-blue-700 mb-6 normal-text">
                    {message}
                </p>

                {/* Login Button */}
                {showLoginButton && (
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/login">
                            <Button
                                btnText="Login Now"
                                className="bg-secondary2 text-white px-8 py-3 hover:bg-opacity-90 transition-colors duration-200"
                                onClick={onLoginClick}
                            />
                        </Link>
                        <Link to="/signup" className="text-blue-600 hover:text-blue-800 transition-colors duration-200 normal-text">
                            Don't have an account? Sign up
                        </Link>
                    </div>
                )}

                {/* Additional Info */}
                <div className="mt-6 pt-4 border-t border-blue-200">
                    <p className="text-gray-600 text-sm">
                        Create an account to enjoy personalized shopping experience,
                        track your orders, and access exclusive deals.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default React.memo(LoginRequired);
