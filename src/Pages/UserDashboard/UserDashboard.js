import React, {useState} from 'react'
import AccountInformation from '../../Components/AccountInformation'
import AddressBook from '../../Components/AddressBook'
import MegaMenu from '../../Components/MegaMenu'
import MyOrders from '../../Components/MyOrders'


const UserDashboard = () => {
    const [active,setActive] = useState(0)
    return (
        <div>

        <div class="p-2 bg-blue-500 ">
            <MegaMenu/>
        </div>    
       

        <div class="container px-10 mx-auto p-4 ">
        <h2 class="text-xl md:text-2xl font-semibold">My Account</h2>
        <div>
            
            <div class="grid grid-cols-1 md:grid-cols-4  gap-4 p-4">
                <div class="border-2 border-gray-300 rounded md:max-h-96">
                    <div class="bg-gray-200 h-5 rounded-tl rounded-tr">
                    </div>
                    <div class="md:flex md:flex-col px-4 py-6">
                        <p onClick={() => setActive(0)} class={`cursor-pointer ${active==0 ? "font-bold" : "font-normal"}`}>Accounts</p>
                        <p onClick={() => setActive(1)} class={`cursor-pointer ${active==1 ? "font-bold" : "font-normal"}`}>My Orders</p>
                        <p onClick={() => setActive(2)} class={`cursor-pointer ${active==2 ? "font-bold" : "font-normal"}`}>Address Book</p>
                        <p>Account Information</p>
                        <p>My product Reviews</p>
                        <p>My support Tickets</p>
                        <p>PickaBoo Ckub</p>
                        <p>Bkash Agreements</p>
                    </div>
                </div>



                <div className="changeable md:col-span-3">

                {
                    active == 0 && <AccountInformation/>
                }

                {
                    active == 1 && <MyOrders/>
                }

                {
                    active == 2 && <AddressBook/>
                }

                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default UserDashboard
