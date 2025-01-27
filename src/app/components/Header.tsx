import React from 'react'
import image from "../assets/recovery-b.jpg"
import Image from 'next/image'

function Header() {
  return (
    <header className="flex items-center justify-between p-6 bg-black">
      {/* Text Section */}
      <div className="text-white text-lg font-bold">
        <h1 className='text-5xl'>WE'LL GET YOUR MONEY BACK...</h1>
        <p className="text-sm font-light">100% GUARANTEED !!!</p>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center">
        <Image
          src={image} // Replace with the path to your image
          alt="Header Image"
          className="object-cover rounded-lg w-full h-80"
        />
      </div>
    </header>
  )
}

export default Header