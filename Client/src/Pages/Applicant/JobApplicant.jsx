import { MdEmail } from "react-icons/md";

export const Applicant = ()=>{

    return(
        <>
        <div className="main">
            <div className="main-menu-bar">
                <div className="menu-bar">
                    <div className="logo-with-mainpage">
                        <h1>AIpply</h1>
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
            <div className="main-applicant-page">
                <div className="main-page-navigation-bar">
                <div className="menu-list">
                    <h3>Profile</h3>
                </div>
                <div className="menu-list">
                <MdEmail />
                </div>
                <div className="menu-list">info@gmail.com</div>
                </div>

            </div>
        </div>
        </>
    )
}