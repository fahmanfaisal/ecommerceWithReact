import React from 'react'
// import Image from '../images/Googleapp1.png'
import Image from "../images/Googleapp1.png"

function Footer() {
    return (
        <div class="bg-gray-300">
            <div class="grid grid-rows-1 grid-cols-5 grid-gap-2 container mx-auto justify-items-center p-10 ">

                <div>
                    <p class="text-xl pb-4">About</p>
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
                    <p class="text-xl pb-4">Contact</p>
                    <div class="">
                        <a href="#">Contact US</a>
                        
                    </div>
                </div>

                <div>
                    <p class="text-xl pb-4">Pickaboo</p>
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

                <div>
                    <p class="text-xl pb-4">DOWNLOAD OUR APP</p>
                    <div class="">
                    <img src={Image}/>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
