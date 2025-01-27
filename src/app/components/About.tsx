import Image from "next/image";
import React from "react";
import image from "../assets/about.jpg";

function About() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between p-6 bg-black">
      {/* Text Section */}
      <div className="md:w-1/2 p-4">
        <h2 className="text-2xl font-bold text-white">About Us</h2>
        <p className="mt-4 text-white">
          At Recovery-Blast, we are a team of dedicated professionals
          specializing in the recovery of stolen or lost financial assets. With
          years of expertise in forensic investigation, cybersecurity, and legal
          processes, we have successfully assisted individuals and businesses in
          reclaiming their funds.
        </p>
        <p className="mt-4 text-white">
          Our mission is to provide reliable, ethical, and efficient recovery
          solutions tailored to each client’s unique situation. We understand
          the emotional and financial stress that comes with financial loss, and
          we are committed to guiding you every step of the way to ensure
          justice is served and your peace of mind restored. Trust us to turn
          your setbacks into comebacks.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center w-full h-96 md:w-1/2 md:h-auto">
        <Image
          src={image} // Replace with your image path
          alt="About Us"
          priority
          className="object-cover rounded-lg w-full h-80 "
        />
      </div>
    </section>
  );
}

export default About;
