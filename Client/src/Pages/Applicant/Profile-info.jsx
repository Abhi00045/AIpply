import { HeaderCard } from "../../Components/Header-card"
import { ResumeSocialCard } from "../../Components/Resume+Social-card"
import '../Applicant/Apply.css'
import { useState } from "react"
import Personal from "../ProfileSections/Personal"
import Work from "../ProfileSections/Work"
import Education from "../ProfileSections/Education"

export const ProfileInfo = ()=>{

    const [activeTab, setActiveTab] = useState('personal');

    

    return <>
    <div className="profileInfo-container">
    <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`}
          onClick={() => setActiveTab('personal')}
        >
          Personal Details
        </button>
        
        <button
          className={`tab-button ${activeTab === 'work' ? 'active' : ''}`}
          onClick={() => setActiveTab('work')}
        >
          Work Experience
        </button>
        <button
          className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button
        className={`tab-button ${activeTab ==='resume'? 'active' : ''}`}
        onClick={()=>setActiveTab('resume')}
        >Resume and Socials</button>
      </div>
        <div className="text-black">

                <div className={`section ${activeTab === 'personal' ? 'active' : ''}`} >
                {/* <h2>Personal Details</h2> */}
                <Personal/>
                </div>
                <div className={`section ${activeTab === 'work' ? 'active' : ''}`}>
                  <Work/>
                </div>
                <div className={`section ${activeTab === 'education' ? 'active' : ''}`}>                  
                  <Education/>
                </div>
            {/* <HeaderCard/> */}
            {/* <ResumeSocialCard className ={`section ${activeTab === 'resume' ? 'active' : ''}`}/> */}
        </div>
        
    </div>
    </>
}

