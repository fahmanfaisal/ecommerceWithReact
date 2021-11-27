import React from 'react'

function AddressBook() {
    return (
        <div>
            <div className="px-2 pb-4 flex justify-between items-center">
                        <div>
                            <h2 className="text-sm md:text-md font-semibold text-left">Address Book</h2>
                        </div>
                        <div>
                            <p className="px-3 py-2 bg-blue-500 text-xs font-semibold text-white rounded text-center">Manage Addresses</p>
                        </div>
                    </div>
                    <div className="border-2 border-gray-300 rounded md:flex md:flex-col px-3 py-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <div>
                                <p>Default Billing Address</p>
                                <p>Fahman Faisal</p>
                                <p>H:60, Road:20, Sector:11, VISER X LIMITED, Uttara, Dhaka</p>
                                <p>bangladesh</p>
                                <p className="py-1">
                                    Edit Address
                                </p>
                            </div>
                            <div className="py-2 md:py-0">
                                <p>Default Billing Address</p>
                                <p>Fahman Faisal</p>
                                <p>H:60, Road:20, Sector:11, VISER X LIMITED, Uttara, Dhaka</p>
                                <p>bangladesh</p>
                                <p className="py-1">
                                    Edit Address
                                </p>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default AddressBook
