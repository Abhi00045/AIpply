import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSpreadsheet, Trash2, Plus, FilePlus, FileCheck } from 'lucide-react';
import axios from 'axios';

// Get the user from local storage (the login wala part)
const user = JSON.parse(localStorage.getItem('user'));
const userEmail = user?.email;

export const Applications = () => {
  // Setup the API URL
  const api = axios.create({
    baseURL: 'http://localhost:3011/api/list',
  });

  const [jobs, setJobs] = useState([]);

  // This loads your existing data when you open the page
  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await api.get(`/${userEmail}`);
        setJobs(res.data);
      } catch (err) {
        console.log("Could not load data from backend");
      }
    };
    if (userEmail) loadData();
  }, [userEmail]);

  const statusCycle = ['Applied', 'Interviewed', 'Offer', 'Waitlisted', 'Rejected'];

  /**
   * HANDLE ADD FUNCTION (Backend Integrated)
   * This sends the new row to your MongoDB right away.
   */
  const handleAdd = async () => {
    try {
      // 1. Create the data object to send
      const newJobData = {
        userEmail: userEmail, // Ties this row to the logged-in user
        company: '',
        position: '',
        status: 'Applied',
        salary: '',
        date: new Date().toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric' 
        }),
      };

      // 2. Post it to your backend
      const response = await api.post("/", newJobData);

      // 3. Add the response (which has the MongoDB _id) to our list
      // We put it at the start [new_item, ...old_items]
      setJobs((prevJobs) => [response.data, ...prevJobs]);

    } catch (err) {
      console.error("Backend Error: Could not add row", err);
      alert("Failed to add row. Is your server running?");
    }
  };

  // Simple local edit (you can add api.put here later)
  const handleEdit = (id, field, value) => {
    setJobs(prev => prev.map(j => (j._id === id || j.id === id) ? { ...j, [field]: value } : j));
  };
  
  // Simple local delete (you can add api.delete here later)
  const handleDelete = (id) => {
    setJobs(prev => prev.filter(j => (j._id !== id && j.id !== id)));
  };

  const cycleStatus = (id, current) => {
    const next = statusCycle[(statusCycle.indexOf(current) + 1) % statusCycle.length];
    handleEdit(id, 'status', next);
  };

  return (
    <div className="p-4 bg-[#111] min-h-screen text-gray-300">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
              <th className="pb-4 px-4 font-semibold w-64">Company</th>
              <th className="pb-4 px-4 font-semibold">Position</th>
              <th className="pb-4 px-4 font-semibold w-40">Status</th>
              <th className="pb-4 px-4 font-semibold w-48">Applied Date</th>
              <th className="pb-4 px-4 font-semibold">Salary</th>
              <th className="pb-4 px-4 font-semibold">Resume</th>
              <th className="pb-4 px-4 font-semibold"></th>
            </tr>
          </thead>
          
         <tbody className="border-t border-gray-800">
  <AnimatePresence>
    {jobs.map((job) => (
      <motion.tr 
        key={job._id || job.id} 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, x: -20 }}
        className="group hover:bg-white/[0.02] transition-all duration-200"
      >
        {/* COMPANY FIELD */}
        <td className="px-4 py-4 min-w-[200px]">
          <div className="flex items-center gap-3">
            <FileSpreadsheet size={18} className="text-gray-600" />
            <input 
              value={job.company} 
              placeholder="Untitled Company"
              onChange={e => handleEdit(job._id || job.id, 'company', e.target.value)}
              // Minimal style: No borders, just a bottom line that glows on focus
              className="bg-transparent w-full border-b border-gray-800/50 focus:border-blue-500/50 outline-none p-0 pb-1 text-sm text-white placeholder-gray-700 transition-colors"
            />
          </div>
        </td>

        {/* POSITION FIELD */}
        <td className="px-4">
          <input 
            value={job.position} 
            placeholder="Add role..."
            onChange={e => handleEdit(job._id || job.id, 'position', e.target.value)}
            className="bg-transparent w-full border-b border-gray-800/50 focus:border-blue-500/50 outline-none p-0 pb-1 text-sm text-gray-400 placeholder-gray-700 transition-colors"
          />
        </td>

        {/* STATUS BUTTON */}
        <td className="px-4">
          <button 
            onClick={() => cycleStatus(job._id || job.id, job.status)}
            className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all border ${getStatusStyles(job.status)} hover:brightness-125 active:scale-95`}
          >
            {job.status}
          </button>
        </td>

        {/* DATE DISPLAY */}
        <td className="px-4 text-xs text-gray-500 font-medium whitespace-nowrap">
          {job.date}
        </td>

        {/* SALARY FIELD */}
        <td className="px-4">
          <input 
            value={job.salary} 
            placeholder="€0,000"
            onChange={e => handleEdit(job._id || job.id, 'salary', e.target.value)}
            className="bg-transparent w-full border-b border-gray-800/50 focus:border-blue-500/50 outline-none p-0 pb-1 text-sm font-mono text-gray-400 placeholder-gray-700 transition-colors"
          />
        </td>

        {/* FILE UPLOAD ICON */}
        <td className="px-4">
          <label className="cursor-pointer group/file inline-block">
            <input 
              type="file" 
              className="hidden" 
              onChange={e => handleEdit(job._id || job.id, 'resume', e.target.files[0]?.name)} 
            />
            <div className="p-1.5 rounded-md hover:bg-white/5 transition-colors">
              {job.resume ? (
                <FileCheck className="text-emerald-500" size={18} />
              ) : (
                <FilePlus className="text-gray-600 group-hover/file:text-gray-400" size={18} />
              )}
            </div>
          </label>
        </td>

        {/* DELETE TRASH ICON */}
        <td className="px-4">
          <button 
            onClick={() => handleDelete(job._id || job.id)} 
            className="opacity-0 group-hover:opacity-100 p-2 text-gray-600 hover:text-red-500 hover:bg-red-500/10 rounded-md transition-all"
          >
            <Trash2 size={16} />
          </button>
        </td>
      </motion.tr>
    ))}
  </AnimatePresence>
</tbody>
        </table>
      </div>

      <button
        onClick={handleAdd}
        className="mt-4 flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 border border-gray-800 rounded transition-all"
      >
        <Plus size={14} /> New Row
      </button>
    </div>
  );
};

const getStatusStyles = (s) => {
  const styles = {
    Applied: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    Interviewed: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
    Offer: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
    Waitlisted: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
    Rejected: 'bg-red-500/10 text-red-500 border-red-500/20',
  };
  return styles[s] || 'bg-gray-800 text-gray-400';
};