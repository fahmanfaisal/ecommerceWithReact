import React from 'react'
import Image0 from "../images/Googleapp1.png"
import Image1 from "../images/Googleapp2.png"

function Footer() {
    return (
        <div class="bg-gray-300">
            <div class="grid grid-rows-1 grid-cols-5 grid-gap-2 container mx-auto justify-items-center p-10 ">

                <div class="text-center">
                    <p class="text-xl pb-4 uppercase">About</p>
                    <div class="flex flex-col">
                        <a href="#">About US</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookie Policy</a>
                        <a href="#">Why Shop with Us</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Help</a>
                    </div>
                </div>

                <div>
                    <p class="text-xl pb-4 uppercase">Contact</p>
                    <div class="">
                        <a href="#">Contact US</a>
                        
                    </div>
                </div>

                <div>
                    <p class="text-xl pb-4 uppercase">Pickaboo</p>
                    <div class="">
                        <div>
                            <p class="flex items-center"><span class="pr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg></span>House 10, Road 12
                            Block F, Niketan, Gulshan 1,
                            Dhaka - 1212, Bangladesh</p>
                        </div>
                        <div>
                            <p class="flex items-center"><span class="pr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg></span>+8809666745745</p>
                        </div>
                    </div>
                </div>

                <div class="col-span-2">
                    <p class="text-xl pb-4 uppercase">Download Our app</p>
                    <div class="flex">
                    <img src={Image0}/>
                    <img src={Image1}/>   
                    </div>
                </div>

            </div>
            <div class="grid grid-rows-1 grid-cols-6 grid-gap-2  mx-auto justify-items-center p-10 ">
                <div class="flex col-span-2 justify-center">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg></a>
                    <a href="#" class="pl-2 pr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg></a>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg></a>
                </div>
                <div>
                    
                </div>
                <div>
                   
                </div>
            </div>
        </div>
    )
}

export default Footer
