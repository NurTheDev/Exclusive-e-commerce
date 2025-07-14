import React from "react";

const PaymentOptions = () => {
    return (
        <div className="max-w-xl mx-auto px-2 sm:px-4 md:px-8">
            <h3 className="small-heading-semi-bold text-secondary2 mb-4">Payment Options</h3>

            <div className="mb-6">
                <div className="border rounded p-4 mb-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                        <div className="font-semibold">Visa **** 1234</div>
                        <div className="text-sm text-gray-700">Exp: 12/28</div>
                        <div className="text-sm text-gray-500">Name: John Doe</div>
                    </div>
                    <div className="flex gap-2 mt-2 sm:mt-0">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                    </div>
                </div>
                <div className="border rounded p-4 mb-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                        <div className="font-semibold">MasterCard **** 5678</div>
                        <div className="text-sm text-gray-700">Exp: 07/27</div>
                        <div className="text-sm text-gray-500">Name: John Doe</div>
                    </div>
                    <div className="flex gap-2 mt-2 sm:mt-0">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                    </div>
                </div>
            </div>

            <form className="bg-gray-50 p-4 rounded shadow">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                        <input
                            type="text"
                            placeholder="Card Number"
                            className="input input-bordered w-full"
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name On Card</label>
                        <input
                            type="text"
                            placeholder="Cardholder Name"
                            className="input input-bordered w-full"
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Expiry</label>
                        <input
                            type="text"
                            placeholder="MM/YY"
                            className="input input-bordered w-full"
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                        <input
                            type="text"
                            placeholder="CVV"
                            className="input input-bordered w-full"
                            disabled
                        />
                    </div>
                </div>
                <div className="flex justify-end gap-3 mt-4">
                    <button className="bg-secondary2 text-white px-4 py-2 rounded" disabled>
                        Add Card
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentOptions;
