import React from 'react'

function Navbar() {

    return (
        <nav className="bg-[#121214] px-10 py-2">
          <div className="container mx-auto flex justify-between items-center">
            {/* First Div: Logo and Text */}
            <div className="flex items-center space-x-2">
              {/* <Image src="" alt="Logo" className="h-8 w-8" /> */}
              <span className="text-2xl text-white font-bold">Recovery-Blast</span>
            </div>
    
            {/* Second Div: Links */}
            <div className="hidden md:flex space-x-4">
              <a href="/" className="text-white hover:text-white">
                Home
              </a>
              <a href="#testiomonials" className="text-white hover:text-white">
                Testimonials
              </a>
            
            </div>
    
            {/* Third Div: Button */}
            <div>
              <h1 className='text-white'>EN</h1>
            </div>
          </div>
    
          {/* Mobile Links */}
          <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-2 items-center gap-4">
            <a href="#" className="text-gray-700 hover:text-gray-900">Link 1</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Link 2</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Link 3</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Link 4</a>
          </div>
        </div>
        </nav>
      );
}

export default Navbar