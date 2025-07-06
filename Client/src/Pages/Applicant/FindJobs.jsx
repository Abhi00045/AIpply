
import JobCards from '../../Components/JobsPost'
// import JobsPost from '../../Components/JobsPost'
import '../Applicant/Apply.css'


export const FindJobs=()=>{

    return<>
    
     <div className="main-applicant-page">
                    <div className="main-page-navigation-bar">
                    <div className="menu-list">
                        <h3>Jobs</h3>
                    </div>
                    <div className="menu-list">
                    {/* <IoMdNotifications color="white" /> */}
                    <pre>info@gmail.com</pre></div>
                    </div>
                    <hr />
                    <div className="profile-content">
                    <JobCards/> 
            </div>
                </div>
    </>
}