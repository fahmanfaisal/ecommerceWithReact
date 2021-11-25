import React from 'react'

export function Header() {
    

    return (
    <div className="top-border py-6 px-1 border-t-2 border-gray-200">
        <div className="grid grid-rows-1 md:grid-cols-12 gap-1 justify-items-center container mx-auto">
            <div className="col-span-2">
                <img className="w-44 h-22" src="https://b2b-pickaboocdn.azureedge.net/media/logo/stores/1/pickaboo-logo@2x.png" />
            </div>    
            <div className="flex items-center col-span-6">
                    <div className="flex-1 pr-8">
                        <input type="text" placeholder="Search entire store here" className="px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:ring w-24 md:w-96"/>
                    </div>
                    <div className="pl-1 flex items-center">
                    <div>
                    
                    </div>
                    <div className="pl-2">
                    <button className="px-2 py-1 bg-gray-200 font-semibold text-gray-800">My Chart</button>
                    </div>
                    </div>  
            </div>
            <div className="flex items-center col-span-2">
                    <div className="">
                    
                    <p className="pl-1 font-semibold text-gray-800">My Account</p>
                    </div>
                    <div className="px-2 ">
                    
                    <p className="pl-1 font-semibold text-gray-800">Sign Out</p>
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Header