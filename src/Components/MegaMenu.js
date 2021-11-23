import React from 'react'
import './MegaMenu.css'

function MegaMenu() {
    return (
    <header class="container mx-auto text-gray-600 body-font">

    <div class="">

    <nav class="flex flex-wrap md:mr-auto md:ml-4 md:py-1 md:pl-4  items-center text-base ">
      <div class="dropdown inline-block relative">
        <div>
          <a class="mr-5 hover:text-gray-900 text-white">SmartPhones</a>
        </div>
        <div class="dropdown-menu absolute hidden px-4text-gray-700 pt-1 rounded bg-white px-2 py-3">
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 ">Samsung</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 ">realme</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 ">Infinix</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 ">OnePlus</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 ">vivo</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 ">OPPO</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 ">iPhone</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 ">Motorola</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 ">Tecno</a>
          <a class="text-black px-1 py-1 hover:text-blue-300 hover:bg-gray-50 ">Nokia</a>
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
