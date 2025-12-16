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
      <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-center items-center overflow-hidden">
        
        {/* --- Background Texture (Optional Dot Pattern) --- */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        {/* --- Image 1: Robot Arm (Top Left) --- */}
        {/* We use absolute positioning to pin it to the corner */}
        <div className="absolute top-0 left-0 w-[40%] md:w-[30%] max-w-[500px] -translate-x-10 -translate-y-10 opacity-90 grayscale hover:grayscale-0 transition-all duration-700">
           {/* Replace this src with your actual robot arm image */}
           <img src="" alt="Robot Arm" className="w-full h-auto object-contain" />
        </div>
        {/* --- Center Content --- */}
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-[-50px]">
  
  {/* Main Headline */}
  <h1 className="text-2xl md:text-7xl lg:text-6xl font-serif text-white leading-tight mb-6">
    Uniting Talent <span className=''>& </span><br />
    <span className="italic opacity-80 text-5xl">Opportunity with AI</span>
  </h1>

  {/* Subtext */}
  <p className="text-sm md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed mb-10">
    A smart recruiting platform that finds top talent and helps candidates shine with natural AI interviews, seamless resume processing, and powerful analytics.
  </p>

  {/* Buttons */}
  <div className="flex justify-center items-center">
    <button className="px-8 py-3 bg-white text-black font-medium text-sm tracking-wide hover:bg-gray-200 transition-colors duration-200 min-w-[160px] rounded-full">
      Get started
    </button>
  </div>
</div>

        {/* --- Image 2: Human Hand (Bottom Right) --- */}
        <div className="absolute bottom-0 right-0 w-[40%] md:w-[35%] max-w-[600px] translate-x-10 translate-y-10 opacity-90 grayscale hover:grayscale-0 transition-all duration-700">
           {/* Replace this src with your actual human hand image */}
           <img src="" alt="Human Hand" className="w-full h-auto object-contain" />
        </div>

      </section>
      {/* ================= END HERO ================= */}


      {/* Page Content */}
      <div className="space-y-24 pb-20 relative z-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6">
          <InterviewStats />
        </div>

        <div id="Howitworks" className="scroll-mt-32">
          <HowItWorks />
        </div>

        <Quote />
        <Testimonials />
        
        <div id="contacts" className="scroll-mt-32">
          <Contact />
        </div>
      </div>

    </div>
  );
};

export default HeroSection;