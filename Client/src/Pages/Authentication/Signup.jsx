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

  const navigate = useNavigate();

  const submitingUsers = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      alert("❗ Passwords do not match");
      return;
    }

    if (!role) {
      alert("❗ Please select a role");
      return;
    }

    try {
      setIsLoading(true);
      setMsg("");

      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
            role: role,
          },
        },
      });

      if (error) {
        if (error.message.toLowerCase().includes("already")) {
          setUserExist(true);
        } else {
          setMsg("❌ " + error.message);
        }
        setIsLoading(false);
        return;
      }

      setMsg("✅ Account created successfully!");

      setTimeout(() => {
        setIsLoading(false);
        if (role === "jobseeker") navigate("/applicant");
        else navigate("/recruiter");
      }, 1500);

    // eslint-disable-next-line no-unused-vars
    } catch(err) {
      setIsLoading(false);
      setMsg("❌ Something went wrong");
    }
  };

  const handleGoogleSignup = async () => {
    if (!role) {
      alert("❗ Please select your role before continuing with Google");
      return;
    }

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        data: {
          role: role,
        },
        redirectTo: "http://localhost:5173/applicant",
      },
    });
  };

  return (
    <div className="h-screen w-full bg-[#111111] flex overflow-hidden">
      {isLoading && <Loader />}

      {/* LEFT SIDE IMAGE */}
      <div className="hidden lg:block w-1/2 h-full relative">
        <img
          src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop"
          alt="AI Background"
          className="w-full h-full object-cover brightness-50 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111]"></div>
      </div>

      {/* RIGHT SIDE FORM */}
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
              <label className="text-[12px] uppercase tracking-widest font-bold text-gray-500">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white focus:outline-none focus:border-white transition-all"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[12px] uppercase tracking-widest font-bold text-gray-400">
                Email
              </label>
              <input
                type="email"
                placeholder="youremail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white focus:outline-none focus:border-white transition-all"
                required
              />
            </div>

            <div className="flex flex-row gap-6">
              <div className="space-y-1 w-1/2">
                <label className="text-[12px] uppercase tracking-widest font-bold text-gray-400">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white focus:outline-none focus:border-white transition-all"
                  required
                />
              </div>

              <div className="space-y-1 w-1/2">
                <label className="text-[12px] uppercase tracking-widest font-bold text-gray-400">
                  Confirm
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-sm text-white focus:outline-none focus:border-white transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[12px] uppercase tracking-widest font-bold text-gray-400">
                Who Are You?
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-[#1a1a1a] py-4 px-4 text-sm text-gray-300 outline-none"
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
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="px-3 text-gray-500 text-xs">OR</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Google Signup */}
          <button
            onClick={handleGoogleSignup}
            className="w-full bg-white text-black text-xs font-bold py-4 rounded-full uppercase tracking-widest hover:bg-gray-200 transition-all duration-300"
          >
            Continue with Google
          </button>

          <p className="text-center text-xs text-gray-500 pt-4">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:text-blue-400">
              Log in
            </a>
          </p>

          {msg && (
            <p
              className="text-center text-xs font-medium pt-2"
              style={{ color: msg.includes("✅") ? "#4ade80" : "#f87171" }}
            >
              {msg}
            </p>
          )}
        </div>
      </div>

      {/* USER EXISTS POPUP */}
      {userExist && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50">
          <div className="text-center p-8 border border-white/10 bg-[#111111] max-w-sm">
            <p className="text-white text-sm mb-6">
              <span className="text-red-500 font-bold block mb-2 uppercase">
                User Already Exists
              </span>
              This email is already registered. Would you like to log in instead?
            </p>
            <div className="flex flex-col gap-4">
              <a href="/login" className="bg-white text-black text-xs font-bold py-4 uppercase">
                Login Now
              </a>
              <button
                onClick={() => setUserExist(false)}
                className="text-gray-500 text-xs uppercase hover:text-white"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};