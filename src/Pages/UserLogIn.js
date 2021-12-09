import React from 'react'
import MegaMenu from '../Components/MegaMenu'
import SignUp from '../Components/SignUp'
import Button from './Button'
import './UserLogIn.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

export function Userlogin({ title, setPassword, setEmail, handleAction }) {
    
    
    return (
        
        <div className="mb-20">
            <div>
                <MegaMenu/>

                <div className="container px-10 mx-auto p-3">
                    <h2 className="text-xl md:text-2xl font-semibold pl-4">{title} Form</h2>
                </div>
                <div className="grid grid-rows-1 grid-cols-6  justify-items-stretch">
                    <div className="col-span-2"></div>
                    <div className="col-span-2">
                    <p className="text-sm font-semibold py-4">{title} Customers</p>
                    
                    <p className="py-2">Email *</p>
                    <input type="email" required placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="w-full px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:ring"/>
                    <p className="py-2">Password </p>
                    <input type="tel" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="w-full px-2 py-1 placeholder-gray-400 text-gray-600 relative bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:ring"/>
                    <div>
                        <Button title={title} handleAction={handleAction}/>
                    </div>
                    <div>
                        <ToastContainer/>
                    </div>
                    <div className="flex justify-evenly py-4">
                    <p>If you haven't an account,</p>
                    <p className="uppercase ">{<SignUp/>}</p>
                    <p>with your email address.</p>
                    </div>
                    </div>
                    <div className="col-span-2"></div>
                </div>    
            </div>
        </div>
    )
}

export default Userlogin