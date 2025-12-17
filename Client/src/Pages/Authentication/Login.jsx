import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post("http://localhost:3011/login", {
        email,
        password,
      });
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data.user));
      setMsg('✅ Login successful!');
      navigate('/applicant');
    } catch (error) {
      if (error.response) {
        if (error.response.status === 409) {
          setMsg('❌ Email not found');
        } else if (error.response.status === 401) {
          setMsg('❌ Invalid password');
        } else {
          setMsg('❌ Something went wrong');
        }
      }
    }
  };

  return (
    <div className="h-screen w-full bg-[#0a0a0a] flex items-center justify-center p-0 md:p-6 overflow-hidden">
      {/* Main Container - Exact screen fit */}
      <div className="w-full h-full md:h-[90vh] max-w-6xl bg-[#111111] md:rounded-3xl overflow-hidden flex flex-row shadow-2xl border border-white/5">
        
        {/* Left Side: Plain Visual Image (Minimalist & Modern) */}
        <div className="hidden lg:block w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop" 
            alt="AI Visual"
            className="w-full h-full object-cover brightness-50 contrast-125"
          />
          {/* Decorative Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60"></div>
        </div>

        {/* Right Side: Form Section */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 lg:px-20 relative">
          
          <div className="max-w-sm w-full mx-auto">
            {/* Logo */}
            {/* <div className="mb-10 text-center lg:text-left">
              <span className="text-sm font-bold tracking-[0.3em] text-white uppercase italic">AIpplAI</span>
            </div> */}

            <header className="mb-8">
              <h2 className="text-xl font-bold text-white mb-2">Log in</h2>
              <p className="text-sm text-gray-500">
                or <a className="text-indigo-900 list-none hover:text-indigo-950" href="/signup">create an account</a> if you don’t have one yet
              </p>
            </header>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email</label>
                <input
                  type="email"
                  placeholder="mike142@yourmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-indigo-500 transition-all"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Password</label>
                <input
                  type="password"
                  placeholder="enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-indigo-500 transition-all"
                />
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <a href="#" className="text-[11px] text-gray-500 hover:text-white transition-colors">forgot password ?</a>
              </div>

              {/* Action Button: bg-none with border & hover effect */}
              <button 
                type="submit"
                className="w-full mt-4 bg-transparent border border-white/20 text-white text-xs font-bold py-4 rounded-full uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 active:scale-95"
              >
                Log me in
              </button>

              {/* Error/Success Message */}
              {msg && (
                <p className="text-center text-[11px] font-medium pt-2 animate-pulse" style={{ color: msg.includes('✅') ? '#4ade80' : '#f87171' }}>
                  {msg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};