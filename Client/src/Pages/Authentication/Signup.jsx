// import React, { useState } from "react";
// import { supabase } from "../lib/supabase";
// import { useNavigate } from "react-router-dom";
// import Loader from "../../utils/Loader";

// export const Signup = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [role, setRole] = useState("");
//   const [confirmpassword, setConfirmPassword] = useState("");
//   const [msg, setMsg] = useState("");
//   const [userExist, setUserExist] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const navigate = useNavigate();

//   const submitingUsers = async (e) => {
//     e.preventDefault();

//     if (password !== confirmpassword) {
//       alert("❗ Passwords do not match");
//       return;
//     }

//     if (!role) {
//       alert("❗ Please select a role");
//       return;
//     }

//     try {
//       setIsLoading(true);
//       setMsg("");

//       const { error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: {
//           data: {
//             full_name: name,
//             role: role,
//           },
//         },
//       });

//       if (error) {
//         if (error.message.toLowerCase().includes("already")) {
//           setUserExist(true);
//         } else {
//           setMsg("❌ " + error.message);
//         }
//         setIsLoading(false);
//         return;
//       }

//       setMsg("✅ Account created successfully!");

//       setTimeout(() => {
//         setIsLoading(false);
//         if (role === "jobseeker") navigate("/applicant");
//         else navigate("/recruiter");
//       }, 1500);

//     // eslint-disable-next-line no-unused-vars
//     } catch(err) {
//       setIsLoading(false);
//       setMsg("❌ Something went wrong");
//     }
//   };

//   const handleGoogleSignup = async () => {
//     if (!role) {
//       alert("❗ Please select your role before continuing with Google");
//       return;
//     }

//     await supabase.auth.signInWithOAuth({
//       provider: "google",
//       options: {
//         data: {
//           role: role,
//         },
//         redirectTo: "http://localhost:5173/applicant",
//       },
//     });
//   };

//   return (
//     <div className="h-screen w-full bg-[#111111] flex overflow-hidden">
//       {isLoading && <Loader />}

//       {/* LEFT SIDE IMAGE */}
//       <div className="hidden lg:block w-1/2 h-full relative">
//         <img
//           src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop"
//           alt="AI Background"
//           className="w-full h-full object-cover brightness-50 contrast-125"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]"></div>
//       </div>

//       {/* RIGHT SIDE FORM */}
//       <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-6 sm:px-16 md:px-24 lg:px-32 bg-[#111111]">
//         <div className="w-full max-w-md mx-auto">

//           <header className="mb-8">
//             <h1 className="text-3xl font-bold text-white mb-2">Sign Up</h1>
//             <span className="text-[14px] text-gray-500">
//               Create your account to access the Job Portal Dashboard
//             </span>
//           </header>

//           <form onSubmit={submitingUsers} className="space-y-5">

//             <div className="space-y-1">
//               <label className="text-[12px] uppercase tracking-widest font-bold text-gray-500">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white focus:outline-none focus:border-white transition-all"
//                 required
//               />
//             </div>

//             <div className="space-y-1">
//               <label className="text-[12px] uppercase tracking-widest font-bold text-gray-400">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="youremail@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white focus:outline-none focus:border-white transition-all"
//                 required
//               />
//             </div>

//             <div className="flex flex-row gap-6">
//               <div className="space-y-1 w-1/2">
//                 <label className="text-[12px] uppercase tracking-widest font-bold text-gray-400">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="••••••••"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white focus:outline-none focus:border-white transition-all"
//                   required
//                 />
//               </div>

//               <div className="space-y-1 w-1/2">
//                 <label className="text-[12px] uppercase tracking-widest font-bold text-gray-400">
//                   Confirm
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="••••••••"
//                   value={confirmpassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white focus:outline-none focus:border-white transition-all"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="space-y-1">
//               <label className="text-[12px] uppercase tracking-widest font-bold text-gray-400">
//                 Who Are You?
//               </label>
//               <select
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 className="w-full bg-[#1a1a1a] py-4 px-4 text-sm text-gray-300 outline-none"
//                 required
//               >
//                 <option value="">Select Role</option>
//                 <option value="jobseeker">I am a jobseeker</option>
//                 <option value="recruiter">I am a recruiter</option>
//               </select>
//             </div>

