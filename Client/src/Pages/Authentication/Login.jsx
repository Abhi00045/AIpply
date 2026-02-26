import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMsg("❌ " + error.message);
      return;
    }

    setMsg("✅ Login successful!");
    navigate("/applicant");
  };
  const handleGoogleLogin = async () => {
  await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
        redirectTo: "http://localhost:5173/applicant",
      },
  });
};

  return (
    <div className="h-screen w-full bg-[#111111] flex items-center justify-center p-0 md:p-6 overflow-hidden">
      <div className="w-full h-full md:h-[90vh] max-w-6xl bg-[#111111] md:rounded-3xl overflow-hidden flex flex-row shadow-2xl border border-white/5">
        
        {/* Left Side Image */}
        <div className="hidden lg:block w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop" 
            alt="AI Visual"
            className="w-full h-full object-cover brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Right Side Form */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-20 relative">
          
          <div className="max-w-sm w-full mx-auto">

            <header className="mb-8">
              <h2 className="text-xl font-bold text-white mb-2">Log in</h2>
              <p className="text-sm text-gray-500">
                or{" "}
                <a
                  className="text-indigo-500 hover:text-indigo-400"
                  href="/signup"
                >
                  create an account
                </a>{" "}
                if you don’t have one yet
              </p>
            </header>

            <form onSubmit={handleLogin} className="space-y-6">

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="mike142@yourmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-indigo-500 transition-all"
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-indigo-500 transition-all"
                  required
                />
              </div>

              <div className="text-right">
                <a
                  href="#"
                  className="text-[11px] text-gray-500 hover:text-white transition-colors"
                >
                  forgot password ?
                </a>
              </div>

              {/* Email Login Button */}
              <button
                type="submit"
                className="w-full mt-4 bg-transparent border border-white/20 text-white text-xs font-bold py-4 rounded-full uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
              >
                Log me in
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="px-3 text-gray-500 text-xs">OR</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            {/* Google Login */}
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-white text-black text-xs font-bold py-4 rounded-full uppercase tracking-widest hover:bg-gray-200 transition-all duration-300"
            >
              Continue with Google
            </button>

            {msg && (
              <p
                className="text-center text-[11px] font-medium pt-4 animate-pulse"
                style={{
                  color: msg.includes("✅") ? "#4ade80" : "#f87171",
                }}
              >
                {msg}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};