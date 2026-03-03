import React, { useEffect, useRef, useState } from 'react';
import { Mic, Video, PhoneOff, Settings, ShieldCheck, Activity } from 'lucide-react';

const MockInterviewUI = () => {
  const videoRef = useRef(null);
  const [isCamReady, setIsCamReady] = useState(false);
  
  // Mock Speech-to-Text Data
  const [transcript, setTranscript] = useState([
    { role: 'AI', text: 'Hello Abhinav, thank you for joining. Can you tell me about your experience with Web Development?' },
    { role: 'User', text: 'I have been working on full-stack projects like TaskFlow and BlogBox using Next.js.' },
    { role: 'AI', text: 'That is impressive. How do you handle state management in complex applications?' },
  ]);

  // Enable Real-time Camera Permissions
  useEffect(() => {
    async function enableStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setIsCamReady(true);
        }
      } catch (err) {
        console.error("Camera access denied", err);
      }
    }
    enableStream();
  }, []);

  return (
    <>
      {/* Main Container - Frameless Video Mockup */}
      <div className="w-full max-w-7xl h-[85vh] bg-[#000000] rounded-3xl border border-white/5 shadow-2xl flex overflow-hidden">
        
        {/* LEFT SECTION: Full Video Feed */}
        <div className="flex-1 relative flex flex-col bg-black">
          {/* Status Indicators */}
          <div className="absolute top-6 left-6 z-20 flex gap-3">
            <div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Live Interview</span>
            </div>
          </div>

          {/* Real-time Video Stream */}
          <div className="flex-1 w-full h-full relative overflow-hidden">
            <video 
              ref={videoRef} 
              autoPlay 
              playsInline 
              muted 
              className="w-full h-full object-cover scale-x-[-1]" 
            />
            {!isCamReady && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900">
                <ShieldCheck size={48} className="text-blue-500 mb-4 animate-bounce" />
                <p className="text-sm opacity-50 uppercase tracking-widest">Awaiting Permissions...</p>
              </div>
            )}
            
            {/* Bottom Controls Overlay */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/5 backdrop-blur-xl p-4 rounded-3xl border border-white/10 shadow-2xl">
              <button className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all"><Mic size={22} /></button>
              <button className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all"><Video size={22} /></button>
              <button className="p-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl shadow-lg shadow-red-900/20 transition-all mx-4">
                <PhoneOff size={24} />
              </button>
              <button className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all"><Activity size={22} /></button>
              <button className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all"><Settings size={22} /></button>
            </div>
          </div>

          {/* Live Transcript Subtitles (Synced with Right Panel) */}
          <div className="absolute bottom-32 left-0 w-full px-10 text-center pointer-events-none">
            <div className="bg-black/60 backdrop-blur-md inline-block px-3 py-3 rounded-xl border border-white/10">
              <p className="text-sm font-medium italic opacity-90">
                "How do you handle state management in complex applications?"
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION: Read-only Voice-to-Text Log */}
        <div className="w-[420px] bg-[#181818] border-l border-white/5 flex flex-col">
          <div className="p-6 border-b border-white/5 flex items-center justify-between">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">Speech Log</h3>
            <div className="px-2 py-0.5 rounded border border-blue-500/30 text-[9px] text-blue-500 font-bold">AI ACTIVE</div>
          </div>

          {/* Scrollable Conversation History */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
            {transcript.map((entry, idx) => (
              <div key={idx} className={`flex flex-col ${entry.role === 'User' ? 'items-end' : 'items-start'}`}>
                <span className="text-[9px] font-bold opacity-30 uppercase tracking-widest mb-2">
                  {entry.role === 'AI' ? 'luna' : 'You'}
                </span>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  entry.role === 'User' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white/5 border border-white/5 rounded-tl-none italic'
                }`}>
                  {entry.text}
                </div>
              </div>
            ))}
          </div>

          {/* Footer Info Area (Replacing Chat Input) */}
        </div>
      </div>
</>
  );
};

export default MockInterviewUI;