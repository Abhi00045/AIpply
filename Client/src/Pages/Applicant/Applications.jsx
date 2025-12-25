import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileSpreadsheet, Trash2, Plus } from 'lucide-react';
import { FilePlusCorner } from 'lucide-react';
import { FileCheckCorner } from 'lucide-react';

export const Applications = () => {
  const [jobs, setJobs] = useState([{ 
    id: Date.now(), company: '', position: '', status: 'Applied', 
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), 
    salary: '', resume: null 
  }]);

  const statusCycle = ['Applied', 'Interviewed', 'Offer', 'Waitlisted', 'Rejected'];

  const handleAdd = () => setJobs([{ 
    id: Date.now(), company: '', position: '', status: 'Applied', 
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }), 
    salary: '', resume: null 
  }, ...jobs]);

  const handleEdit = (id, field, value) => setJobs(prev => prev.map(j => j.id === id ? { ...j, [field]: value } : j));
  
  const handleDelete = (id) => setJobs(prev => prev.filter(j => j.id !== id));

  const cycleStatus = (id, current) => {
    const next = statusCycle[(statusCycle.indexOf(current) + 1) % statusCycle.length];
    handleEdit(id, 'status', next);
  };

  return (
    <div className="p-4 bg-[#111] min-h-screen text-gray-300">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <TableHeader />
          <tbody className="border-t border-gray-800">
            <AnimatePresence>
              {jobs.map(job => (
                <JobRow 
                  key={job.id} 
                  job={job} 
                  onEdit={handleEdit} 
                  onDelete={handleDelete} 
                  onCycle={cycleStatus} 
                />
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
      <AddButton onClick={handleAdd} />
    </div>
  );
};

/* --- Sub-Components to Minimize Section Bloat --- */

const TableHeader = () => (
  <thead>
    <tr className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">
      {['Company', 'Position', 'Status', 'Applied Date', 'Salary', 'Resume', ''].map(h => (
        <th key={h} className="pb-4 px-4 font-semibold">{h}</th>
      ))}
    </tr>
  </thead>
);

const JobRow = ({ job, onEdit, onDelete, onCycle }) => (
  <motion.tr 
    initial={{ opacity: 0, x: -10 }} 
    animate={{ opacity: 1, x: 0 }} 
    exit={{ opacity: 0, scale: 0.95 }}
    className="group border-b border-gray-800/40 hover:bg-white/[0.02] transition-colors"
  >
    <td className="px-4 py-3 min-w-[200px]">
      <div className="flex items-center gap-3">
        <FileSpreadsheet size={18} className="text-gray-600" />
        <input 
          value={job.company} placeholder="Company"
          onChange={e => onEdit(job.id, 'company', e.target.value)}
          className="bg-transparent outline-none text-sm w-full placeholder-gray-600"
        />
      </div>
    </td>
    <td>
      <input 
        value={job.position} placeholder="Role"
        onChange={e => onEdit(job.id, 'position', e.target.value)}
        className="bg-transparent outline-none text-sm px-4 text-gray-400 w-full"
      />
    </td>
    <td className="px-4">
      <button 
        onClick={() => onCycle(job.id, job.status)}
        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all border ${getStatusStyles(job.status)}`}
      >
        {job.status}
      </button>
    </td>
    <td className="px-4 text-xs text-gray-500 font-medium">{job.date}</td>
    <td>
      <input 
        value={job.salary} placeholder="€0,000"
        onChange={e => onEdit(job.id, 'salary', e.target.value)}
        className="bg-transparent outline-none text-sm px-4 font-mono text-gray-400 w-full"
      />
    </td>
    <td className="px-4">
      <label className="cursor-pointer group/file text-[11px] text-gray-600 hover:text-gray-300 transition-colors">
        <input type="file" className="hidden" onChange={e => onEdit(job.id, 'resume', e.target.files[0]?.name)} />
        {job.resume ? <span className="text-emerald-500 underline decoration-emerald-900 underline-offset-4">{<FileCheckCorner />}</span> : <FilePlusCorner />}
      </label>
    </td>
    <td className="px-4">
      <button 
        onClick={() => onDelete(job.id)}
        className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-red-500/10 hover:text-red-500 rounded transition-all"
      >
        <Trash2 size={14} />
      </button>
    </td>
  </motion.tr>
);

const AddButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="mt-4 flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white hover:bg-white/5 border border-gray-800 rounded transition-all"
  >
    <Plus size={14} /> New Row
  </button>
);

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