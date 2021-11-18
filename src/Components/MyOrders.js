import React from 'react'


function MyOrders() {
    return (
        <div>
             <div class="px-2 pb-4 flex justify-between items-center">
                        <div>
                            <h2 class="text-sm md:text-md font-semibold text-left">My Orders</h2>
                        </div>
                        <div>
                            <p class="px-3 py-2 bg-blue-700 text-xs font-semibold text-white rounded text-center">View All</p>
                        </div>
                    </div>
                    <div class="border-2 border-gray-300 rounded md:flex md:flex-col px-3 py-3">
                        <div class="grid grid-rows-1 md:grid-rows-1 gap-4 md:gap-8 px-4">
                            <div>
                                <p>Xiaomi Basic In-ear HeadPhone</p>
                                <div class="flex py-1">
                                    <div><p>Ratings:</p></div>
                                    <div class="px-2"><p>*****</p></div>       
                                </div>                              
                            </div>
                            <div>
                                <p>Haylou LS02Smart Watch</p>
                                <div class="flex py-1">
                                    <div><p>Ratings:</p></div>
                                    <div class="px-2"><p>*****</p></div>       
                                </div>                              
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default MyOrders
