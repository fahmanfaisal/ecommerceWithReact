import React from 'react'
import './MegaMenu.css'

function MegaMenu() {
    return (
    <header class="container mx-auto text-gray-600 body-font">

    <div class="">

    <nav class="flex flex-wrap md:mr-auto md:ml-4 md:py-1 md:pl-4 items-center text-base">
      <div class="dropdown inline-block relative cursor-pointer">
        <div class="p-2">
          <a class="mr-5 hover:text-gray-900 text-white cursor-pointer">SMART PHONES</a>
        </div>
        <div class="dropdown-wrapper absolute hidden px-4text-gray-700 pt-1 rounded bg-white px-2 py-3 cursor-pointer border-2 border-light-blue-500 border-opacity-25">
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Samsung</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">realme</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Infinix</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">OnePlus</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">vivo</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">OPPO</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">iPhone</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Motorola</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Tecno</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Nokia</a>
        </div>
      </div>

      <div class="dropdown inline-block relative cursor-pointer">
        <div class="p-2">
          <a class="mr-5 hover:text-gray-900 text-white cursor-pointer uppercase">Electronics & Appliances</a>
        </div>
        <div class="dropdown-menu absolute hidden px-4text-gray-700 pt-1 rounded bg-white px-2 py-3 cursor-pointer border-2 border-light-blue-500 border-opacity-25">
          <div class="grid grid-cols-4 gap-8">
            <div class="flex flex-col col-span-2">
              <a class="text-black px-1 py-1 text-md font-semibold cursor-pointer uppercase">Home Appliances</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Televisions</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Air Conditioner</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Refrigerator & Fridge</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Geyser/Room Heater</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Air Purifier</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Iron</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Washing Machine</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Home Theater & Sound System</a>
            </div>
            <div class="flex flex-col col-span-2">
              <a class="text-black px-1 py-1 text-md font-semibold cursor-pointer ">Kitchen Appliances</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Grinder & Blender</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Water Filters & Purifiers</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Microwave Oven</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Kettle</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Rice Cooker</a>
            </div>
          </div>

        </div>
      </div>

      <div class="dropdown inline-block relative cursor-pointer">
        <div class="p-2">
          <a class="mr-5 hover:text-gray-900 text-white cursor-pointer uppercase">Mobile Accessories</a>
        </div>
        <div class="dropdown-menu absolute hidden px-4text-gray-700 pt-1 rounded bg-white px-2 py-3 cursor-pointer border-2 border-light-blue-500 border-opacity-25">
          <div class="grid grid-cols-4 gap-8">
            <div class="flex flex-col col-span-2">
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Smart Watch</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">True Wireless Earbud</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Bluetooth Headphone</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Wired Headphone</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Portable Speaker</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Apple Accessories</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Power Bank</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">JBL Accessories</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Smart Band</a>
            </div>
            <div class="flex flex-col col-span-2">
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Charger</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Adapter</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Data Cables</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Memory Card</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Action Cameras</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Back Cover</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Screen Protector</a>
              <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Selfie Sticks</a>
            </div>
          </div>

        </div>
      </div>

      <div class="dropdown inline-block relative cursor-pointer">
        <div class="p-2">
          <a class="mr-5 hover:text-gray-900 text-white cursor-pointer">LIFE STYLE</a>
        </div>
        <div class="dropdown-wrapper absolute hidden px-4text-gray-700 pt-1 rounded bg-white px-2 py-3 cursor-pointer border-2 border-light-blue-500 border-opacity-25">
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Samsung</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">realme</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Infinix</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">OnePlus</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">vivo</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">OPPO</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">iPhone</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Motorola</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Tecno</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 cursor-pointer ">Nokia</a>
        </div>
      </div>
    </nav>

    </div>

    </header>
    )
}

export default MegaMenu
