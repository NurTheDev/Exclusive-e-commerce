import React from 'react';
import Button from './Button.jsx';

const ErrorComponent = ({
    error,
    onRetry,
    title = "Failed to fetch data",
    showRetry = true,
    className = ""
}) => {
    return (
        <div className={`container mx-auto p-6 ${className}`}>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                {/* Error Icon */}
                <div className="flex justify-center mb-4">
                    <div className="bg-red-100 p-3 rounded-full">
                        <svg
                            className="h-8 w-8 text-red-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Error Title */}
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                    {title}
                </h3>

                {/* Error Message */}
                {error && (
                    <p className="text-red-700 mb-4 text-sm">
                        {typeof error === 'string' ? error : error.message || 'An unexpected error occurred'}
                    </p>
                )}

                {/* Retry Button */}
                {showRetry && onRetry && (
                    <div className="mt-4">
                        <Button
                            btnText="Try Again"
                            className="bg-red-600 hover:bg-red-700 text-white px-6"
                            onClick={onRetry}
                        />
                    </div>
                )}

                {/* Additional Help Text */}
                <p className="text-gray-600 text-xs mt-3">
                    If the problem persists, please check your internet connection or try again later.
                </p>
            </div>
        </div>
    );
};

export default ErrorComponent;
