// import React, { useState } from "react";
// import { supabase } from "../lib/supabase";
// import { useNavigate } from "react-router-dom";

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setMsg("");

//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       setMsg("❌ " + error.message);
//       return;
//     }

//     setMsg("✅ Login successful!");
//     navigate("/applicant");
//   };
//   const handleGoogleLogin = async () => {
//   await supabase.auth.signInWithOAuth({
//     provider: "google",
//     options: {
//         redirectTo: "http://localhost:5173/applicant",
//       },
//   });
// };

//   return (
//     <div className="h-screen w-full bg-[#111111] flex items-center justify-center p-0 md:p-6 overflow-hidden">
//       <div className="w-full h-full md:h-[90vh] max-w-6xl bg-[#111111] md:rounded-3xl overflow-hidden flex flex-row shadow-2xl border border-white/5">
        
//         {/* Left Side Image */}
//         <div className="hidden lg:block w-1/2 relative">
//           <img 
//             src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop" 
//             alt="AI Visual"
//             className="w-full h-full object-cover brightness-50 contrast-125"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60"></div>
//         </div>

//         {/* Right Side Form */}
//         <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-20 relative">
          
//           <div className="max-w-sm w-full mx-auto">

//             <header className="mb-8">
//               <h2 className="text-xl font-bold text-white mb-2">Log in</h2>
//               <p className="text-sm text-gray-500">
//                 or{" "}
//                 <a
//                   className="text-indigo-500 hover:text-indigo-400"
//                   href="/signup"
//                 >
//                   create an account
//                 </a>{" "}
//                 if you don’t have one yet
//               </p>
//             </header>

//             <form onSubmit={handleLogin} className="space-y-6">

//               {/* Email */}
//               <div className="space-y-2">
//                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="mike142@yourmail.com"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-indigo-500 transition-all"
//                   required
//                 />
//               </div>

//               {/* Password */}
//               <div className="space-y-2">
//                 <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-indigo-500 transition-all"
//                   required
//                 />
//               </div>

//               <div className="text-right">
//                 <a
//                   href="#"
//                   className="text-[11px] text-gray-500 hover:text-white transition-colors"
//                 >
//                   forgot password ?
//                 </a>
//               </div>

//               {/* Email Login Button */}
//               <button
//                 type="submit"
//                 className="w-full mt-4 bg-transparent border border-white/20 text-white text-xs font-bold py-4 rounded-full uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
//               >
//                 Log me in
//               </button>
//             </form>

//             {/* Divider */}
//             <div className="flex items-center my-6">
//               <div className="flex-1 h-px bg-white/10"></div>
//               <span className="px-3 text-gray-500 text-xs">OR</span>
//               <div className="flex-1 h-px bg-white/10"></div>
//             </div>

//             {/* Google Login */}
//             <button
//               onClick={handleGoogleLogin}
//               className="w-full bg-white text-black text-xs font-bold py-4 rounded-full uppercase tracking-widest hover:bg-gray-200 transition-all duration-300"
//             >
//               Continue with Google
//             </button>

