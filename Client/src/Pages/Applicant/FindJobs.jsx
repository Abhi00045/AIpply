
import { useEffect, useState } from 'react'
import JobCards from '../../Components/JobsPost'
// import JobsPost from '../../Components/JobsPost'
import '../Applicant/Apply.css'


export const FindJobs=()=>{
            const[email, setEmail]= useState('')
    
        useEffect(()=>{
    
        const userEmail = localStorage.getItem('user')
        if(userEmail){
          const user = JSON.parse(userEmail)
          setEmail(user.email)
        }
        },[])

    return<>
    
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
                    <div className="m-10 p-14">
                    <JobCards/> 
            </div>
                </div>
    </>
}