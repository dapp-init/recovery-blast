import React from "react";
import image from "../assets/profile3.jpg";
import image2 from "../assets/profile4.jpg";
import image3 from "../assets/profile5.jpg";
import image4 from "../assets/profile6.jpg";
import image5 from "../assets/profile7.jpg";
import image6 from "../assets/profile8.jpg";
import image7 from "../assets/profile9.jpg";
import image8 from "../assets/profile10.jpg";
import image9 from "../assets/profile11.jpg";
import image10 from "../assets/profile12.jpg";
import Image from "next/image";

function Testimonials() {
  return (
    <div id="testiomonials" className="pt-5 bg-black">
      <h1 className="text-3xl text-white flex items-center justify-center">
        Testimonials
      </h1>

      <div className="flex flex-row overflow-x-auto whitespace-nowrap scroll-smooth gap-10 mb-4">
        <div className=" flex flex-col items-center justify-center w-96 h-auto bg-gray-400 shadow-lg space-y-4 p-5 rounded-md">
          {/* Rounded Image */}
          <div className="flex items-center justify-center w-80 h-24 mt-3">
            <Image
              src={image}
              alt="Profile Picture"
              className="object-cover rounded-sm"
            />
          </div>

          {/* Date */}
          <p className="text-blue-950 text-sm">
            Wendy Flannagan...Sep 13, 2024
          </p>

          {/* Testimony */}
          <p className="text-center text-wrap text-white text-base">
            Amazing service! They were professional, efficient, and helped
            recover what I thought was lost forever. Highly recommend them!
          </p>
        </div>

        {/* jjjj */}

        <div className=" flex flex-col items-center justify-center w-96 h-auto bg-gray-400 shadow-lg space-y-4 p-5 rounded-md">
          {/* Rounded Image */}
          <div className="flex items-center justify-center w-80 h-24 mt-3">
            <Image
              src={image2}
              alt="Profile Picture"
              className="object-cover rounded-sm"
            />
          </div>

          {/* Date */}
          <p className="text-blue-950 text-sm">Dibling Blake...Nov 4, 2024</p>

          {/* Testimony */}
          <p className="text-center text-wrap text-white text-base">
            I was skeptical at first, but they delivered exactly what they
            promised. Thank you for your incredible work!
          </p>
        </div>

        {/* jjjj */}

        <div className=" flex flex-col items-center justify-center w-96 h-auto bg-gray-400 shadow-lg space-y-4 p-5 rounded-md">
          {/* Rounded Image */}
          <div className="flex items-center justify-center w-80 h-24 mt-3">
            <Image
              src={image3}
              alt="Profile Picture"
              className="object-cover rounded-sm"
            />
          </div>

          {/* Date */}
          <p className="text-white text-sm">Tom Hardy...Nov 30, 2024</p>

          {/* Testimony */}
          <p className="text-center text-wrap text-white text-base">
            They made the impossible possible. I can't thank them enough for
            their hard work and dedication!
          </p>
        </div>

        {/* jjjj */}

        <div className=" flex flex-col items-center justify-center w-96 h-auto bg-gray-400 shadow-lg space-y-4 p-5 rounded-md">
          {/* Rounded Image */}
          <div className="flex items-center justify-center w-80 h-24 mt-3">
            <Image
              src={image4}
              alt="Profile Picture"
              className="object-cover rounded-sm"
            />
          </div>

          {/* Date */}
          <p className="text-white text-sm">Sandra Baker...Dec 5, 2024</p>

          {/* Testimony */}
          <p className="text-center text-wrap text-white text-base">
            Their professionalism and attention to detail were outstanding. I
            would recommend them to anyone in need!
          </p>
        </div>

        {/* jjjj */}

        <div className=" flex flex-col items-center justify-center w-96 h-auto bg-gray-400 shadow-lg space-y-4 p-5 rounded-md">
          {/* Rounded Image */}
          <div className="flex items-center justify-center w-80 h-24 mt-3">
            <Image
              src={image5}
              alt="Profile Picture"
              className="object-cover rounded-sm"
            />
          </div>

          {/* Date */}
          <p className="text-white text-sm">Brian Cook...Dec 18, 2024</p>

          {/* Testimony */}
          <p className="text-center text-wrap text-white text-base">
            I was blown away by their expertise. They solved my issue quickly
            and effectively. Truly remarkable!
          </p>
        </div>

        {/* jjjj */}

        <div className=" flex flex-col items-center justify-center w-96 h-auto bg-gray-400 shadow-lg space-y-4 p-5 rounded-md">
          {/* Rounded Image */}
          <div className="flex items-center justify-center w-80 h-24 mt-3">
            <Image
              src={image6}
              alt="Profile Picture"
              className="object-cover rounded-sm"
            />
          </div>

          {/* Date */}
          <p className="text-white text-sm">Josh Coonor...Dec 21, 2024</p>

          {/* Testimony */}
          <p className="text-center text-wrap text-white text-base">
            I had almost given up hope until I found them. They delivered
            results beyond my expectations. Thank you!
          </p>
        </div>

        {/* jjjj */}

        <div className=" flex flex-col items-center justify-center w-96 h-auto bg-gray-400 shadow-lg space-y-4 p-5 rounded-md">
          {/* Rounded Image */}
          <div className="flex items-center justify-center w-80 h-24 mt-3">
            <Image
              src={image7}
              alt="Profile Picture"
              className="object-cover rounded-sm"
            />
          </div>

          {/* Date */}
          <p className="text-white text-sm">Harvey Campbel...Dec 21, 2024</p>

          {/* Testimony */}
          <p className="text-center text-wrap text-white text-base">
            Incredible experience! The process was smooth, and they delivered on
            their promise. Highly recommended!
          </p>
        </div>

        {/* jjjj */}

        <div className=" flex flex-col items-center justify-center w-96 h-auto bg-gray-400 shadow-lg space-y-4 p-5 rounded-md">
          {/* Rounded Image */}
          <div className="flex items-center justify-center w-80 h-24 mt-3">
            <Image
              src={image9}
              alt="Profile Picture"
              className="object-cover rounded-sm"
            />
          </div>

          {/* Date */}
          <p className="text-white text-sm">Catlyn Harold...Jan 3, 2025</p>

          {/* Testimony */}
          <p className="text-center text-wrap text-white text-base">
            Phenomenal team and exceptional service. If you're looking for
            results, look no further!
          </p>
        </div>

        {/* jjjj */}

        <div className=" flex flex-col items-center justify-center w-96 h-auto bg-gray-400 shadow-lg space-y-4 p-5 rounded-md">
          {/* Rounded Image */}
          <div className="flex items-center justify-center w-80 h-24 mt-3">
            <Image
              src={image10}
              alt="Profile Picture"
              className="object-cover rounded-sm"
            />
          </div>

          {/* Date */}
          <p className="text-white text-sm">Carol Humming...Jan 16, 2025</p>

          {/* Testimony */}
          <p className="text-center text-wrap text-white text-base">
            I’m so impressed with their efficiency and professionalism. They
            delivered exactly what I needed!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