//             {msg && (
//               <p
//                 className="text-center text-[11px] font-medium pt-4 animate-pulse"
//                 style={{
//                   color: msg.includes("✅") ? "#4ade80" : "#f87171",
//                 }}
//               >
//                 {msg}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) { setMsg("❌ " + error.message); return; }
    setMsg("✅ Login successful!");
    navigate("/applicant");
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: "http://localhost:5173/applicant" },
    });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .login-root {
          font-family: 'Outfit', sans-serif;
          min-height: 100vh;
          display: flex;
          background: #0f0f10;
          overflow: hidden;
        }

        /* ── LEFT PANEL ── */
        .login-left {
          display: none;
          width: 42%;
          min-height: 100vh;
          position: relative;
          flex-shrink: 0;
          overflow: hidden;
        }
        @media (min-width: 1024px) {
          .login-left {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 48px;
          }
        }

        .login-gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 40% 20%, #7c3aed 0%, #4c1d95 35%, #1e0a3c 65%, #0f0f10 100%);
          z-index: 0;
        }
        .login-noise {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E");
          z-index: 1;
          opacity: 0.4;
        }
        .login-left-content { position: relative; z-index: 2; }

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
        .brand-name { color: #fff; font-size: 18px; font-weight: 600; }

        .left-heading {
          color: #fff;
          font-size: clamp(28px, 3vw, 38px);
          font-weight: 700;
          line-height: 1.2;
          margin-bottom: 12px;
        }
        .left-sub {
          color: rgba(255,255,255,0.45);
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
        }
        .step-item.active { background: #fff; }
        .step-item.inactive { background: rgba(255,255,255,0.08); }
        .step-num {
          width: 28px; height: 28px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700; flex-shrink: 0;
        }
        .step-item.active .step-num { background: #0f0f10; color: #fff; }
        .step-item.inactive .step-num { background: rgba(255,255,255,0.15); color: rgba(255,255,255,0.5); }
        .step-label { font-size: 14px; font-weight: 500; }
        .step-item.active .step-label { color: #0f0f10; }
        .step-item.inactive .step-label { color: rgba(255,255,255,0.4); }

        /* ── RIGHT PANEL ── */
        .login-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 32px 24px;
          overflow-y: auto;
        }

        .login-card {
          width: 100%;
          max-width: 420px;
        }

        .login-title {
          font-size: clamp(22px, 4vw, 30px);
          font-weight: 700;
          color: #fff;
          margin-bottom: 6px;
          text-align: center;
        }
        .login-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          text-align: center;
          margin-bottom: 28px;
        }
        .login-sub a { color: #a78bfa; text-decoration: none; font-weight: 500; }
        .login-sub a:hover { color: #c4b5fd; }

        /* OAuth */
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
          right: 12px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none;
          color: rgba(255,255,255,0.3);
          cursor: pointer; padding: 0;
          display: flex; align-items: center;
        }
        .pass-eye:hover { color: rgba(255,255,255,0.7); }

        .forgot-row {
          text-align: right;
          margin-bottom: 20px;
          margin-top: -8px;
        }
        .forgot-link {
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s;
        }
        .forgot-link:hover { color: #fff; }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: #fff;
          color: #0f0f10;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          font-family: 'Outfit', sans-serif;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.1s;
        }
        .submit-btn:hover { opacity: 0.9; }
        .submit-btn:active { transform: scale(0.99); }

        .signup-link {
          text-align: center;
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          margin-top: 18px;
        }
        .signup-link a { color: #a78bfa; text-decoration: none; font-weight: 500; }
        .signup-link a:hover { color: #c4b5fd; }

        .msg-text {
          text-align: center;
          font-size: 13px;
          font-weight: 500;
          margin-top: 12px;
        }
      `}</style>

      <div className="login-root">

        {/* ── LEFT PANEL ── */}
        <div className="login-left">
          <div className="login-gradient" />
          <div className="login-noise" />
          <div className="login-left-content">
            <div className="brand-row">
              <div className="brand-dot" />
              <span className="brand-name">Aipply</span>
            </div>
            <h2 className="left-heading">Welcome<br />Back</h2>
            <p className="left-sub">Log in to continue where you left off and access your dashboard.</p>
            <div className="steps-list">
              {[
                { num: 1, label: "Sign up your account", active: false },
                { num: 2, label: "Log in to your account", active: true },
                { num: 3, label: "Set up your profile", active: false },
              ].map((s) => (
                <div key={s.num} className={`step-item ${s.active ? "active" : "inactive"}`}>
                  <div className="step-num">{s.num}</div>
                  <span className="step-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT PANEL ── */}
        <div className="login-right">
          <div className="login-card">
            <h1 className="login-title">Login Account</h1>
            <p className="login-sub">
              Don't have an account? <a href="/signup">Sign up</a>
            </p>

            {/* OAuth */}
            <div className="oauth-row">
              <button className="oauth-btn" onClick={handleGoogleLogin} type="button">
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
            <form onSubmit={handleLogin}>
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
              </div>

              <div className="forgot-row">
                <a href="#" className="forgot-link">Forgot password?</a>
              </div>

              <button type="submit" className="submit-btn">Log In</button>
            </form>

            <p className="signup-link">
              Don't have an account? <a href="/signup">Sign up</a>
            </p>

            {msg && (
              <p className="msg-text" style={{ color: msg.includes("✅") ? "#4ade80" : "#f87171" }}>
                {msg}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};