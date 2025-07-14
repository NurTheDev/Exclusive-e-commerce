import React from 'react';
import { X, CheckCircle, Package, Clock, CreditCard } from 'lucide-react';

const OrderConfirmationModal = ({
                                    isOpen,
                                    onClose,
                                    orderData,
                                    orderNumber
                                }) => {
    if (!isOpen) return null;

    const {
        billing = {},
        total = 0,
        subTotal = 0,
        product = [],
        coupon = "",
        isCouponApplied = false
    } = orderData || {};

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={handleBackdropClick}
        >
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border border-gray-200">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="bg-green-50 p-2 rounded-full">
                            <CheckCircle className="text-green-500 w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900">Order Confirmed!</h2>
                            <p className="text-sm text-gray-500">Thank you for your purchase</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Order Number */}
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-sm text-gray-500">Order Number</p>
                            <p className="text-lg font-semibold text-gray-900">#{orderNumber}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm text-gray-500">Order Date</p>
                            <p className="text-sm text-gray-700">
                                {new Date().toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Order Items */}
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Package className="w-5 h-5 text-blue-500" />
                        Order Items
                    </h3>
                    <div className="space-y-3">
                        {product.map((item, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <img
                                    src={item.images?.[0]}
                                    alt={item.title}
                                    className="w-12 h-12 object-cover rounded-lg"
                                />
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">{item.title}</p>
                                    <p className="text-xs text-gray-500">Qty: {item.quantity || 1}</p>
                                </div>
                                <p className="text-sm font-semibold text-gray-900">
                                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary */}
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-green-500" />
                        Order Summary
                    </h3>
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Subtotal</span>
                            <span className="text-gray-900">${subTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-500">Shipping</span>
                            <span className="text-gray-900">$100.00</span>
                        </div>
                        {isCouponApplied && coupon && (
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Discount ({coupon})</span>
                                <span className="text-green-600">-$100.00</span>
                            </div>
                        )}
                        <div className="flex justify-between text-base font-semibold pt-3 border-t border-gray-200">
                            <span className="text-gray-900">Total</span>
                            <span className="text-gray-900">${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>

                {/* Shipping Address */}
                <div className="p-6 border-b border-gray-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Shipping Address</h3>
                    <div className="text-sm text-gray-600 space-y-1 bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium text-gray-900">
                            {billing.firstName} {billing.lastName}
                        </p>
                        <p>{billing.address}</p>
                        <p>
                            {billing.city && `${billing.city}, `}
                            {billing.state} {billing.zipCode}
                        </p>
                        <p>{billing.phone}</p>
                        <p>{billing.email}</p>
                    </div>
                </div>

                {/* Estimated Delivery */}
                <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-5 h-5 text-orange-500" />
                        <h3 className="font-semibold text-gray-900">Estimated Delivery</h3>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-700 font-medium">
                            Your order will be delivered within 3-5 business days
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            You will receive tracking information via email
                        </p>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 space-y-3">
                    <button
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        onClick={() => window.print()}
                    >
                        Print Order Details
                    </button>
                    <button
                        className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors font-medium border border-gray-200"
                        onClick={() => window.location.href = '/'}
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(OrderConfirmationModal);