//             <button
//               type="submit"
//               className="w-full mt-6 bg-transparent border border-white/30 text-white text-xs font-bold py-4 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest"
//             >
//               Create Account
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="flex items-center my-6">
//             <div className="flex-1 h-px bg-white/10"></div>
//             <span className="px-3 text-gray-500 text-xs">OR</span>
//             <div className="flex-1 h-px bg-white/10"></div>
//           </div>

//           {/* Google Signup */}
//           <button
//             onClick={handleGoogleSignup}
//             className="w-full bg-white text-black text-xs font-bold py-4 rounded-full uppercase tracking-widest hover:bg-gray-200 transition-all duration-300"
//           >
//             Continue with Google
//           </button>

//           <p className="text-center text-xs text-gray-500 pt-4">
//             Already have an account?{" "}
//             <a href="/login" className="text-blue-500 hover:text-blue-400">
//               Log in
//             </a>
//           </p>

//           {msg && (
//             <p
//               className="text-center text-xs font-medium pt-2"
//               style={{ color: msg.includes("✅") ? "#4ade80" : "#f87171" }}
//             >
//               {msg}
//             </p>
//           )}
//         </div>
//       </div>

//       {/* USER EXISTS POPUP */}
//       {userExist && (
//         <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50">
//           <div className="text-center p-8 border border-white/10 bg-[#111111] max-w-sm">
//             <p className="text-white text-sm mb-6">
//               <span className="text-red-500 font-bold block mb-2 uppercase">
//                 User Already Exists
//               </span>
//               This email is already registered. Would you like to log in instead?
//             </p>
//             <div className="flex flex-col gap-4">
//               <a href="/login" className="bg-white text-black text-xs font-bold py-4 uppercase">
//                 Login Now
//               </a>
//               <button
//                 onClick={() => setUserExist(false)}
//                 className="text-gray-500 text-xs uppercase hover:text-white"
//               >
//                 Go Back
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/Loader";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [userExist, setUserExist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();

  const submitingUsers = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) { alert("❗ Passwords do not match"); return; }
    if (!role) { alert("❗ Please select a role"); return; }
    try {
      setIsLoading(true);
      setMsg("");
      const { error } = await supabase.auth.signUp({
        email, password,
        options: { data: { full_name: name, role } },
      });
      if (error) {
        if (error.message.toLowerCase().includes("already")) setUserExist(true);
        else setMsg("❌ " + error.message);
        setIsLoading(false);
        return;
      }
      setMsg("✅ Account created successfully!");
      setTimeout(() => {
        setIsLoading(false);
        if (role === "jobseeker") navigate("/applicant");
        else navigate("/recruiter");
      }, 1500);
    } catch {
      setIsLoading(false);
      setMsg("❌ Something went wrong");
    }
  };

  const handleGoogleSignup = async () => {
    if (!role) { alert("❗ Please select your role before continuing with Google"); return; }
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { data: { role }, redirectTo: "http://localhost:5173/applicant" },
    });
  };

  const steps = [
    { num: 1, label: "Sign up your account" },
    { num: 2, label: "Set up your workspace" },
    { num: 3, label: "Set up your profile" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .signup-root {
          font-family: 'Outfit', sans-serif;
          min-height: 100vh;
          display: flex;
          background: #0f0f10;
          overflow: hidden;
        }

        /* ── LEFT PANEL ── */
        .left-panel {
          display: none;
          width: 42%;
          min-height: 99vh;
          position: relative;
          flex-shrink: 0;
          background: #0f0f10;
          overflow: hidden;
        }
        @media (min-width: 1024px) { .left-panel { display: flex; flex-direction: column; justify-content: flex-end; padding: 48px; } }

        .left-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 40% 20%, #7c3aed 0%, #4c1d95 35%, #1e0a3c 65%, #0f0f10 100%);
          z-index: 0;
        }
        .left-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
          z-index: 1;
          opacity: 0.4;
        }
        .left-content { position: relative; z-index: 2; }

        .brand-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 40px;
        }
        .brand-dot {
          width: 20px; height: 20px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 16px rgba(255,255,255,0.5);
        }
        .brand-name { color: #fff; font-size: 18px; font-weight: 600; letter-spacing: 0.01em; }

        .left-heading {
          color: #fff;
          font-size: clamp(28px, 3vw, 38px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 12px;
        }
        .left-sub {
          color: rgba(255,255,255,0.55);
          font-size: 14px;
          line-height: 1.6;
          max-width: 300px;
          margin-bottom: 40px;
        }

        .steps-list { display: flex; flex-direction: column; gap: 10px; }
        .step-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 18px;
          border-radius: 12px;
          cursor: default;
          transition: background 0.2s;
        }
        .step-item.active { background: #fff; }
        .step-item.inactive { background: rgba(255,255,255,0.08); }
        .step-num {
          width: 28px; height: 28px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700;
          flex-shrink: 0;
        }
        .step-item.active .step-num { background: #0f0f10; color: #fff; }
        .step-item.inactive .step-num { background: rgba(255,255,255,0.15); color: rgba(255,255,255,0.6); }
        .step-label { font-size: 14px; font-weight: 500; }
        .step-item.active .step-label { color: #0f0f10; }
        .step-item.inactive .step-label { color: rgba(255,255,255,0.5); }

        /* ── RIGHT PANEL ── */
        .right-panel {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 24px;
          overflow-y: auto;
        }

        .form-card {
          width: 100%;
          max-width: 460px;
        }

        .form-title {
          font-size: clamp(22px, 4vw, 30px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
          text-align: center;
        }
        .form-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          text-align: center;
          margin-bottom: 28px;
        }

        /* OAuth buttons */
        .oauth-row { display: flex; gap: 12px; margin-bottom: 24px; }
        .oauth-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 16px;
          border-radius: 10px;
          background: #1c1c1f;
          border: 1px solid rgba(255,255,255,0.08);
          color: #fff;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          font-family: 'Outfit', sans-serif;
        }
        .oauth-btn:hover { background: #2a2a2e; border-color: rgba(255,255,255,0.18); }
        .oauth-icon { width: 18px; height: 18px; }

        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          color: rgba(255,255,255,0.25);
          font-size: 12px;
        }
        .divider::before, .divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.08);
        }

        /* Fields */
        .fields-row { display: flex; gap: 12px; }
        .fields-row .field-group { flex: 1; }

        .field-group { margin-bottom: 16px; }
        .field-label {
          display: block;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          margin-bottom: 6px;
        }
        .field-input {
          width: 100%;
          padding: 12px 14px;
          background: #1c1c1f;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          color: #fff;
          font-size: 14px;
          font-family: 'Outfit', sans-serif;
          outline: none;
          transition: border-color 0.2s;
        }
        .field-input::placeholder { color: rgba(255,255,255,0.2); }
        .field-input:focus { border-color: rgba(124,58,237,0.6); }

        .pass-wrap { position: relative; }
        .pass-wrap .field-input { padding-right: 40px; }
        .pass-eye {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: rgba(255,255,255,0.3);
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
        }
        .pass-eye:hover { color: rgba(255,255,255,0.7); }

        .field-hint {
          font-size: 11px;
          color: rgba(255,255,255,0.25);
          margin-top: 5px;
        }

        .field-select {
          width: 100%;
          padding: 12px 14px;
          background: #1c1c1f;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          color: #fff;
          font-size: 14px;
          font-family: 'Outfit', sans-serif;
          outline: none;
          cursor: pointer;
          transition: border-color 0.2s;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
        }
        .field-select:focus { border-color: rgba(124,58,237,0.6); }
        .field-select option { background: #1c1c1f; color: #fff; }

        .submit-btn {
          width: 100%;
          padding: 14px;
          margin-top: 8px;
          background: #fff;
          color: #0f0f10;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.1s;
          letter-spacing: 0.01em;
        }
        .submit-btn:hover { opacity: 0.9; }
        .submit-btn:active { transform: scale(0.99); }

        .login-link {
          text-align: center;
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          margin-top: 18px;
        }
        .login-link a { color: #a78bfa; text-decoration: none; font-weight: 500; }
        .login-link a:hover { color: #c4b5fd; }

        .msg-text {
          text-align: center;
          font-size: 13px;
          font-weight: 500;
          margin-top: 12px;
        }

        /* Modal */
        .modal-overlay {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(12px);
          display: flex; align-items: center; justify-content: center;
          z-index: 50;
          padding: 24px;
        }
        .modal-card {
          background: #1c1c1f;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 36px;
          max-width: 360px;
          width: 100%;
          text-align: center;
        }
        .modal-badge {
          display: inline-block;
          padding: 4px 12px;
          background: rgba(239,68,68,0.15);
          border: 1px solid rgba(239,68,68,0.3);
          border-radius: 20px;
          color: #f87171;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .modal-text { color: rgba(255,255,255,0.6); font-size: 14px; margin-bottom: 24px; line-height: 1.6; }
        .modal-login-btn {
          display: block;
          width: 100%;
          padding: 13px;
          background: #fff;
          color: #0f0f10;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          text-decoration: none;
          margin-bottom: 12px;
          transition: opacity 0.2s;
        }
        .modal-login-btn:hover { opacity: 0.9; }
        .modal-back-btn {
          background: none;
          border: none;
          color: rgba(255,255,255,0.35);
          font-size: 13px;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: color 0.2s;
        }
        .modal-back-btn:hover { color: #fff; }
      `}</style>

      <div className="signup-root">
        {isLoading && <Loader />}

        {/* ── LEFT PANEL ── */}
        <div className="left-panel">
          <div className="left-gradient" />
          <div className="left-noise" />
          <div className="left-content">
            <div className="brand-row">
              <div className="brand-dot" />
              <span className="brand-name">Aipply</span>
            </div>
            <h2 className="left-heading">Get Started<br />with Us</h2>
            <p className="left-sub">Complete these easy steps to register your account.</p>
            <div className="steps-list">
              {steps.map((s) => (
                <div key={s.num} className={`step-item ${s.num === 1 ? "active" : "inactive"}`}>
                  <div className="step-num">{s.num}</div>
                  <span className="step-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="right-panel">
          <div className="form-card">
            <h1 className="form-title">Sign Up Account</h1>
            <p className="form-sub">Enter your personal data to create your account.</p>

            {/* OAuth */}
            <div className="oauth-row">
              <button className="oauth-btn" onClick={handleGoogleSignup} type="button">
                <svg className="oauth-icon" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </button>
              <button className="oauth-btn" type="button">
                <svg className="oauth-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Github
              </button>
            </div>

            <div className="divider">Or</div>

            {/* Form */}
            <form onSubmit={submitingUsers}>
              <div className="fields-row">
                <div className="field-group">
                  <label className="field-label">Full Name</label>
                  <input
                    type="text"
                    className="field-input"
                    placeholder="eg. John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="field-group">
                  <label className="field-label">Role</label>
                  <select
                    className="field-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="jobseeker">Job Seeker</option>
                    <option value="recruiter">Recruiter</option>
                  </select>
                </div>
              </div>

              <div className="field-group">
                <label className="field-label">Email</label>
                <input
                  type="email"
                  className="field-input"
                  placeholder="eg. johnfrans@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="field-group">
                <label className="field-label">Password</label>
                <div className="pass-wrap">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="field-input"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button type="button" className="pass-eye" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
                <p className="field-hint">Must be at least 8 characters.</p>
              </div>

              <div className="field-group">
                <label className="field-label">Confirm Password</label>
                <div className="pass-wrap">
                  <input
                    type={showConfirm ? "text" : "password"}
                    className="field-input"
                    placeholder="Re-enter your password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button type="button" className="pass-eye" onClick={() => setShowConfirm(!showConfirm)}>
                    {showConfirm ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    )}
                  </button>
                </div>
              </div>

              <button type="submit" className="submit-btn">Sign Up</button>
            </form>

            <p className="login-link">
              Already have an account? <a href="/login">Log in</a>
            </p>

            {msg && (
              <p className="msg-text" style={{ color: msg.includes("✅") ? "#4ade80" : "#f87171" }}>
                {msg}
              </p>
            )}
          </div>
        </div>

        {/* ── USER EXISTS MODAL ── */}
        {userExist && (
          <div className="modal-overlay">
            <div className="modal-card">
              <div className="modal-badge">User Already Exists</div>
              <p className="modal-text">This email is already registered. Would you like to log in instead?</p>
              <a href="/login" className="modal-login-btn">Login Now</a>
              <button className="modal-back-btn" onClick={() => setUserExist(false)}>Go Back</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};