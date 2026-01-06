import React, { useEffect, useState } from 'react';
import { Settings, Monitor, Mic, Square, Volume2, Video, PhoneOff, MoreHorizontal } from 'lucide-react';

const VideoCallDashboard = () => {

    const [name, setEmail] = useState("");
    
      useEffect(() => {
        const userEmail = localStorage.getItem("user");
        if (userEmail) {
          const user = JSON.parse(userEmail);
          setEmail(user.name);
        }
      }, []);

  return (
    <div className="flex h-screen bg-[#111318] text-white font-sans overflow-hidden">
      
      {/* MAIN VIDEO AREA */}
      <div className="flex-1 flex flex-col p-6 gap-6">
        
        {/* Overlaid Video Grid */}
        <div className="flex-1 relative">
          
          {/* Main Large Video: Nadav */}
          <div className="w-full h-full rounded-3xl overflow-hidden bg-[#1a1f26] relative border border-white/5 shadow-2xl">
            <img
              src=""
              alt="Nadav"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#1a1f26]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              {name}
            </div>
          </div>

          {/* Small Overlay Video: Pieter (Positioned Bottom Right) */}
          <div className="absolute bottom-6 right-6 w-50 aspect-video rounded-2xl bg-[#1a1f26] flex items-center justify-center border-2 border-white/10 shadow-2xl z-10 overflow-hidden">
            <div className="w-8 h-8 rounded-full bg-[#4f46e5] flex items-center justify-center shadow-lg">
              <Mic className="w-3 h-3 text-white" />
            </div>
            
            <div className="absolute bottom-1 left-1 flex items-center gap-2 px-1 py-1 rounded-md text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 text-xs"></span>
              BOT
            </div>
            
          </div>
        </div>

        {/* BOTTOM CONTROLS (Unchanged) */}
        <div className="flex items-center justify-between px-2">
          <div className="bg-[#1a1f26] p-3 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
            <Settings className="w-3 h-3 text-gray-400" />
          </div>

<div className="flex items-center gap-4">
  {/* Screen Share */}
  <div className="bg-[#1a1f26] p-3 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors group">
    <Monitor className="w-3 h-3 text-gray-400 group-hover:text-white" />
  </div>

  {/* Microphone */}
  <div className="bg-[#1a1f26] p-3 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors group">
    <Mic className="w-3 h-3 text-gray-400 group-hover:text-white" />
  </div>

  {/* Stop Recording / Square (Red variant) */}

  {/* Volume/Audio */}
  <div className="bg-[#1a1f26] p-3 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors group">
    <Volume2 className="w-3 h-3 text-gray-400 group-hover:text-white" />
  </div>

  {/* Video Camera */}
  <div className="bg-[#1a1f26] p-3 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors group">
    <Video className="w-3 h-3 text-gray-400 group-hover:text-white" />
  </div>
</div>

          <div className="bg-red-500 p-3 rounded-full cursor-pointer hover:bg-red-600 transition-all shadow-lg shadow-red-500/20">
            <PhoneOff className="w-3 h-3 text-white" />
          </div>
        </div>
      </div>

      {/* RIGHT SIDEBAR - GLASS THEME */}
<div className="w-[380px] bg-white/5 backdrop-blur-xl border-l border-white/10 flex flex-col p-6 gap-6 overflow-y-auto relative">
  
  {/* Header with Glass Tab Style */}

  {/* Chat Messages Area */}
  <div className="flex-1 flex flex-col gap-4 overflow-y-auto pr-2">
    {/* Sample Received Message */}
    <div className="flex flex-col gap-1 max-w-[85%]">
      <span className="text-[10px] text-white/40 ml-2">bot</span>
      <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl rounded-tl-none border border-white/5 text-sm">
        Hey everyone! Are we recording this session?
      </div>
    </div>

    {/* Sample Sent Message */}
    <div className="flex flex-col gap-1 max-w-[85%] self-end">
      <span className="text-[10px] text-white/40 mr-2 text-right">You</span>
      <div className="bg-indigo-500/30 backdrop-blur-md p-3 rounded-2xl rounded-tr-none border border-indigo-500/20 text-sm">
        Yes, I just started the recording. 
      </div>
    </div>
  </div>

  {/* Glass Input Area */}
</div>
    </div>
  );
};

const ControlButton = ({ icon, variant = 'default' }) => (
  <button className={`p-3 rounded-full transition-all border border-white/5 ${
    variant === 'danger' ? 'bg-red-500/20 text-red-500' : 'bg-[#1a1f26] text-gray-300 hover:bg-white/10'
  }`}>
    {React.cloneElement(icon, { size: 22 })}
  </button>
);

const ParticipantItem = ({ name, role, meta, audioLevel }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-1">
      <div className="flex items-center gap-2">
        <span className="font-medium">{name}</span>
        {role && <span className="text-[10px] bg-gray-700 text-gray-400 px-1.5 py-0.5 rounded">{role}</span>}
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
      </div>
      <MoreHorizontal className="w-4 h-4 text-gray-500" />
    </div>
    <div className="text-[10px] text-gray-500 mb-2 truncate">{meta}</div>
    <div className="flex gap-0.5 h-1">
      {audioLevel.map((lvl, i) => (
        <div key={i} className="flex-1 rounded-full bg-green-500/40" style={{ opacity: lvl/100 }}></div>
      ))}
    </div>
  </div>
);

export default VideoCallDashboard;