import React, { useEffect, useState } from "react";
import { Search, Plus, MapPin, Briefcase, Clock, ExternalLink, X, Loader2 } from "lucide-react";
import axios from "axios";




const Jobs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New Loading State
  // const api = axios.create({baseURL: 'http://localhost:3011/applicant/api/jobs'});

   const [jobsData, setjobsData] = useState([]); 
   useEffect(()=>{

    const fetchJobs = async()=>{
      try{
        const res = await axios.get("http://localhost:3011/applicant/jobs");
        setjobsData(Array.isArray(res.data) ? res.data : []);
      }catch(err){
        console.log("fetch failed", err); 
      }
    }
    fetchJobs();

   },[])

  const [JobPostingData, setJobPostingData] = useState({
    role: "",
    company: "",
    companyEmail: "",
    location: "",
    experience: "",
    type: "Remote",
    skills: "",
    description: "",
    logo: ""
  });

  const handleInputChange = (e) => {
  const { name, value } = e.target;

  setJobPostingData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsModalOpen(false);
  setIsLoading(true);

  try {
    const res = await axios.post(
      "http://localhost:3011/applicant/jobs",
      JobPostingData
    );

    // ✅ INSTANT UI UPDATE
    setjobsData((prev) => [res.data, ...prev]);

    // reset form
    setJobPostingData({
      role: "",
      company: "",
      companyEmail: "",
      location: "",
      experience: "",
      type: "Remote",
      skills: "",
      description: "",
      logo: "",
    });

  } catch (err) {
    console.error("Post failed", err);
  } finally {
    setTimeout(() => {
      setIsLoading(false); // Hide Loader after 3 seconds
    }, 3000);
  }
};


  return (
    <>
      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-row gap-4 justify-between items-center px-4">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-90 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-indigo-400 transition-colors" size={18} />
          <input
            type="text"
            placeholder="Search role or company..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#141415] border border-white/5 rounded-2xl py-3 pl-12 pr-4 text-sm outline-none focus:border-indigo-500/50 transition-all placeholder:text-zinc-600 text-white"
          />
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full md:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-indigo-500/20 text-white"
        >
          <Plus size={18} />
          ADD JOB
        </button>
      </div>

      {/* CONDITIONAL RENDERING: LOADER OR JOBS GRID */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center min-h-[400px] w-full gap-4">
          <Loader2 size={40} className="animate-spin text-green-400" />
          <p className="text-zinc-500 font-medium animate-pulse tracking-widest text-xs uppercase">adding...</p>
        </div>
      ) 
      : jobsData.length === 0 ? (
  <div className="flex flex-row items-center justify-center min-h-[400px] gap-3 text-center">
    <Briefcase size={40} className="text-zinc-600" />
    <span className="text-zinc-700 text-2xl">
      {/* Be the first one to add a job posting */}
      Empty. Post something.
    </span>
  </div>
) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {jobsData.map((job) => (
            <div key={job.id} className="group relative bg-[#141415] border border-white/5 rounded-3xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-300">
               <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none" />
               <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl border border-white/10 p-2.5 flex items-center justify-center bg-zinc-800/50 shadow-inner">
                        <img src={job.logo} alt="logo" className="max-w-full h-auto grayscale group-hover:grayscale-0 transition-all" />
                      </div>
                      <div>
                        <h2 className="text-base font-bold text-white leading-tight mb-1">{job.role}</h2>
                        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{job.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="px-2.5 py-1 bg-indigo-500/10 text-zinc-300 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/5">{job.experience}</span>
                    <span className="px-2.5 py-1 bg-zinc-800/80 text-zinc-300 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-white/5">{job.location}</span>
                    <span className="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-widest rounded-lg border border-indigo-500/20">{job.type}</span>
                  </div>
                  <span className="text-[12px] text-zinc-400 line-clamp-2 mb-8">{job.description}</span>
               </div>
               <button className="relative z-10 w-full py-3.5 bg-transparent border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:bg-white hover:text-black hover:border-white transition-all duration-300 active:scale-[0.98]">Apply Now</button>
            </div>
          ))}
        </div>
      )}




      {/* POPUP MODAL (Remains unchanged except for form submission) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#141415] border border-white/10 w-full max-w-2xl rounded-3xl p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <div 
              onClick={() => setIsModalOpen(false)}
              className="absolute right-6 top-6 text-zinc-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </div>

            <h2 className="text-2xl font-bold text-white mb-6">Create Job Posting</h2>
            
           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="flex flex-col gap-2">
    <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Role</label>
    <input
      name="role"
      required
      onChange={handleInputChange}
      value={JobPostingData.role}
      className="bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-indigo-500"
      placeholder="e.g. Full Stack Developer"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Company Name</label>
    <input
      name="company"
      required
      onChange={handleInputChange}
      value={JobPostingData.company}
      className="bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-indigo-500"
      placeholder="e.g. Geekster"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Company Email</label>
    <input
      name="companyEmail"
      type="email"
      onChange={handleInputChange}
      value={JobPostingData.companyEmail}
      className="bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-indigo-500"
      placeholder="hr@company.com"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Location</label>
    <input
      name="location"
      required
      onChange={handleInputChange}
      value={JobPostingData.location}
      className="bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-indigo-500"
      placeholder="e.g. Mumbai"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Experience</label>
    <input
      name="experience"
      onChange={handleInputChange}
      value={JobPostingData.experience}
      className="bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-indigo-500"
      placeholder="e.g. 0-1 years"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Type</label>
    <select
      name="type"
      onChange={handleInputChange}
      value={JobPostingData.type}
      className="bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-indigo-500"
    >
      <option value="Remote">Remote</option>
      <option value="On-site">On-site</option>
      <option value="Hybrid">Hybrid</option>
    </select>
  </div>

  <div className="flex flex-col gap-2 md:col-span-2">
    <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">
      Skills (Comma separated)
    </label>
    <input
      name="skills"
      onChange={handleInputChange}
      value={JobPostingData.skills}
      className="bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-indigo-500"
      placeholder="React, Node, MongoDB"
    />
  </div>

  <div className="flex flex-col gap-2 md:col-span-2">
    <label className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Description</label>
    <textarea
      name="description"
      rows={3}
      onChange={handleInputChange}
      value={JobPostingData.description}
      className="bg-white/5 border border-white/10 rounded-xl p-3 text-white outline-none focus:border-indigo-500 resize-none"
      placeholder="Job details..."
    />
  </div>

  <button
    type="submit"
    className="md:col-span-2 mt-4 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl transition-all shadow-lg shadow-indigo-500/20"
  >
    Save
  </button>
</form>
 </div>
        </div>
      )}
    </>
  );
};

export default Jobs;