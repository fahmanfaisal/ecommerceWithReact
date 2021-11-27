import React from 'react'


function MyOrders() {
    return (
        <div>
             <div className="px-2 pb-4 flex justify-between items-center">
                        <div>
                            <h2 className="text-sm md:text-md font-semibold text-left">My Orders</h2>
                        </div>
                        <div>
                            <p className="px-3 py-2 bg-blue-500 text-xs font-semibold text-white rounded text-center">View All</p>
                        </div>
                    </div>
                    <div className="border-2 border-gray-300 rounded md:flex md:flex-col px-3 py-3">
                        <div className="grid grid-rows-1 md:grid-rows-1 gap-4 md:gap-8 px-4">
                            <div>
                                <p>Xiaomi Basic In-ear HeadPhone</p>
                                <div className="flex py-1">
                                    <div><p>Ratings:</p></div>
                                    <div className="px-2"><p>*****</p></div>       
                                </div>                              
                            </div>
                            <div>
                                <p>Haylou LS02Smart Watch</p>
                                <div className="flex py-1">
                                    <div><p>Ratings:</p></div>
                                    <div className="px-2"><p>*****</p></div>       
                                </div>                              
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default MyOrders
