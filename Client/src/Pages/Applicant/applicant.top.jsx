
import { IoMdNotifications } from "react-icons/io";
import '../Applicant/Apply.css'
import { HeaderCard } from "../../Components/Header-card";
import { ResumeSocialCard } from "../../Components/Resume+Social-card";
import { ProfileInfo } from "./Profile-info";
import { useState, useEffect } from "react";



export const Profile =()=>{

        const[email, setEmail]= useState('')

    useEffect(()=>{

    const userEmail = localStorage.getItem('user')
    if(userEmail){
      const user = JSON.parse(userEmail)
      setEmail(user.email)
    }
    },[])

    return(
    <>
    
    <div className="main-applicant-page">
                <div className="main-page-navigation-bar">
                <div className="menu-list">
                    <h3>Profile</h3>
                </div>
                <div className="menu-list">
                {/* <IoMdNotifications color="white" /> */}
                <pre>{email}</pre></div>
                </div>
                <hr />
                <div className="profile-content">
                    <ProfileInfo/>
        </div>

            </div>
    </>
    )
}
