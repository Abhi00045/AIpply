import { HeaderCard } from "../../Components/Header-card"
import { ResumeSocialCard } from "../../Components/Resume+Social-card"
import { useState } from "react"
import Personal from "../ProfileSections/Personal"
import Work from "../ProfileSections/Work"
import Education from "../ProfileSections/Education"

export const ProfileInfo = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const mainLocalUser = JSON.parse(localStorage.getItem("user"));

  const tabs = [
    { id: 'personal', label: 'Personal Details' },
    { id: 'work', label: 'Work Experience' },
    { id: 'education', label: 'Education' },
    { id: 'resume', label: 'Resume & Socials' }
  ];

  return (
    <div className="w-full min-h-full flex flex-col gap-8">
      {/* TABS NAVIGATION - Premium Pill Style */}
      <div className="flex flex-wrap items-center gap-2 p-1.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300
              ${activeTab === tab.id 
                ? 'bg-[#234f92] text-white shadow-lg' 
                : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CONTENT AREA */}
      <div className="flex-1 transition-all duration-500 ease-in-out">
        {/* Render only active section to keep the UI clean and fast */}
        <div className="bg-transparent animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {activeTab === 'personal' && (
            <div className="space-y-6">
              <Personal />
            </div>
          )}

          {activeTab === 'work' && (
            <div className="space-y-6">
              <Work />
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-6">
              <Education />
            </div>
          )}

          {activeTab === 'resume' && (
            <div className="space-y-6">
              {/* If you want to use the card component: */}
               <ResumeSocialCard /> 
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
};