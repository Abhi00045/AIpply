// import { MdEmail } from "react-icons/md";
// import '../Applicant/Apply.css'
import './Applicant.css'
import { Profile } from "../Pages/Applicant/Profile";
import { Link } from "react-router";

export const JobApplicant = ()=>{

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
            <Profile/>
        </div>
        </>
    )
}