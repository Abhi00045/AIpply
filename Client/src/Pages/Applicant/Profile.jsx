
import { IoMdNotifications } from "react-icons/io";
import '../Applicant/Apply.css'
import { HeaderCard } from "../../Components/Header-card";
import { ResumeSocialCard } from "../../Components/Resume+Social-card";
import { ProfileInfo } from "./Profile-info";


export const Profile =()=>{



    return(
    <>
    
    <div className="main-applicant-page">
                <div className="main-page-navigation-bar">
                <div className="menu-list">
                    <h3>Profile</h3>
                </div>
                <div className="menu-list">
                {/* <IoMdNotifications color="white" /> */}
                <pre>info@gmail.com</pre></div>
                </div>
                <hr />
                <div className="profile-content">
                    <ProfileInfo/>
        </div>

            </div>
    </>
    )
}