import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#111111] text-gray-300 px-8 py-6 flex justify-between items-center font-sans border-b border-gray-800/30">
      
      {/* Left Side: Navigation Links */}
      <div className="flex gap-8 items-center text-sm font-medium tracking-wide">
        <a href="#" className="hover:text-white transition-colors duration-200">
          Blog
        </a>
        <a href="#Howitworks" className="hover:text-white transition-colors duration-200">
          How it works
        </a>
        <a href="#contacts" className="hover:text-white transition-colors duration-200">
          Contact
        </a>
      </div>

      {/* Center: Logo (Styled like "WEN LAUNCH") */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-2xl font-normal tracking-[0.2em] text-white uppercase cursor-pointer">
          AIpply
        </h1>
      </div>

      {/* Right Side: Action Buttons */}
      <div className="flex gap-6 items-center">
        <a 
          href="/login" 
          className="text-sm font-medium hover:text-white transition-colors duration-200"
        >
          Login
        </a>
        <button className="text-sm font-medium text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all duration-300">
          For Employers
        </button>
      </div>

    </nav>
  );
};

export default Navbar;