import '../../src/Pages/Applicant/Apply.css'
import Abhi from '../public/Abhi.jpg'
import { FaPen } from 'react-icons/fa'; 
import { useState } from "react";

export const HeaderCard = ()=>{
     
    const [profilePic, setProfilePic] = useState('/default-profile.jpg'); // Initial profile image

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const imgURL = URL.createObjectURL(file);
        setProfilePic(imgURL);
      }
    };
    return(
        <>
        <div className="header-card">
        <div className="profile-pic-wrapper">
            <img src={Abhi} alt="profile" className="profile-image" />
            <label htmlFor="upload-input" className="edit-icon">
              <FaPen />
            </label>
            <input
              type="file"
              id="upload-input"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </div>
          <div className="header-info">
            <h2>Rajidi Abhinavreddy</h2>
            <p>Candidate ▪ Telangana</p>
            <button className="view-profile-btn">View Profile</button>
          </div>
        </div>
        </>
    )
}