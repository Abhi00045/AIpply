import React from 'react';
// import robotArm from '../public/robot-arm.png';   // Place your robot arm image here
// import humanHand from '../public/human-hand.png'; // Place your human hand image here
import HowItWorks from './Howitworks';
import Contact from './contact';
import Testimonials from './Testinomals';
import InterviewStats from './Interviewstats';
import Quote from './Qoute';

const HeroSection = () => {
  return (
    <div className="bg-[#111111] min-h-screen w-full text-gray-300 font-sans selection:bg-white/20 overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen min-h-[200px] flex flex-col justify-center items-center overflow-hidden">
        
        {/* --- Background Texture (Optional Dot Pattern) --- */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
        {/* --- Center Content --- */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-[-50px]">
  
  {/* Main Headline */}
  <h1 className="text-2xl md:text-7xl lg:text-6xl font-serif text-white leading-tight mb-6">
    Uniting Talent <span className='text-blue-900'>& </span><br />
    <span className="italic opacity-80 text-5xl">Opportunity with AI</span>
  </h1>

  {/* Subtext */}
  <p className="text-sm md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
    A smart recruiting platform that finds top talent and helps candidates shine with natural AI interviews, seamless resume processing, and powerful analytics.
  </p>

  {/* Buttons */}
  <div className="flex justify-center items-center">
    <button className="px-8 py-3 mt-5 bg-white text-black font-medium text-sm tracking-wide hover:bg-gray-200 transition-colors duration-200 min-w-[160px] rounded-full">
      Get started
    </button>
  </div>
</div>
        

      </section>
      {/* Page Content */}
      <div className="space-y-24 pb-20">
          <InterviewStats />
          <HowItWorks />
        <Quote />
        <Testimonials />
          <Contact />
      </div>

    </div>
  );
};

export default HeroSection;