import React from "react";
import imagey from "../assets/category1.jpg";
import imagey2 from "../assets/category2.png";
import Image from "next/image";

function Category() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-black shadow-lg p-6 gap-2">
      <div className="w-96 rounded-2xl overflow-hidden shadow-lg border border-gray-400 bg-gray-700">
        {/* Image Section */}
        <div className="flex items-center justify-center w-full h-48">
          <Image src={imagey2} alt="altText" className="object-cover" />
        </div>

        {/* Text Section */}
        <div className="p-4 flex items-center justify-center">
          <p className="text-white text-4xl">Tracking</p>
        </div>
      </div>

      <div className="w-96 rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-700">
        {/* Image Section */}
        <div className="flex items-center justify-center w-full h-48">
          <Image src={imagey} alt="altText" className="object-cover" />
        </div>

        {/* Text Section */}
        <div className="p-4 flex items-center justify-center">
          <p className="text-white text-4xl">Flagging & Reversal</p>
        </div>
      </div>
    </div>
  );
}

export default Category;
