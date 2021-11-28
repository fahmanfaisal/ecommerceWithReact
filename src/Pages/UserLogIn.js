import React from 'react'
import './UserLogIn.css'

export function Userlogin(props) {
    

    return (
        <div>
            <div>
                <div className="container px-10 mx-auto p-4 ">
                    <h2 className="text-xl md:text-2xl font-semibold pl-4">Customer Login</h2>
                </div>
                <div className="grid grid-rows-1 grid-cols-1 justify-items-center py-4">
                    <div>
                    <p className="text-sm font-semibold py-4">Registered Customers</p>
                    <p>If you have an account, sign in with your email address.</p>
                    <p className="py-2">Email *</p>
                    <input type="email" placeholder="Email" className="w-full px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:ring"/>
                    <p className="py-2">Password </p>
                    <input type="tel" placeholder="Password" className="w-full px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:ring"/>
                    <div className="mt-4">
                    <button className="uppercase login-btn w-full">Login</button>
                    </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default Userlogin