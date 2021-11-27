import React from 'react'
import Image0 from "../images/Googleapp1.png"
import Image1 from "../images/Googleapp2.png"
import Image2 from "../images/footer1.png"
import Image3 from "../images/footer2.png"

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-gray-100 ">
            <div className="container mx-auto">
            <div className="grid grid-rows-1 md:grid-cols-5 grid-gap-2 md:container md:mx-auto justify-items-center p-10 ">

                <div className="text-center">
                    <p className="text-xl pb-4 uppercase">About</p>
                    <div className="flex flex-col">
                        <a href="#">About US</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookie Policy</a>
                        <a href="#">Why Shop with Us</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Help</a>
                    </div>
                </div>

                <div>
                    <p className="text-xl pb-4 uppercase">Contact</p>
                    <div className="">
                        <a href="#">Contact US</a>
                        
                    </div>
                </div>

                <div>
                    <p className="text-xl pb-4 uppercase">Pickaboo</p>
                    <div className="">
                        <div>
                            <p className="flex items-center"><span className="pr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg></span>House 10, Road 12
                            Block F, Niketan, Gulshan 1,
                            Dhaka - 1212, Bangladesh</p>
                        </div>
                        <div>
                            <p className="flex items-center"><span className="pr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg></span>+8809666745745</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-2">
                    <p className="text-xl pb-4 uppercase">Download Our app</p>
                    <div className="md:flex flex-col md:flex-row">
                    <img className="cursor-pointer w-42 h-12" src={Image0}/>
                    <img className="cursor-pointer w-42 h-12" src={Image1}/>   
                    </div>
                </div>

            </div>
            <div>
                <hr></hr>
            </div>
            <div className="grid md:grid-cols-3 grid-gap-2 p-10 items-center">
                <div className="flex items-center ">
                    <div style={{color: '#3F80CA'}}>
                    <FaFacebook className="w-10 h-8 mr-2 cursor-pointer"/>
                    </div>
                    <div style={{color: '#DD4C4C'}}>
                    <FaInstagramSquare className="w-10 h-8 mr-2 cursor-pointer"/>
                    </div>
                    <div style={{color: '#292A2B'}}>
                    <FaYoutubeSquare className="w-10 h-8 cursor-pointer"/>
                    </div>
                </div>
                <div>
                    <p>© 2021 pickaboo.com | All Rights Reserved.</p>
                </div>
                <div className="md:flex justify-end">
                    <img className="w-20 h-12 cursor-pointer" src={Image2}/>
                    <img className="w-20 h-12 cursor-pointer" src={Image3}/>   
                    </div>
            </div>
        </div>
        </div>
    )
}

export default Footer
