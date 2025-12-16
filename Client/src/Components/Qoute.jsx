import React from "react";
// import '../Components/Quote.css' // Removed external CSS
import qouteImg from "../public/qoute.jpg";

const Quote = () => {
  return (
    <section className="w-full bg-[#111111]  relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ================= IMAGE SECTION ================= */}
          <div className="relative w-full">
            {/* Decorative colored backdrop blur */}
            <div className="absolute -inset-4 bg-blue-500/10 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800 aspect-[4/3] lg:aspect-square max-h-[500px] group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              {/* Ideally, replace this src with an image of Naval or a high-tech workspace */}
              <img
                src={qouteImg}
                alt="Naval Ravikant or Modern Workspace"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* ================= CONTENT SECTION ================= */}
          <div className="flex flex-col relative z-10">
            
            {/* Big Quote Icon */}
            <div className="text-8xl font-serif text-blue-500/20 leading-none mb-4 -ml-2 select-none">
              “
            </div>

            {/* The Quote */}
            <blockquote className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight font-serif tracking-tight mb-8">
              Learn to sell. Learn to build. <br />
              <span className="text-gray-500 italic">If you can do both, you will be unstoppable.</span>
            </blockquote>

            {/* Author Details */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-blue-500 rounded-full"></div>
              <div>
                <p className="text-lg text-white font-bold tracking-wide">
                  Naval Ravikant
                </p>
                <p className="text-sm text-blue-400 uppercase tracking-widest font-medium">
                  Entrepreneur & Investor
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Quote;