import React, { useEffect, useState } from "react";
import { Search, Plus, Briefcase, X, Loader2, MapPin, Clock, ExternalLink } from "lucide-react";
import axios from "axios";

const Jobs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [jobsData, setjobsData] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:3011/api/jobs");
        setjobsData(Array.isArray(res.data.data) ? res.data.data : []);
      } catch (err) {
        console.log("fetch failed", err);
      }
    };
    fetchJobs();
  }, []);

  const [JobPostingData, setJobPostingData] = useState({
    role: "", company: "", companyEmail: "", location: "",
    experience: "", type: "Remote", skills: "", description: "", logo: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobPostingData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:3011/api/jobs", JobPostingData);
      setjobsData(prev => [res.data.data, ...prev]);
      setJobPostingData({
        role: "", company: "", companyEmail: "", location: "",
        experience: "", type: "Remote", skills: "", description: "", logo: "",
      });
    } catch (err) {
      console.error("Post failed", err);
    } finally {
      setTimeout(() => setIsLoading(false), 1500);
    }
  };

  // Filter logic for search
  const filteredJobs = jobsData.filter(job => 
    job.role.toLowerCase().includes(searchTerm.toLowerCase()) || 
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // <div className="min-h-screen bg-[#0a0a0b] text-zinc-200 selection:bg-indigo-500/30">
    <>
      {/* Background Decorative Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px] -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-600/10 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto py-12 px-6">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-16">
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" size={18} />
              <input
                placeholder="Search roles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>
            {/* <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-2xl font-bold text-white transition-all shadow-lg shadow-indigo-600/20"
            >
              <Plus size={20} /> <span className="hidden sm:inline">Post Job</span>
            </button> */}
          </div>
        </div>

        {/* LOADING STATE */}
        {isLoading && (
          <div className="flex flex-col items-center min-h-[400px] justify-center gap-4">
            <div className="relative">
                <Loader2 size={48} className="animate-spin text-indigo-500" />
                <div className="absolute inset-0 blur-lg bg-indigo-500/20 animate-pulse"></div>
            </div>
            <span className="text-zinc-400 font-medium tracking-widest uppercase text-xs">Processing Entry</span>
          </div>
        )}

        {/* EMPTY STATE */}
        {!isLoading && filteredJobs.length === 0 && (
          <div className="flex flex-col items-center justify-center min-h-[400px] bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
            <Briefcase size={48} className="text-zinc-700 mb-4" />
            <span className="text-zinc-500 text-xl font-light">No positions found.</span>
          </div>
        )}

        {/* JOBS GRID */}
        {!isLoading && filteredJobs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredJobs.map(job => (
              <div 
                key={job.id} 
                className="group relative bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[32px] p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                    {job.logo ? (
                        <img src={job.logo} alt="logo" className="w-10 h-10 object-contain rounded-lg" />
                    ) : (
                        <Briefcase className="w-10 h-10 text-indigo-400" />
                    )}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium">
                    {job.type}
                  </span>
                </div>

                <div className="mb-6">
                  <h2 className="text-white text-xl font-bold group-hover:text-indigo-400 transition-colors">{job.role}</h2>
                  <p className="text-zinc-400 font-medium">{job.company}</p>
                </div>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-2 text-zinc-500 text-sm">
                    <MapPin size={16} /> {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500 text-sm">
                    experience: {job.experience || "Not specified"}
                  </div>
                </div>

                <button className="w-full py-4 bg-white/5 hover:bg-white text-white hover:text-black font-bold rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-2">
                  Apply Now <ExternalLink size={16} />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* GLASS MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex justify-center items-center p-6 backdrop-blur-xl bg-black/40">
            <div className="bg-[#141415] border border-white/10 p-8 rounded-[40px] max-w-xl w-full relative shadow-2xl">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-white/5 rounded-full text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white">Create Job Listing</h2>
                <p className="text-zinc-500 text-sm">Fill in the details for the new position.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <input name="role" onChange={handleInputChange} value={JobPostingData.role} placeholder="Role Title" className="glass-input" />
                    <input name="company" onChange={handleInputChange} value={JobPostingData.company} placeholder="Company Name" className="glass-input" />
                </div>
                <input name="companyEmail" onChange={handleInputChange} value={JobPostingData.companyEmail} placeholder="Contact Email" className="glass-input" />
                <div className="grid grid-cols-2 gap-4">
                    <input name="location" onChange={handleInputChange} value={JobPostingData.location} placeholder="Location (e.g. NYC)" className="glass-input" />
                    <input name="experience" onChange={handleInputChange} value={JobPostingData.experience} placeholder="Experience" className="glass-input" />
                </div>
                <input name="skills" onChange={handleInputChange} value={JobPostingData.skills} placeholder="Required Skills (comma separated)" className="glass-input" />
                <textarea name="description" onChange={handleInputChange} value={JobPostingData.description} placeholder="Detailed Description" rows="3" className="glass-input resize-none" />

                <button className="w-full bg-indigo-600 hover:bg-indigo-500 py-4 rounded-2xl text-white font-bold transition-all shadow-lg shadow-indigo-600/20 mt-4">
                  Publish Opportunity
                </button>
              </form>
            </div>
          </div>
        )}
      </div>

      {/* Basic Global CSS for inputs - add to your index.css or a style tag */}
      <style>{`
        .glass-input {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 12px 16px;
          color: white;
          width: 100%;
          outline: none;
          transition: all 0.2s;
        }
        .glass-input:focus {
          border-color: rgba(99, 102, 241, 0.5);
          background: rgba(255, 255, 255, 0.05);
        }
      `}</style>
</>
  );
};

export default Jobs;