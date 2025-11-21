
import { IoMdNotifications } from "react-icons/io";
import '../Applicant/Apply.css'
import { HeaderCard } from "../../Components/Header-card";
import { ResumeSocialCard } from "../../Components/Resume+Social-card";
import { ProfileInfo } from "./Profile-info";
import { useState, useEffect } from "react";
import JobCards from '../../Components/JobsPost.jsx'
import { Link, redirect } from "react-router";



export const FindJobs =()=>{

        const[email, setEmail]= useState('')

    useEffect(()=>{

    const userEmail = localStorage.getItem('user')
    if(userEmail){
      const user = JSON.parse(userEmail)
      setEmail(user.email)
    }
    },[])
    const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    redirect("/login");
  };

    return(
    <>
            <div className="h-screen w-screen bg-black flex flex-row">

        {/* LEFT MENU BAR */}
        <div className="w-[15%] p-3">
          <div className="flex flex-col justify-between items-center h-full gap-12">

            <Link className="text-white no-underline" to="/">
              <h1 className="text-white text-3xl font-bold">AIpply</h1>
            </Link>

            {/* MENU LIST */}
            <div className="w-full">
              <ul className="flex flex-col">
                
                <Link className="no-underline text-white" to="/applicant/findjobs">
                  <li className="list-none w-[15vw] p-4 hover:bg-[#234f92]">Find Jobs</li>
                </Link>

                <Link className="no-underline text-white" to="/applicant/MockInterviews">
                  <li className="list-none w-[15vw] p-4 hover:bg-[#234f92]">Mock Interviews</li>
                </Link>

                <Link className="no-underline text-white" to="/applicant">
                  <li className="list-none w-[15vw] p-4 hover:bg-[#234f92]">Profile</li>
                </Link>

                <Link className="no-underline text-white" to="/applicant/Applications">
                  <li className="list-none w-[15vw] p-4 hover:bg-[#234f92]">Applications</li>
                </Link>

              </ul>
            </div>

            {/* LOGOUT BUTTON */}
            <div>
              <button
                onClick={handleLogout}
                className="w-[13vw] py-3 rounded-[25px] cursor-pointer border-2 border-[#234f92] bg-black text-white hover:text-red-500"
              >
                Log out
              </button>
            </div>
          </div>
        </div>

        {/* CONTENT SECTION */}
<div className="main-applicant-page">
                <div className="main-page-navigation-bar">
                <div className="menu-list">
                    <h3>Jobs</h3>
                </div>
                <div className="menu-list">
                {/* <IoMdNotifications color="white" /> */}
                <pre>{email}</pre></div>
                </div>
                <hr />
                <div className="profile-content">
                    <JobCards/>
        </div>

            </div>

      </div>
    </>
    )
}
