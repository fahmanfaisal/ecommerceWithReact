import React from 'react'
import './MegaMenu.css'

function MegaMenu() {
    return (
    <header class="container mx-auto text-gray-600 body-font">

    <div class="">

    <nav class="flex flex-wrap md:mr-auto md:ml-4 md:py-1 md:pl-4 items-center text-base">
      <div class="dropdown inline-block relative cursor-pointer">
        <div class="p-2">
          <a class="mr-5 hover:text-gray-900 text-white cursor-pointer">SmartPhones</a>
        </div>
        <div class="dropdown-menu absolute hidden px-4text-gray-700 pt-1 rounded bg-white px-2 py-3 cursor-pointer border-2 border-light-blue-500 border-opacity-25">
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

      <div>
        <a class="mr-5 hover:text-gray-900 text-white">ElectronicsandAppliances</a>
      </div>

      <div>
        <a class="mr-5 hover:text-gray-900 text-white">Mobile Accessories</a>
      </div>

      <div>
        <a class="mr-5 hover:text-gray-900 text-white">ComputerandAccessories</a>
      </div>
    </nav>

    </div>

    </header>
    )
}

export default MegaMenu
