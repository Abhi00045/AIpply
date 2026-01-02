import React from "react";
import { Search, Plus, MapPin, Briefcase, Clock, ExternalLink } from "lucide-react";
import { useState } from "react";

const jobs = Array.from({ length: 9 }).map((_, index) => ({
  id: index + 1,
  company: "Geekster",
  logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  role: "Full Stack Developer",
  location: "Mumbai",
  experience: "0–1 years",
  type: "Remote",
  description: "Join our team to build scalable web applications using the MERN stack and modern cloud infrastructure."
}));

const Jobs = () => {

  // const [searchTerm, setSearchTerm] = useState("");
  // const [jobs, setJobs] = useState();

  // // Filter logic
  // const filteredJobs = jobs.filter(
  //   (job) =>
  //     job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //     job.company.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  return (
    <>
    <div className="max-w-7xl mx-auto mb-10 flex flex-row md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-90 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
          <input
            type="text"
            placeholder="Search role or company..."
            // value={searchTerm}
            // onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#141415] border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm outline-none focus:border-indigo-500/50 transition-all placeholder:text-zinc-600"
          />
        </div>

        <button className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-indigo-500/20">
          <Plus size={18} />
          New Application
        </button>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <div
          key={job.id}
          className="group relative bg-[#141415] border border-white/5 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-300"
        >
          {/* Subtle Inner Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />

          <div className="relative z-10">
            {/* Top Section: Logo and Role */}
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl border border-white/10 p-2.5 flex items-center justify-center bg-zinc-800/50 shadow-inner">
                  <img
                    src={job.logo}
                    alt="company logo"
                    className="max-w-full h-auto grayscale group-hover:grayscale-0 transition-all"
                  />
                </div>
                <div>
                  <h2 className="text-base font-bold text-white leading-tight mb-1">
                    {job.role}
                  </h2>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                    {job.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Tag Section: Styled Dark Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="px-2.5 py-1 bg-indigo-500/10 text-zinc-300 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/5">
                {job.experience}
              </span>
              <span className="px-2.5 py-1 bg-zinc-800/80 text-zinc-300 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/5">
                {job.location}
              </span>
              <span className="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-indigo-500/20">
                {job.type}
              </span>
            </div>

            {/* Description */}
            <span className="text-[10xp] text-zinc-400 line-clamp-2 mb-8">
              {job.description}
            </span>
          </div>

          {/* Action Button: Refined Outline Style */}
          <button className="relative z-10 w-full py-3.5 bg-transparent border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-[0.98]">
            Apply Now
          </button>
        </div>
      ))}
    </div>
    </>
  );
};

export default Jobs;