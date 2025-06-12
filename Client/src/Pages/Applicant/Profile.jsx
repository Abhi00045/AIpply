
import { IoMdNotifications } from "react-icons/io";
import '../Applicant/Apply.css'

export const Profile =()=>{

    return<>
    
    <div className="main-applicant-page">
                <div className="main-page-navigation-bar">
                <div className="menu-list">
                    <h3>Profile</h3>
                </div>
                <div className="menu-list">
                <IoMdNotifications color="black" />
                <pre>info@gmail.com</pre></div>
                </div>
                <hr />
            </div>
    </>
}