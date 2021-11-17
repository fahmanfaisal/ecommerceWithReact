import React, {useState} from 'react'

const UserDashboard = () => {
    const [active,setActive] = useState(true)
    return (
        <div class="container px-10 mx-auto p-4 ">
        
        <h2 class="text-xl md:text-2xl font-semibold">My Account</h2>
        <div>
            
            <div class="grid grid-cols-1 md:grid-cols-4  gap-4 p-4">
                <div class="border-2 border-gray-300 rounded md:max-h-96">
                    <div class="bg-gray-200 h-5 rounded-tl rounded-tr">
                    </div>
                    <div class="md:flex md:flex-col px-4 py-6">
                        <p onClick={() => setActive(prevState => !prevState)} class={`cursor-pointer ${active==true ? "font-bold" : "font-normal"}`}>Accounts</p>
                        <p>My Orders</p>
                        <p>Address Book</p>
                        <p>Account Information</p>
                        <p>My product Reviews</p>
                        <p>My support Tickets</p>
                        <p>PickaBoo Ckub</p>
                        <p>Bkash Agreements</p>
                    </div>
                </div>



                <div className="changeable md:col-span-3">

                {
                    active == true && <div class=" ">
                    <div class="px-2 pb-4">
                        <h2 class="text-sm md:text-md font-semibold">Account Information</h2>
                    </div>
                    <div class="border-2 border-gray-300 rounded md:flex md:flex-col px-3 py-3">
                        <div>
                            <p>Contact Information</p>
                            <p>Fahman Faisal</p>
                            <p>Fahmanchy@gmail.com</p>
                        </div>
                        <div class="flex py-2">
                            <div><p>Edit</p></div>
                            <div class="px-2"><span class="">|</span></div>
                            <div><p>Chnage Password</p></div>         
                        </div>
                    </div>

                    <br/>
                    <div class="px-2 pb-4 flex justify-between items-center">
                        <div>
                            <h2 class="text-sm md:text-md font-semibold text-left">Address Book</h2>
                        </div>
                        <div>
                            <p class="px-3 py-2 bg-blue-700 text-xs font-semibold text-white rounded text-center">Manage Addresses</p>
                        </div>
                    </div>
                    <div class="border-2 border-gray-300 rounded md:flex md:flex-col px-3 py-3">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                            <div>
                                <p>Default Billing Address</p>
                                <p>Fahman Faisal</p>
                                <p>H:60, Road:20, Sector:11, VISER X LIMITED, Uttara, Dhaka</p>
                                <p>bangladesh</p>
                                <p class="py-1">
                                    Edit Address
                                </p>
                            </div>
                            <div class="py-2 md:py-0">
                                <p>Default Billing Address</p>
                                <p>Fahman Faisal</p>
                                <p>H:60, Road:20, Sector:11, VISER X LIMITED, Uttara, Dhaka</p>
                                <p>bangladesh</p>
                                <p class="py-1">
                                    Edit Address
                                </p>
                            </div>
                        </div>
                    </div>

                    <br/>
                    <div class="px-2 pb-4 flex justify-between items-center">
                        <div>
                            <h2 class="text-sm md:text-md font-semibold text-left">Address Book</h2>
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
                }
                </div>
            </div>
        </div>
    </div>
    )
}

export default UserDashboard
