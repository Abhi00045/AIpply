import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Clear and automated documentation",
    desc: "You don't have to understand terminology and complex formulations structured data is processed automatically for you.",
    icon: <FileText size={20} />, // Icon for documentation
  },
  {
    title: "Guaranteed answer to your question",
    desc: "There is no need to look for solutions on your own our clients have already solved similar problems, and our AI finds the answer instantly.",
    icon: <ShieldCheck size={20} />, // Icon for guarantee/security
  },
  {
    title: "Making profitable decisions",
    desc: "You will never miss an opportunity to save money, get additional benefits, and choose the most efficient path for your business growth.",
    icon: <TrendingUp size={20} />, // Icon for profit/growth
  },
];

const HowItWorks = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="w-full min-h-screen bg-[#111111] overflow-hidden flex flex-col items-center justify-center font-sans">
      
      {/* ================= HEADER SECTION ================= */}
      <div className="relative text-center mb-16 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
        >
          How it works
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg"
        >
          Our streamlined process takes you from posting a job to hiring the best talent.
        </motion.p>
      </div>

      {/* ================= CARDS GRID (3 Columns to fit content) ================= */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 w-full">
        {steps.map((step, index) => (
          <GlassCard 
            key={index} 
            step={step} 
            index={index} 
            hoveredIndex={hoveredIndex} 
            setHoveredIndex={setHoveredIndex} 
          />
        ))}
      </div>

    </section>
  );
};

const GlassCard = ({ step, index, hoveredIndex, setHoveredIndex }) => {
  // Logic: Blur other cards when one is hovered
  const isBlur = hoveredIndex !== null && hoveredIndex !== index;
  const isHovered = hoveredIndex === index;

  return (
    <motion.div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      animate={{
        scale: isHovered ? 1.05 : isBlur ? 0.95 : 1,
        opacity: isBlur ? 0.4 : 1,
        filter: isBlur ? "blur(4px)" : "blur(0px)",
        zIndex: isHovered ? 10 : 1,
      }}
      className="relative group h-full"
    >
      {/* --- Card Container --- */}
      {/* Changed bg to dark #1a1a1a to match requirement (no purple) */}
      <div className="h-full relative overflow-hidden rounded-2xl bg-[#161616] border border-white/10 flex flex-col p-8 transition-colors duration-300 hover:border-white/30 shadow-2xl">
        
        {/* Inner Gradient Lighting (Subtle white glow on hover) */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        {/* --- Content --- */}
        <div className="relative z-10 flex flex-col items-start h-full">
          
          {/* 1. Icon Pill (Replaces the 'To learn more' button) */}
          <div className="mb-8 inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
             {step.icon}
          </div>

          {/* 2. Title */}
          <h3 className="text-2xl font-semibold text-white tracking-tight mb-4 group-hover:text-gray-100 transition-colors duration-300">
            {step.title}
          </h3>

          {/* 3. Description */}
          <p className="text-sm text-gray-400 leading-relaxed font-light">
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default HowItWorks;