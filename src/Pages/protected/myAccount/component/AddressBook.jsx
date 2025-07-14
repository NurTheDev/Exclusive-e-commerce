import React from "react";

const AddressBook = () => {
    return (
        <div className="max-w-xl mx-auto px-2 sm:px-4 md:px-8">
            <h3 className="small-heading-semi-bold text-secondary2 mb-4">Address Book</h3>

            <div className="mb-6">
                <div className="border rounded p-4 mb-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                        <div className="font-semibold">Home</div>
                        <div className="text-sm text-gray-700">123 Main St, Your City, Country</div>
                        <div className="text-sm text-gray-500">+1 234 567 8901</div>
                    </div>
                    <div className="flex gap-2 mt-2 sm:mt-0">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                    </div>
                </div>
                <div className="border rounded p-4 mb-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                        <div className="font-semibold">Office</div>
                        <div className="text-sm text-gray-700">456 Business Rd, Office City, Country</div>
                        <div className="text-sm text-gray-500">+1 987 654 3210</div>
                    </div>
                    <div className="flex gap-2 mt-2 sm:mt-0">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                    </div>
                </div>
            </div>

            <form className="bg-gray-50 p-4 rounded shadow">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Label</label>
                        <input
                            type="text"
                            placeholder="e.g. Home, Office"
                            className="input input-bordered w-full"
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input
                            type="text"
                            placeholder="Address"
                            className="input input-bordered w-full"
                            disabled
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                            type="text"
                            placeholder="Phone"
                            className="input input-bordered w-full"
                            disabled
                        />
                    </div>
                </div>
                <div className="flex justify-end gap-3 mt-4">
                    <button className="bg-secondary2 text-white px-4 py-2 rounded" disabled>
                        Add Address
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddressBook;
