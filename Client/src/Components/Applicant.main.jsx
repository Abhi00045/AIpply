// import { MdEmail } from "react-icons/md";
// import '../Applicant/Apply.css'
import { Profile } from '../Pages/Applicant/applicant.top';
import { FindJobs } from '../Pages/Applicant/FindJobs';
import MockInterviews from '../Pages/Applicant/MockInterviews';
import './Applicant.css'
import { Link, redirect } from "react-router";
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();


export const JobApplicant = ()=>{

    const handleLogout = () => {
        // console.log("poora");
        localStorage.removeItem("token");  // remove token
        localStorage.removeItem("user");   // remove user details
        redirect("/login")
      };
      

    return(
        <>
        <div className="main">
            <div className="main-menu-bar">
                <div className="menu-bar">
                <Link className="links" to='/'><h1>AIpply</h1></Link>
                    {/* <div className="logo-with-mainpage">   
                    <button>Find Jobs</button>
                    </div> */}
                    <div className="menu-lists">
                    <ul>
                    <Link className="links" to='/applicant/findjobs'><li>Find Jobs</li></Link>
                        <Link className="links"  to="/applicant/MockInterviews"><li>Mock Interviews</li></Link>
                        <Link className="links"  to='/applicant/'><li>Profile</li></Link>
                        <Link className="links"  to='/applicant/Applications'><li>Applications</li></Link>
                    </ul>
                    </div>
                <div className="logout-button">
                <button className="logout" onClick={handleLogout}>Log out</button>
                </div>
                </div>
            </div>
            <Profile/>
            {/* <FindJobs/> */}
        </div>
        </>
    )
}

export const FindJobsForApplicant = ()=>{

    return(
        <>
        <div className="main">
            <div className="main-menu-bar">
                <div className="menu-bar">
                <Link className="links" to='/'><h1>AIpply</h1></Link>
                    {/* <div className="logo-with-mainpage">   
                    <button>Find Jobs</button>
                    </div> */}
                    <div className="menu-lists">
                    <ul>
                    <Link className="links" to='/applicant/findjobs'><li>Find Jobs</li></Link>
                        <Link className="links"  to="/applicant/MockInterviews"><li>Mock Interviews</li></Link>
                        <Link className="links"  to='/applicant/'><li>Profile</li></Link>
                        <Link className="links"  to='/applicant/Applications'><li>Applications</li></Link>
                    </ul>
                    </div>
                <div className="logout-button">
                <button className="logout">Log out</button>
                </div>
                </div>
                
            </div>
           <FindJobs/>
        </div>
        </>
    )
}

export const MockInterviewForApplicant = ()=>{

    return(
        <>
        <div className="main">
            <div className="main-menu-bar">
                <div className="menu-bar">
                <Link className="links" to='/'><h1>AIpply</h1></Link>
                    {/* <div className="logo-with-mainpage">   
                    <button>Find Jobs</button>
                    </div> */}
                    <div className="menu-lists">
                    <ul>
                    <Link className="links" to='/applicant/findjobs'><li>Find Jobs</li></Link>
                        <Link className="links"  to="/applicant/MockInterviews"><li>Mock Interviews</li></Link>
                        <Link className="links"  to='/applicant/'><li>Profile</li></Link>
                        <Link className="links"  to='/applicant/Applications'><li>Applications</li></Link>
                    </ul>
                    </div>
                <div className="logout-button">
                <button className="logout">Log out</button>
                </div>
                </div>
            </div>
           <MockInterviews/>
        </div>
        </>
    )
}