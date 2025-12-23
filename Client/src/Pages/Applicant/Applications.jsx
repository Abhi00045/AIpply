import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSpreadsheet } from 'lucide-react';

export const Applications = () => {
  const [jobs, setJobs] = useState([
    { 
      id: Date.now(), 
      company: '', 
      position: '', 
      status: 'Applied', 
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), 
      salary: '', 
      resume: null
    }
  ]);

  const statusCycle = ['Applied', 'Interviewed', 'Offer', 'Waitlisted', 'Rejected'];

  const handleAddPage = () => {
    const newRow = {
      id: Date.now(),
      company: '',
      position: '',
      status: 'Applied',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      salary: '',
      resume: null
    };
    setJobs([newRow, ...jobs]);
  };

  // Cycles through status on click instead of a messy dropdown
  const cycleStatus = (id, currentStatus) => {
    const nextIndex = (statusCycle.indexOf(currentStatus) + 1) % statusCycle.length;
    handleEdit(id, 'status', statusCycle[nextIndex]);
  };

  const handleEdit = (id, field, value) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, [field]: value } : job));
  };

  const handleFileUpload = (id, file) => {
    if (file) handleEdit(id, 'resume', file.name);
  };

  return (<>
      <div className="overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-[10px] uppercase tracking-[0.2em] bg-transparent">
              <th className="pb-4 px-4 font-semibold w-64">Company</th>
              <th className="pb-4 px-4 font-semibold">Position</th>
              <th className="pb-4 px-4 font-semibold w-40">Status</th>
              <th className="pb-4 px-4 font-semibold w-48">Applied Date</th>
              <th className="pb-4 px-4 font-semibold">Salary</th>
              <th className="pb-4 px-4 font-semibold">Resume</th>
            </tr>
          </thead>
          
          <tbody className="border-t border-gray-800">
            <AnimatePresence initial={false}>
              {jobs.map((job) => (
                <motion.tr 
                  key={job.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group border-b border-gray-800/40 hover:bg-[#222]/30 transition-all duration-200"
                >
                  {/* Company */}
                  <td className="p-0">
                    <div className="flex items-center gap-3 px-4 py-3">
                      <span className="text-gray-700 text-xs"><FileSpreadsheet /></span>
                      <input 
                        placeholder="Untitiled"
                        className="bg-transparent w-full border-none outline-none p-0 text-white placeholder-gray-500 font-medium text-sm"
                        value={job.company}
                        onChange={(e) => handleEdit(job.id, 'company', e.target.value)}
                      />
                    </div>
                  </td>
                  
                  {/* Position */}
                  <td className="p-0">
                    <input 
                      placeholder="Add role..."
                      className="bg-transparent outline-none border-none w-full px-4 py-3 text-sm text-gray-400 placeholder-gray-500"
                      value={job.position}
                      onChange={(e) => handleEdit(job.id, 'position', e.target.value)}
                    />
                  </td>
                  
                  {/* Status - Cycle on Click */}
                  <td className="px-4 py-3">
                    <div
                      onClick={() => cycleStatus(job.id, job.status)}
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all cursor-pointer select-none active:scale-95 ${getStatusStyles(job.status)}`}
                    >
                      {job.status}
                    </div>
                  </td>

                  {/* Date */}
                  <td className="px-4 py-3 text-xs text-gray-500 font-medium">
                    {job.date}
                  </td>

                  {/* Salary */}
                  <td className="p-0">
                    <input 
                      placeholder="€0,000"
                      className="bg-transparent outline-none border-none w-full px-4 py-3 text-sm font-mono text-gray-400 placeholder-gray-500"
                      value={job.salary}
                      onChange={(e) => handleEdit(job.id, 'salary', e.target.value)}
                    />
                  </td>

                  {/* Resume */}
                  <td className="px-4 py-3">
                    <label className="cursor-pointer group/file">
                      <input type="file" className="hidden" onChange={(e) => handleFileUpload(job.id, e.target.files[0])} />
                      <div className="flex items-center gap-2 text-[11px] text-gray-600 group-hover/file:text-gray-300 transition-colors">
                        {job.resume ? (
                          <span className="text-emerald-500/80 underline decoration-emerald-900 underline-offset-4 truncate max-w-[150px]">
                            {job.resume}
                          </span>
                        ) : (
                          <span>＋ Empty</span>
                        )}
                      </div>
                    </label>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      <div
        onClick={handleAddPage}
        className="mt-2 flex items-center justify-center gap-1 px-1 py-1 text-gray-400 hover:text-gray-400 transition-all text-sm font-medium cursor-pointer border border-gray-600 w-[70px] rounded bg-blue-950"
      >
        <span className="text-lg">+</span> New
      </div>
    </>
  );
};

const getStatusStyles = (s) => {
  switch (s) {
    case 'Applied': return 'bg-blue-500/10 text-blue-500 border border-blue-500/20';
    case 'Interviewed': return 'bg-amber-500/10 text-amber-500 border border-amber-500/20';
    case 'Offer': return 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20';
    case 'Waitlisted': return 'bg-purple-500/10 text-purple-500 border border-purple-500/20';
    case 'Rejected': return 'bg-red-500/10 text-red-500 border border-red-500/20';
    default: return 'bg-gray-800 text-gray-400';
  }
};