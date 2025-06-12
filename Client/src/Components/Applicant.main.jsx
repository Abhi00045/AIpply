// import { MdEmail } from "react-icons/md";
import "../Components/Applicant.css"
import { Profile } from "../Pages/Applicant/Profile";
import { Link } from "react-router";

export const JobApplicant = ()=>{

    return(
        <>
        <div className="main">
            <div className="main-menu-bar">
                <div className="menu-bar">
                <Link className="links" to='/'><h1>AIpply</h1></Link>
                    <div className="logo-with-mainpage">   
                    <button>Find Jobs</button>
                    </div>
                    <div className="menu-lists">
                    <ul>
                    <Link className="links" to='/applicant/dashboard'><li>Home</li></Link>
                        <Link className="links"  to="/applicant/applications"><li>Applications</li></Link>
                        <Link className="links"  to='/applicant/profile'><li>Profile</li></Link>
                        <Link className="links"  to='/applicant/profile'><li>Notifications</li></Link>
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