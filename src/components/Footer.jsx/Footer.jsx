import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#115585] text-white py-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 px-5">
        {/* Left Section - Logo and Quote */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-white p-2 rounded-md">
              <img src="/path-to-logo" alt="Logo" className="w-10" />
            </div>
            <span className="font-bold text-2xl">PROPCODES</span>
          </div>
          <p className="text-sm mb-4 font-semibold">
            "GROW YOUR FUTURE TODAY."
          </p>
          <p className="text-xs leading-relaxed">
            This quote highlights the power of real estate investments. Smart
            choices now pave the way for future success and stability, turning
            today's efforts into tomorrow's rewards.
          </p>
          <div className="flex mt-4">
            <div className="flex space-x-4 lg:text-4xl text-xl text-white">
                <FaSquareFacebook />
                <FaYoutube />
                <RiInstagramFill />
                <IoLogoWhatsapp />
              </div>
          </div>
        </div>

        {/* Explore Section */}
        <div>
          <h3 className="font-bold text-xl mb-4">Explore</h3>
          <ul className="text-sm space-y-2">
            <li>Keller Williams</li>
            <li>RE/MAX</li>
            <li>Coldwell Banker</li>
            <li>Century 21</li>
            <li>Berkshire HomeServices</li>
            <li>Sotheby's</li>
            <li>Compass</li>
            <li>Zillow Group</li>
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="font-bold text-xl mb-4">Links</h3>
          <ul className="text-sm space-y-2">
            <li>Your Account</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Private Policy</li>
            <li>Reviews</li>
            <li>Disclaimer</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="font-bold text-xl mb-4">Links</h3>
          <ul className="text-sm space-y-2">
            <li>Your Account</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Private Policy</li>
            <li>Reviews</li>
            <li>Disclaimer</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Address Section */}
        <div>
          <h3 className="font-bold text-xl mb-4">Address</h3>
          <ul className="text-sm space-y-2">
            <li>+91 9999000090</li>
            <li>+91 0000909090</li>
            <li>+91 9089878909</li>
            <li>
              Office no. 412, Vipul Business Park, Sector 48, Gurugram, Haryana,
              122001
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#001E3C] text-center py-4 mt-10">
        <p className="text-xs">© 2024 Copyright: www.propcodes.com</p>
      </div>
    </footer>
  );
};

export default Footer;