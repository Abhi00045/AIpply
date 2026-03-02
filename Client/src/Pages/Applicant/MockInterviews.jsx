// import React, { useEffect, useRef, useState } from 'react';
// import { Mic, Video, PhoneOff, Settings, ShieldCheck, Activity } from 'lucide-react';

// const MockInterviewUI = () => {
//   const videoRef = useRef(null);
//   const [isCamReady, setIsCamReady] = useState(false);
  
//   // Mock Speech-to-Text Data
//   const [transcript, setTranscript] = useState([
//     { role: 'AI', text: 'Hello Abhinav, thank you for joining. Can you tell me about your experience with Web Development?' },
//     { role: 'User', text: 'I have been working on full-stack projects like TaskFlow and BlogBox using Next.js.' },
//     { role: 'AI', text: 'That is impressive. How do you handle state management in complex applications?' },
//   ]);

//   // Enable Real-time Camera Permissions
//   useEffect(() => {
//     async function enableStream() {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//           setIsCamReady(true);
//         }
//       } catch (err) {
//         console.error("Camera access denied", err);
//       }
//     }
//     enableStream();
//   }, []);

//   return (
//     <>
//       {/* Main Container - Frameless Video Mockup */}
//       <div className="w-full max-w-7xl h-[85vh] bg-[#12151c] rounded-3xl border border-white/5 shadow-2xl flex overflow-hidden">
        
//         {/* LEFT SECTION: Full Video Feed */}
//         <div className="flex-1 relative flex flex-col bg-black">
//           {/* Status Indicators */}
//           <div className="absolute top-6 left-6 z-20 flex gap-3">
//             <div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
//               <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
//               <span className="text-[10px] font-bold tracking-widest uppercase">Live Interview</span>
//             </div>
//           </div>

//           {/* Real-time Video Stream */}
//           <div className="flex-1 w-full h-full relative overflow-hidden">
//             <video 
//               ref={videoRef} 
//               autoPlay 
//               playsInline 
//               muted 
//               className="w-full h-full object-cover scale-x-[-1]" 
//             />
//             {!isCamReady && (
//               <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900">
//                 <ShieldCheck size={48} className="text-blue-500 mb-4 animate-bounce" />
//                 <p className="text-sm opacity-50 uppercase tracking-widest">Awaiting Permissions...</p>
//               </div>
//             )}
            
//             {/* Bottom Controls Overlay */}
//             <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-white/5 backdrop-blur-xl p-4 rounded-3xl border border-white/10 shadow-2xl">
//               <button className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all"><Mic size={22} /></button>
//               <button className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all"><Video size={22} /></button>
//               <button className="p-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl shadow-lg shadow-red-900/20 transition-all mx-4">
//                 <PhoneOff size={24} />
//               </button>
//               <button className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all"><Activity size={22} /></button>
//               <button className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all"><Settings size={22} /></button>
//             </div>
//           </div>

//           {/* Live Transcript Subtitles (Synced with Right Panel) */}
//           <div className="absolute bottom-32 left-0 w-full px-12 text-center pointer-events-none">
//             <div className="bg-black/60 backdrop-blur-md inline-block px-6 py-3 rounded-xl border border-white/10">
//               <p className="text-lg font-medium italic opacity-90">
//                 "How do you handle state management in complex applications?"
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SECTION: Read-only Voice-to-Text Log */}
//         <div className="w-[420px] bg-[#161920] border-l border-white/5 flex flex-col">
//           <div className="p-6 border-b border-white/5 flex items-center justify-between">
//             <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">Speech Log</h3>
//             <div className="px-2 py-0.5 rounded border border-blue-500/30 text-[9px] text-blue-500 font-bold">AI ACTIVE</div>
//           </div>

//           {/* Scrollable Conversation History */}
//           <div className="flex-1 overflow-y-auto p-6 space-y-8 scrollbar-hide">
//             {transcript.map((entry, idx) => (
//               <div key={idx} className={`flex flex-col ${entry.role === 'User' ? 'items-end' : 'items-start'}`}>
//                 <span className="text-[9px] font-bold opacity-30 uppercase tracking-widest mb-2">
//                   {entry.role === 'AI' ? 'Assistant Question' : 'Your Transcription'}
//                 </span>
//                 <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
//                   entry.role === 'User' 
//                   ? 'bg-blue-600 text-white rounded-tr-none' 
//                   : 'bg-white/5 border border-white/5 rounded-tl-none italic'
//                 }`}>
//                   {entry.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Footer Info Area (Replacing Chat Input) */}
//         </div>
//       </div>
// </>
//   );
// };

// export default MockInterviewUI;

import React, { useState } from 'react';
import * as Icons from 'lucide-react'; 

