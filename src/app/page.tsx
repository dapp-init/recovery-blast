"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Category from "./components/Category";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <About />
        <Category />
        <Testimonials />
        <Footer />
        
      </div>
    </>
  );
}
