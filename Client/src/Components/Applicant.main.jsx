import { MdEmail } from "react-icons/md";
import "../Components/Applicant.css"
import { Profile } from "../Pages/Applicant/Profile";

export const Applicant = ()=>{

    return(
        <>
        <div className="main">
            <div className="main-menu-bar">
                <div className="menu-bar">
                <h1>AIpply</h1>
                    <div className="logo-with-mainpage">
                        
                    <button>Find Jobs</button>
                    </div>
                    <div className="menu-lists">
                    <ul>
                        <li>Home</li>
                        <li>Applications</li>
                        <li>Profile</li>
                        <li>Notifications</li>
                    </ul>
                    </div>
                <div className="logout-button">
                <button>Log out</button>
                </div>
                </div>
            </div>
            <Profile/>
        </div>
        </>
    )
}