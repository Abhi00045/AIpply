import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoHome } from "react-icons/io5";

const Contact = () => {
  return (
    <footer className="bg-[#111111] text-white py-20 px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand/Contact Info Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold mb-4 tracking-tighter italic">AIpply</h2>
            <div className="space-y-3 text-gray-400">
              <span className=" text- flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <MdEmail className="text-xl" /> info@Aipply.com
              </span>
              <span className="text-sm flex items-center gap-3">
                <IoHome className="text-xl" /> Hyderabad, Telangana
              </span>
            </div>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-6">Useful Links</h3>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">Benefits</li>
              <li className="hover:text-white cursor-pointer transition-colors">Specifications</li>
              <li className="hover:text-white cursor-pointer transition-colors">How-to</li>
            </ul>
          </div>

          {/* Communities/Extra Section */}
          <div>
            <h3 className="text-gray-500 uppercase text-xs font-bold tracking-widest mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Press</li>
            </ul>
          </div>

          {/* Social Icons Section - Aligned Right on Desktop */}
          <div className="flex gap-4 lg:justify-end items-start">
            <a href="#" className="p-3 bg-[#292929] hover:bg-[#3E3E3E] rounded-full transition-colors text-xl" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="#" className="p-3 bg-[#292929] hover:bg-[#3E3E3E] rounded-full transition-colors text-xl" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="p-3 bg-[#292929] hover:bg-[#3E3E3E] rounded-full transition-colors text-xl" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 AIpply Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Contact;