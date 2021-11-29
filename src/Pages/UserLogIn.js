import React from 'react'
import MegaMenu from '../Components/MegaMenu'
import './UserLogIn.css'

export function Userlogin(props) {
    

    return (
        <div className="mb-20">
            <div>
                
                <MegaMenu/>

                <div className="container px-10 mx-auto p-3">
                    <h2 className="text-xl md:text-2xl font-semibold pl-4">Customer Login</h2>
                </div>
                <div className="grid grid-rows-1 grid-cols-6  justify-items-stretch">
                    <div className="col-span-2"></div>
                    <div className="col-span-2">
                    <p className="text-sm font-semibold py-4">Registered Customers</p>
                    <p>If you have an account, sign in with your email address.</p>
                    <p className="py-2">Email *</p>
                    <input type="email" placeholder="Email" className="w-full px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:ring"/>
                    <p className="py-2">Password </p>
                    <input type="tel" placeholder="Password" className="w-full px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:ring"/>
                    <div className="mt-4">
                    <button className="uppercase login-btn w-full transition ease-in duration-300">Login</button>
                    </div>
                    </div>
                    <div className="col-span-2"></div>
                </div>    
            </div>
        </div>
    )
}

export default Userlogin