import React from 'react'

function AccountInformation() {
    return (
        <div>
                <div className="px-2 pb-4">
                        <h2 className="text-sm md:text-md font-semibold">Account Information</h2>
                    </div>
                    <div className="border-2 border-gray-300 rounded md:flex md:flex-col px-3 py-3">
                        <div>
                            <p>Contact Information</p>
                            <p>Fahman Faisal</p>
                            <p>Fahmanchy@gmail.com</p>
                        </div>
                        <div className="flex py-2">
                            <div><p>Edit</p></div>
                            <div className="px-2"><span className="">|</span></div>
                            <div><p>Chnage Password</p></div>         
                        </div>
                </div>
        </div>
    )
}

export default AccountInformation
