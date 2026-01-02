import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSpreadsheet, Trash2, Plus, Loader2, FilePlus, FileCheck } from 'lucide-react';
import axios from 'axios';
import _ from 'lodash';
import './Apply.css'

const user = JSON.parse(localStorage.getItem('user'));
const userEmail = user?.email;

export const Applications = () => {
  const [jobs, setJobs] = useState([]);
  const [savingRows, setSavingRows] = useState(new Set()); 
  const api = axios.create({ baseURL: 'http://localhost:3011/applicant/api/list' });
  const statusCycle = ['Applied', 'Interviewed', 'Offer', 'Waitlisted', 'Rejected'];

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await api.get(`/${userEmail}`);
        setJobs(res.data);
      } catch (err) { console.error("Fetch failed", err); }
    };
    if (userEmail) loadData();
  }, [userEmail]);

  const saveToBackend = useCallback(
    _.debounce(async (id, field, value) => {
      try {
        await api.put(`/${id}`, { [field]: value });
        setSavingRows(prev => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      } catch (err) { 
        console.error("Save failed", err);
        setSavingRows(prev => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      }
    }, 1000), []
  );

  const handleEdit = (id, field, value) => {
    setSavingRows(prev => new Set(prev).add(id));
    setJobs(prev => prev.map(j => (j._id === id || j.id === id) ? { ...j, [field]: value } : j));
    saveToBackend(id, field, value);
  };

  const handleAdd = async () => {
    const newJob = { userEmail, company: '', position: '', status: 'Applied', salary: '', resume: null,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) 
    };
    try {
      const res = await api.post("/", newJob);
      setJobs(prev => [res.data, ...prev]);
    } catch (err) { console.error("Add failed", err); }
  };

  const handleDelete = async (id) => {
    setJobs(prev => prev.filter(j => j._id !== id));
    try { await api.delete(`/${id}`); } catch (err) { console.error("Delete failed", err); }
  };

  return (
    <div className="p-4 bg-[#111] min-h-screen text-gray-300 min-w-[1000px]">
      <div className="overflow-x-auto rounded-xl border border-gray-800">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="text-gray-500 text-[10px] uppercase tracking-[0.2em] bg-[#1a1a1a]">
              <th className="py-4 px-4 font-semibold w-1/4">Company</th>
              <th className="py-4 px-4 font-semibold">Position</th>
              <th className="py-4 px-4 font-semibold w-40 text-center">Status</th>
              <th className="py-4 px-4 font-semibold w-48 text-center">Applied Date</th>
              <th className="py-4 px-4 font-semibold w-40 text-center">Salary</th>
              <th className="py-4 px-4 font-semibold w-24 text-center">Resume</th>
              <th className="py-4 px-4 font-semibold w-16"></th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-gray-800">
            <AnimatePresence>
              {jobs.map((job) => (
                <motion.tr 
                  key={job._id || job.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="group hover:bg-white/[0.02] transition-colors"
                >
                  {/* Company */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        {savingRows.has(job._id || job.id) ? (
                          <Loader2 size={20} className="animate-spin text-green-400" />
                        ) : (
                          <FileSpreadsheet size={20} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
                        )}
                      </div>
                      <input 
                        value={job.company} 
                        placeholder="Company"
                        onChange={e => handleEdit(job._id, 'company', e.target.value)}
                        className="inputChanger"
                      />
                    </div>
                  </td>

                  {/* Position */}
                  <td className="px-4 py-3">
                    <input 
                      value={job.position} 
                      placeholder="Role"
                      onChange={e => handleEdit(job._id, 'position', e.target.value)}
                      className="inputChanger"
                    />
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3 text-center">
                    <div
                      onClick={() => handleEdit(job._id, 'status', statusCycle[(statusCycle.indexOf(job.status) + 1) % statusCycle.length])}
                      className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all border cursor-pointer ${getStatusStyles(job.status)}`}
                    >
                      {job.status}
                    </div>
                  </td>

                  {/* Applied Date */}
                  <td className="px-4 py-3 text-center text-xs text-gray-500 font-medium">
                    {job.date}
                  </td>

                  {/* Salary */}
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-1 font-mono text-sm text-gray-400">
                      <input 
                        value={job.salary} 
                        type="number"
                        placeholder="LPA"
                        onChange={e => handleEdit(job._id, 'salary', e.target.value)}
                        className="inputChanger"
                      />
                    </div>
                  </td>

                  {/* Resume */}
                  <td className="px-4 py-3 text-center">
                    <label className="cursor-pointer group/file inline-block">
                      <input 
                        type="file" 
                        className="hidden" 
                        onChange={e => handleEdit(job._id || job.id, 'resume', e.target.files[0]?.name)} 
                      />
                      <div className="p-1 rounded-md hover:bg-white/5 transition-colors">
                        {job.resume ? (
                          <FileCheck className="text-emerald-500" size={21} />
                        ) : (
                          <FilePlus className="text-gray-600 group-hover/file:text-gray-400" size={21} />
                        )}
                      </div>
                    </label>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3 text-right">
                    <div
                      onClick={() => handleDelete(job._id)} 
                      className="opacity-0 group-hover:opacity-100 p-2 text-gray-600 hover:text-red-500 transition-all"
                    >
                      <Trash2 size={20} />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      <button
        onClick={handleAdd}
        className="mt-6 flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-500/20"
      >
        <Plus size={18} /> New Application
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