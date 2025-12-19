import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Applications = () => {
  const [jobs, setJobs] = useState([
    { id: 1, company: 'Airbnb', position: 'Full Stack Developer', status: 'Applied', date: 'July 22, 2025', salary: '€95,000', actions: ['Prepare Interview'], website: 'airbnb.com', contact: 'Brian Chesky', link: 'Notion Portfolio' },
    { id: 2, company: 'Spotify', position: 'Frontend Developer', status: 'Interviewed', date: 'July 21, 2025', salary: '€130,000', actions: ['Waiting', 'Follow up'], website: 'spotify.com', contact: 'Daniel Ek', link: 'Personal Website' },
    { id: 3, company: 'Apple', position: 'iOS Engineer', status: 'Applied', date: 'July 20, 2025', salary: '€120,000', actions: ['Prepare Interview'], website: 'apple.com', contact: 'Tim Cook', link: 'LinkedIn Profile' },
    { id: 4, company: 'Tesla', position: 'Embedded Systems Eng.', status: 'Applied', date: 'July 18, 2025', salary: '€110,000', actions: ['Prepare Interview'], website: 'tesla.com', contact: 'Elon Musk', link: 'GitHub Repo' },
    { id: 5, company: 'Adobe', position: 'UX Designer', status: 'Offer', date: 'July 16, 2025', salary: '€100,000', actions: ['Decide', 'Send email'], website: 'adobe.com', contact: 'Shantanu Narayen', link: 'Behance Profile', selected: true },
    { id: 6, company: 'Meta', position: 'Software Developer', status: 'Interviewed', date: 'July 15, 2025', salary: '€90,000', actions: ['Waiting', 'Send email'], website: 'meta.com', contact: 'Mark Zuckerberg', link: 'Glassdoor Link' },
    { id: 7, company: 'Amazon', position: 'Backend Engineer', status: 'Offer', date: 'July 10, 2025', salary: '€88,000', actions: ['Decide', 'Follow up'], website: 'amazon.com', contact: 'Jeff Bezos', link: 'Indeed Link' },
    { id: 8, company: 'Netflix', position: 'DevOps Specialist', status: 'Rejected', date: 'July 5, 2025', salary: '€105,000', actions: ['Send email'], website: 'netflix.com', contact: 'Reed Hastings', link: 'Portfolio Site' },
  ]);

  const handleAddPage = () => {
    const newRow = {
      id: Date.now(),
      company: '',
      position: '',
      status: 'Applied',
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      salary: '€0',
      actions: [],
      website: '',
      contact: '',
      link: ''
    };
    setJobs([newRow, ...jobs]);
  };

  const handleEdit = (id, field, value) => {
    setJobs(jobs.map(job => job.id === id ? { ...job, [field]: value } : job));
  };

  return (
    <>
      <div className="flex-1 overflow-auto border border-gray-800 rounded-lg custom-scrollbar transition-all duration-300">
        <table className="w-full text-left border-collapse min-w-[1300px]">
          <thead className="sticky top-0 z-30 bg-[#1e1e1e] border-b border-gray-700">
            <tr className="text-gray-500 text-[11px] uppercase tracking-[0.15em]">
              <th className="py-3 px-4 font-bold border-r border-gray-800 w-60">Company</th>
              <th className="py-3 px-4 font-bold border-r border-gray-800">Position</th>
              <th className="py-3 px-4 font-bold border-r border-gray-800">Status</th>
              <th className="py-3 px-4 font-bold border-r border-gray-800">Application Date</th>
              <th className="py-3 px-4 font-bold border-r border-gray-800">Salary</th>
              <th className="py-3 px-4 font-bold border-r border-gray-800">Next Action</th>
              <th className="py-3 px-4 font-bold">Reference Link</th>
            </tr>
          </thead>
          
          <tbody>
            <AnimatePresence>
              {jobs.map((job, index) => (
                <motion.tr 
                  key={job.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group border-none transition-colors relative"
                >
                  <td className="border-r  border-gray-800 p-0">
                    <div className="flex items-center gap-2 px-4 py-3 font-semibold text-white">
                      <span className="text-gray-600">📄</span>
                      <input 
                        className="bg-transparent w-full border-none rounded px-1 transition-all"
                        value={job.company}
                        onChange={(e) => handleEdit(job.id, 'company', e.target.value)}
                      />
                    </div>
                  </td>
                  
                  <td className="border-r border-gray-800 p-0">
                    <input 
                      className="bg-transparent outline-none w-full px-4 py-3 focus:bg-[#2c2c2c] transition-colors"
                      value={job.position}
                      onChange={(e) => handleEdit(job.id, 'position', e.target.value)}
                    />
                  </td>
                  
                  {/* Status Cell with "Vertical Cursor" selection box */}
                  <td className={`border-r border-gray-800 px-4 py-3 relative ${job.selected ? 'after:absolute after:inset-0 after:border-[1.5px] after:border-blue-500 after:pointer-events-none' : ''}`}>
                    <span className={`px-2 py-0.5 rounded-[4px] text-[11px] font-bold ${getStatusStyles(job.status)}`}>
                      {job.status}
                    </span>
                  </td>
                  
                  <td className="border-r border-gray-800 p-0">
                    <input 
                      className="bg-transparent outline-none w-full px-4 py-3 text-sm text-gray-500"
                      value={job.date}
                      onChange={(e) => handleEdit(job.id, 'date', e.target.value)}
                    />
                  </td>

                  <td className="border-r border-gray-800 p-0 font-mono text-gray-400">
                    <input 
                      className="bg-transparent outline-none w-full px-4 py-3"
                      value={job.salary}
                      onChange={(e) => handleEdit(job.id, 'salary', e.target.value)}
                    />
                  </td>
                  {/* l */}
                  <td className="border-r border-gray-800 px-4 py-3">
                    <div className="flex gap-1.5 flex-wrap">
                      {job.actions.map((act, i) => (
                        <span key={i} className={`px-2 py-0.5 rounded text-[10px] border tracking-tight ${getActionStyles(act)}`}>
                          {act}
                        </span>
                      ))}
                    </div>
                  </td>
                  
                  <td className="p-0">
                    <input 
                      className="bg-transparent outline-none w-full px-4 py-3 text-xs underline decoration-gray-700 underline-offset-4 hover:text-white transition-colors"
                      value={job.link}
                      onChange={(e) => handleEdit(job.id, 'link', e.target.value)}
                    />
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <motion.button 
          whileHover={{ scale: 1.03, backgroundColor: '#2563eb' }}
          whileTap={{ scale: 0.97 }}
          onClick={handleAddPage}
          className="flex items-center gap-2 px-6 py-2.5 bg-blue-700 text-white rounded-lg font-bold shadow-xl transition-all"
        >
          <span className="text-xl">+</span> New page
        </motion.button>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 20px;
          border: 3px solid #191919;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: #4a4a4a;
        }
        .custom-scrollbar::-webkit-scrollbar-corner {
          background: transparent;
        }
      `}</style>
</>
  );
};

const getStatusStyles = (s) => {
  switch (s) {
    case 'Applied': return 'bg-blue-500/10 text-blue-400 border border-blue-500/20';
    case 'Interviewed': return 'bg-amber-500/10 text-amber-500 border border-amber-500/20';
    case 'Offer': return 'bg-purple-500/10 text-purple-400 border border-purple-500/20';
    case 'Rejected': return 'bg-red-500/10 text-red-400 border border-red-500/20';
    default: return 'bg-gray-800 text-gray-400';
  }
};

const getActionStyles = (a) => {
  if (a === 'Prepare Interview') return 'bg-blue-600/20 text-blue-300 border-blue-500/40';
  if (a === 'Waiting' || a === 'Decide') return 'bg-gray-800 text-gray-400 border-gray-600';
  if (a === 'Follow up') return 'bg-emerald-600/20 text-emerald-400 border-emerald-500/40';
  if (a === 'Send email') return 'bg-rose-600/20 text-rose-400 border-rose-500/40';
  return 'bg-gray-800 border-gray-700';
};