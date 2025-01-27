import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer
      className="flex flex-col
    text-black-100 
    mt-5 
    border-t
    border-gray-100 bg-[#121214] px-10 py-2"
    >
      <div
        className="flex max-md:flex-col
         flex-wrap
         justify-between gap-5
          sm:px16 px-6 py-10"
      >
        <div
          className="flex flex-col
             justify-start
              items-start
               gap-6"
        >
          {/* <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-conatin"
          /> */}

          <p className="text-base text-white">
            Contact Us Today  <br />
            CYBERSECMARIOTONALI@GMAIL.COM <br />

            +1 608 561 7074 <br />
            Text and Whatsapp
          </p>
        </div>
      </div>

      <div
        className="flex justify-between items-center flex-wrap
                   mt-10 border-t  border-gray-100 
                     sm:px-16 px-6 py-10"
      >
        <p className="text-white">@2025 Recovery-Blast. All rights reserved &copy;</p>

        <div className="">
          <Link href="" className="text-white mr-3">
            Privacy Policy
          </Link>

          <Link href="" className="text-white">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