const ScorecardForm = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [customRole, setCustomRole] = useState('');
  const [resumeFile, setResumeFile] = useState(null);

  const roles = ['Frontend Developer', 'Backend Developer', 'Data Scientist'];

  const handleStartInterview = () => {
    window.location.href = '/mock-interview'; 
    console.log('Navigate to mock interview page');
  };

  const InputField = ({ label, icon, value, onChange, placeholder }) => (
    <div className="flex items-center gap-2 border-b border-gray-700 py-3 text-sm">
      {icon && <span className="text-gray-500 w-5 text-center">{icon}</span>}
      <label className="text-gray-400 w-32 shrink-0">{label}:</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-grow bg-transparent text-gray-100 placeholder-gray-600 outline-none p-0 text-sm"
      />
    </div>
  );

  const CheckboxField = ({ label, value, checked, onChange }) => (
    <label className="flex items-center gap-3 py-3 text-sm cursor-pointer group">
      <span className="text-gray-400 w-32 shrink-0 group-hover:text-white transition">{label}:</span>
      <div
        className={`w-6 h-6 border-2 border-gray-600 rounded flex items-center justify-center transition ${checked ? 'bg-blue-600 border-blue-600' : 'bg-transparent hover:border-blue-400'}`}
        onClick={() => onChange(!checked)}
      >
        {checked && <Icons.Check size={18} className="text-white" />}
      </div>
      <span className={`flex-grow text-gray-300 transition ${checked ? 'text-white' : ''}`}>{value}</span>
    </label>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans p-6 md:p-10 flex flex-col items-center">
      <div className="w-full max-w-7xl bg-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col items-center gap-10">
        <h1 className="text-5xl font-extrabold tracking-tighter text-white border-b-4 border-white/5 pb-6 w-full text-center uppercase">Interview Prep</h1>

        <div className="w-full flex flex-col gap-16 md:flex-row md:items-start">
          <div className="flex-1 flex flex-col gap-10">
            {/* Roles Section */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest flex items-center gap-3"><Icons.Briefcase size={16}/> Select Desired Role</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roles.map(role => (
                  <button
                    key={role}
                    onClick={() => {
                      setSelectedRole(role);
                      setCustomRole(''); 
                    }}
                    className={`flex items-center gap-3 p-4 bg-gray-800 rounded-xl border-2 transition ${selectedRole === role ? 'border-blue-500 bg-blue-950/30' : 'border-gray-700 hover:border-blue-400'}`}
                  >
                    <div className={`w-6 h-6 border-2 border-gray-500 rounded-full flex items-center justify-center transition ${selectedRole === role ? 'bg-blue-600 border-blue-600' : 'bg-transparent'}`}>
                      {selectedRole === role && <Icons.Check size={18} className="text-white" />}
                    </div>
                    <span className="text-white text-base font-medium">{role}</span>
                  </button>
                ))}
              </div>
              <InputField
                label="Or Enter Your Own"
                icon={<Icons.Search size={16}/>}
                value={customRole}
                onChange={(val) => {
                  setCustomRole(val);
                  setSelectedRole(null);
                }}
                placeholder="Type your role..."
              />
            </div>

            {/* Resume Section */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest flex items-center gap-3"><Icons.FileText size={16}/> Upload Resume</h2>
              <div className="border border-gray-700 bg-gray-800 rounded-xl p-6 flex flex-col items-center gap-5 transition hover:border-blue-500 hover:bg-gray-800/80">
                <input
                  type="file"
                  id="resumeUpload"
                  onChange={(e) => setResumeFile(e.target.files ? e.target.files[0] : null)}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
                <Icons.UploadCloud size={48} className="text-gray-500"/>
                <label htmlFor="resumeUpload" className="bg-gray-700 text-white font-semibold py-2.5 px-6 rounded-lg text-sm transition hover:bg-gray-600 cursor-pointer">
                  {resumeFile ? 'Change File' : 'Browse Files'}
                </label>
                <div className="text-sm text-center">
                  {resumeFile ? (
                    <p className="text-white font-medium">Selected: <span className="text-blue-300 font-bold">{resumeFile.name}</span></p>
                  ) : (
                    <p className="text-gray-400">Supported: PDF, DOC, DOCX</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Personality Traits Section */}
          <div className="flex-1 space-y-4 border-t-2 border-dashed border-gray-700 pt-10 md:border-t-0 md:pt-0">
            <h2 className="text-sm font-semibold text-blue-400 uppercase tracking-widest flex items-center gap-3"><Icons.Lightbulb size={16}/> Experience Level</h2>
            <div className="space-y-2">
              <CheckboxField label="Experienced" value="Mid-Senior Level" checked={false} onChange={() => {}} />
              <CheckboxField label="Professional" value="Seasoned Industry Vet" checked={false} onChange={() => {}} />
              <CheckboxField label="Unpaid-Intern" value="Highly Motivated Beginner" checked={false} onChange={() => {}} />
              <CheckboxField label="Intern" value="Student / Recent Grad" checked={false} onChange={() => {}} />
              <CheckboxField label="Entry-Level" value="Just Starting Career" checked={false} onChange={() => {}} />
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-700 w-full"></div>

        <div className="w-full flex justify-center md:justify-end mt-4">
          <button
            onClick={handleStartInterview}
            className="flex items-center gap-4 bg-white text-gray-950 font-extrabold py-5 px-10 text-xl rounded-2xl shadow-lg shadow-white/10 transition-all duration-300 hover:bg-blue-100 hover:shadow-blue-200/20 hover:-translate-y-1"
          >
            <Icons.Video size={28} />
            Start Mock Interview
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScorecardForm;