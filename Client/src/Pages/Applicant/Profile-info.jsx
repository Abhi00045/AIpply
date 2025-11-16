import { HeaderCard } from "../../Components/Header-card"
import { ResumeSocialCard } from "../../Components/Resume+Social-card"
import '../Applicant/Apply.css'
import { useState } from "react"

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
                <input type="text" placeholder="Name" />

                <div className="numersection">
                <select className="">
                <option value="+91">+91 (India)</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+61">+61 (Australia)</option>
                <option value="+81">+81 (Japan)</option>
                <option value="+49">+49 (Germany)</option>
                <option value="+33">+33 (France)</option>
                <option value="+86">+86 (China)</option>
                 </select>
                <input type="number" placeholder="Phone number"/>
                </div>
                <input placeholder="State" />
                <input placeholder="Address" />
                <input placeholder="Skills (comma separated)" />
                <input type="text" placeholder="About" />
                <button>Save</button>
                </div>
                <div className={`section ${activeTab === 'work' ? 'active' : ''}`}>
                    <h2 className="mb-1.5">Work Expirence</h2>
                    <input type="text" placeholder="Company name" />
                    <input type="text" placeholder="Job role" />
                    <input type="text" placeholder="location" />
                   <label htmlFor="">End-Date</label> <input type="date" placeholder="end date" />
                    <input type="text" placeholder="Description" />
                    <button>
                        ADD 
                    </button>
                </div>
                <div className={`section ${activeTab === 'education' ? 'active' : ''}`}>
                    <h2>Education Details</h2>
                    <input type="text" placeholder="Unviersity/Collage name" />
                    <select>
                    <option value="">Select Degree</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="M.Tech">M.Tech</option>
                    <option value="B.Sc">B.Sc</option>
                    <option value="M.Sc">M.Sc</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Other">Other</option>
                    </select>
                    <select>
                    <option value="">Select Major</option>
                        <option value="Computer Science and Engineering">Computer Science and Engineering (CSE)</option>
                        <option value="Information Technology">Information Technology (IT)</option>
                        <option value="Electronics and Communication">Electronics and Communication (ECE)</option>
                        <option value="Electrical and Electronics">Electrical and Electronics (EEE)</option>
                        <option value="Mechanical Engineering">Mechanical Engineering</option>
                        <option value="Civil Engineering">Civil Engineering</option>
                        <option value="Chemical Engineering">Chemical Engineering</option>
                    </select>
                    <input type="date" placeholder="Start Date" />
                    <input type="date" placeholder="End Date" />
                    <button>ADD</button>

                </div>
            {/* <HeaderCard/> */}
            {/* <ResumeSocialCard className ={`section ${activeTab === 'resume' ? 'active' : ''}`}/> */}
        </div>
        
    </div>
    </>
}

