import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/Loader";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [confirmpassword, checkpassword] = useState("");
  const [msg, setMsg] = useState("");
  const [userExist, setUserExist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submitingUsers = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("❗ Passwords do not match");
      return;
    }

    try {
      setIsLoading(true);
      const result = await axios.post("http://localhost:3011/api/users/signup", {
        fullname: name,
        email,
        password,
        role,
      });

      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data.user));
      setMsg("✅ Account created successfully");
      setUserExist(false);

      setTimeout(() => {
        setIsLoading(false);
        if (role === "jobseeker") navigate("/applicant");
        else navigate("/recruiter");
      }, 2000);

    } catch (err) {
      setIsLoading(false);
      if (err.response && err.response.status === 409) {
        setUserExist(true);
      } else {
        setMsg("❌ Something went wrong");
      }
    }
  };

  return (
    <div className="h-screen w-full bg-[#111111] flex overflow-hidden">
      {isLoading && <Loader />}
      
      {/* LEFT SIDE: Full Height Minimalist Image */}
      <div className="hidden lg:block w-1/2 h-full relative">
        <img 
          src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop" 
          alt="AI Background"
          className="w-full h-full object-cover brightness-50 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]"></div>
      </div>

      {/* RIGHT SIDE: Full Height Form Section */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-6 sm:px-16 md:px-24 lg:px-32 bg-[#111111]">
        
        <div className="w-full max-w-md mx-auto">

          <header className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Sign Up</h1>
            <span className="text-[14px] text-gray-500">
              Create your account to access the Job Portal Dashboard
            </span>
          </header>

          <form onSubmit={submitingUsers} className="space-y-5">
            <div className="space-y-1">
              <label className="text-[12px] uppercase tracking-widest font-bold text-gray-500">Full Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-white transition-all"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[12px] uppercase tracking-widest font-bold text-gray-400">Email</label>
              <input
                type="email"
                placeholder="youremail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-white transition-all"
                required
              />
            </div>

            <div className="flex flex-row gap-6">
              <div className="space-y-1">
                <label className="text-[12px] uppercase tracking-widest font-bold text-gray-400">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white focus:outline-none focus:border-white transition-all"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[12px] uppercase tracking-widest font-bold text-gray-400">Confirm</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={confirmpassword}
                  onChange={(e) => checkpassword(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white focus:outline-none focus:border-white transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[12px] uppercase tracking-widest font-bold text-gray-400">Who Are You?</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-[#1a1a1a] border-none rounded-none py-4 px-4 text-sm text-gray-300 focus:ring-1 focus:ring-white outline-none cursor-pointer appearance-none"
                required
              >
                <option value="">Select Role</option>
                <option value="jobseeker">I am a jobseeker</option>
                <option value="recruiter">I am a recruiter</option>
              </select>
            </div>

            <button 
              type="submit"
              className="w-full mt-6 bg-transparent border border-white/30 text-white text-xs font-bold py-4 hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest"
            >
              Create Account
            </button>

            <p className="text-center text-xs text-gray-500 pt-4">
              Already have an account? <a href="/login" className=" text-blue-800 hover:text-blue-900">Log in</a>
            </p>

            {msg && (
              <p className="text-center text-xs font-medium pt-2" style={{ color: msg.includes('✅') ? '#4ade80' : '#f87171' }}>
                {msg}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* User Exist Popup */}
      {userExist && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50">
          <div className="text-center p-8 border border-white/10 bg-[#111111] max-w-sm">
            <p className="text-white text-sm mb-6 leading-relaxed">
              <span className="text-red-500 font-bold block mb-2 tracking-widest text-lg uppercase">User Already Exists</span>
              This email is already registered. Would you like to log in instead?
            </p>
            <div className="flex flex-col gap-4">
              <a href="/login" className="bg-white text-black text-xs font-bold py-4 uppercase tracking-widest">Login Now</a>
              <button onClick={() => setUserExist(false)} className="text-gray-500 text-xs uppercase tracking-widest hover:text-white">Go Back</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};