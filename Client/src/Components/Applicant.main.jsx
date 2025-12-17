import { Profile } from '../Pages/Applicant/Profile';
import Jobs from '../Pages/Applicant/FindJobs'; 
import MockInterviews from '../Pages/Applicant/MockInterviews';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Animation library
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { 
  HiOutlineUserCircle, 
  HiOutlineBriefcase, 
  HiOutlineTerminal, 
  HiOutlineCode, 
  HiOutlineClipboardList,
  HiOutlineLightningBolt 
} from 'react-icons/hi';

export const JobApplicant = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    const userEmail = localStorage.getItem("user");
    if (userEmail) {
      const user = JSON.parse(userEmail);
      setEmail(user.email);
      setName(user.fullName);
    }
  }, []);

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navLinks = [
    { name: 'Profile', key: 'profile', icon: <HiOutlineUserCircle /> },
    { name: 'Jobs', key: 'jobs', icon: <HiOutlineBriefcase /> },
    { name: 'Mock Interviews', key: 'interviews', icon: <HiOutlineTerminal /> },
    { name: 'Hackathons', key: 'hackathons', icon: <HiOutlineLightningBolt />, status: 'soon' },
    { name: 'Open Source', key: 'opensource', icon: <HiOutlineCode />, status: 'soon' },
    { name: 'Applications', key: 'applications', icon: <HiOutlineClipboardList /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'jobs': return <Jobs />;
      case 'interviews': return <MockInterviews />;
      case 'profile': return <Profile />;
      case 'applications':
        return <div className="text-gray-500 flex justify-center mt-20">Applications Section Coming Soon</div>;
      default: return <Profile />;
    }
  };

  return (
    <div className="h-screen w-full bg-[#0a0a0a] text-gray-300 flex overflow-hidden font-sans">
      
      {/* MOBILE TOGGLE */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-6 right-6 z-50 text-white text-3xl p-2 bg-[#111111] rounded-full shadow-lg border border-white/5"
      >
        {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* SIDEBAR */}
      <aside className={`
        fixed lg:relative z-40 h-full w-[280px] lg:w-[20%] p-6 bg-[#111111] flex flex-col justify-between transition-transform duration-300 ease-in-out border-r border-white/5
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div>
          <Link to="/" className="inline-block mb-10 group px-4">
            <h1 className="text-white text-3xl font-black tracking-tighter italic group-hover:text-indigo-500 transition-colors">
              AIpply
            </h1>
          </Link>

          <nav className="mt-4">
            <h3 className="text-gray-500 uppercase text-[10px] font-bold tracking-[0.2em] mb-6 px-4">Menu</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <motion.li 
                  whileHover={!link.status ? { x: 4 } : {}}
                  whileTap={!link.status ? { scale: 0.98 } : {}}
                  key={link.key}
                  onClick={() => {
                    if (!link.status) {
                      setActiveTab(link.key);
                      setIsMenuOpen(false);
                    }
                  }}
                  className={`
                    flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
                    ${link.status ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    ${activeTab === link.key && !link.status
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                      : 'hover:bg-white/5 text-gray-400'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    <span>{link.name}</span>
                  </div>
                  {link.status === 'soon' && (
                    <span className="text-[10px] bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded-md font-bold uppercase">soon</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-6 border-t border-white/5 px-2">
          <button onClick={handleLogout} className="w-full py-4 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-red-500/80 transition-all active:scale-95">
            Log out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA - SCROLLBAR HIDDEN */}
      <main className="flex-1 h-screen overflow-y-auto bg-[#0a0a0a] p-4 lg:p-6">
        <div className="w-full min-h-full bg-[#111111] rounded-[32px] border border-white/5 shadow-2xl relative flex flex-col">
          
          {/* HEADER */}
          <div className="w-full px-8 py-6 border-b border-white/5 rounded-[32px] flex justify-between items-center bg-[#111111]/95 backdrop-blur-xl">
            <motion.h2 
              key={activeTab}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold text-white tracking-tight uppercase"
            >
                {activeTab === 'profile' ? name : activeTab}
            </motion.h2>
            <div className="flex items-center gap-4">
              <span className="text-[10px] bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full border border-indigo-500/20 font-bold tracking-widest">
                {email}
              </span>
            </div>
          </div>

          {/* CONTENT WITH TRANSITION */}
          <div className="p-8 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </main>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsMenuOpen(false)} 
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-30 lg:hidden" 
        />
      )}
    </div>
  );
};