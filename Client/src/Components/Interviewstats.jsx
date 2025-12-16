import React, { useState, useEffect } from "react";
import AiVideo from "../public/Ai_AIPPLY.mp4";

const InterviewStats = () => {
  // --- Animation Logic State ---
  const [displayedText, setDisplayedText] = useState("");
  const [isAiTurn, setIsAiTurn] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  // Content for the conversation
  const aiMessage = "Hey Dev, welcome! What motivated you to apply for our Mern dev role at Hexawave tech?";
  const userMessage = "Hi! I've been following Hexawave's AI innovations for years. My full-stack skills are a perfect match.";

  useEffect(() => {
    let timeout;
    
    const currentMessage = isAiTurn ? aiMessage : userMessage;

    if (isTyping) {
      // Typewriter effect: Add one character at a time
      if (displayedText.length < currentMessage.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentMessage.slice(0, displayedText.length + 1));
        }, 50); // Speed of typing (lower is faster)
      } else {
        // Finished typing, wait before switching
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 3000); // How long the text stays visible before switching (3 seconds)
      }
    } else {
      // Switching phases (Delete text or instant switch)
      // Here we reset for the next turn
      setIsAiTurn(!isAiTurn);
      setDisplayedText("");
      setIsTyping(true);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, isAiTurn, aiMessage, userMessage]);

  return (
    <section className="bg-[#111111] w-full py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ================= LEFT: VIDEO & CHAT ================= */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            
            {/* Video Container */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl shadow-blue-900/10">
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent z-10 opacity-60"></div>
              <video
                className="w-full h-auto object-cover rounded-2xl"
                src={AiVideo}
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              />
            </div>

            {/* Animated Chat Bubble */}
            <div className="absolute -bottom-6 left-4 right-4 md:-right-8 md:left-auto md:w-[350px] z-20">
              <div className="bg-[#1a1a1a]/95 backdrop-blur-md p-4 rounded-xl shadow-lg transform transition-transform flex flex-col justify-center border border-gray-800 hover:border-b-blue-400/30  duration-300">
                
                {/* Dynamic Header (Changes based on who is speaking) */}
                <h4 className={`text-xs font-bold uppercase mb-2 transition-colors duration-300 ${isAiTurn ? 'text-blue-400' : 'text-blue-500'}`}>
                  {isAiTurn ? "AI Interviewer" : "Candidate"}
                </h4>

                <div className="flex gap-3 items-start">
                  {/* Vertical Line Color Bar */}
                  <div className={`w-1 h-full min-h-[40px] rounded-full transition-colors duration-300 ${isAiTurn ? 'bg-blue-500' : 'bg-blue-500'}`}></div>
                  
                  {/* Typing Text Area */}
                  <span className="text-xs text-gray-200 leading-relaxed">
                    {displayedText}
                    {/* Blinking Cursor */}
                    <span className="inline-block w-1.5 h-4 bg-gray-400 ml-1 animate-pulse align-middle"></span>
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* ================= RIGHT: STATS & CONTENT ================= */}
          <div className="text-left mt-10 lg:mt-0 ">
            
            <h2 className="text-4xl font-bold text-white leading-[1.1] mb-6">
              Active interviews <br />
              <span className="text-gray-500">and assessments</span>
            </h2>

            <div className="flex items-baseline gap-1 mb-3">
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                100+
              </h1>
            </div>

            <span className="text-lg text-gray-400 leading-relaxed max-w-lg mb-3">
              The number of AI-powered interviews conducted monthly continues to grow exponentially, making RecruitAI the
              leading choice for intelligent hiring solutions.
            </span>

            {/* Stat Cards Grid */}
            <div className=" mt-1.5 flex gap-4">
              <div className="bg-[#1a1a1a] border border-gray-800 p-5 rounded-xl  hover:border-b-blue-400/30 transition-colors duration-300">
                <h3 className="text-gray-400 text-xs font-medium">Interview Quality</h3>
                <p className="text-xs font-bold text-blue-400">98%</p>
              </div>

              <div className="bg-[#1a1a1a] border border-gray-800 p-5 rounded-xl hover:border-b-blue-400/30 transition-colors duration-300">
                <h3 className="text-gray-400 text-xs font-medium mb-1">Time Saved</h3>
                <p className="text-xs font-bold text-purple-400">75%</p>
              </div>

              <div className="bg-[#1a1a1a] border border-gray-800 p-5 rounded-xl hover:border-b-blue-400/30 transition-colors duration-300">
                <h3 className="text-gray-400 text-sx font-medium mb-1">Cost Reduction</h3>
                <p className="text-xs font-bold text-green-400">60%</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InterviewStats;