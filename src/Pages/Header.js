import React from 'react'
import './Header.css'

import { FaMarsStroke } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

export function Header() {
    return (
    <div>
        <div className="mt-5"><hr></hr></div>
        <div className="container mx-auto">
            <div className="grid grid-rows-1 md:grid-cols-12 gap-1 justify-items-stretch items-center px-4 py-4">
                <div className="flex justify-start col-span-2">
                    <img className="w-42 h-20" src="https://b2b-pickaboocdn.azureedge.net/media/logo/stores/1/pickaboo-logo@2x.png" />
                </div>
                <div className="col-span-5" >
                    <input type="text" placeholder="Search entire store here" className="w-full px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:ring"/>
                </div>    
                <div className="flex items-center col-span-2 place-self-center">
                <div className="flex items-center">
                    <div style={{color: '#3F80CA'}}>
                        <GiShoppingCart className="w-7 h-6 mr-2 cursor-pointer"/>
                    </div>
                    <div className="">
                        <button className="px-2 py-1 bg-gray-200 font-semibold text-gray-800">My Chart</button>
                    </div>
                </div>  
                </div>
                <div className="flex items-center col-span-3 justify-end">
                    <div className="flex items-center">
                    <div className="color">
                        <FaUser className="w-4 h-4"/>
                    </div>
                    <div>
                        <p className="pl-1 font-semibold text-gray-800 color">My Account</p>
                    </div>
                    </div>
                    <div className="px-2 flex items-center">
                    <div className="color">
                        <FaMarsStroke className="w-4 h-4"/>
                    </div>
                    <div>
                        <p className="pl-1 font-semibold text-gray-800 color">Sign Out</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header