import React, { useState } from 'react';
import '../../src/Pages/Applicant/Apply.css'

import { FaGithub, FaLinkedin, FaTwitter, FaGlobe, FaPen } from 'react-icons/fa';


export const ResumeSocialCard = ()=>{


    const [resumeFile, setResumeFile] = useState(null);
    const [links, setLinks] = useState({
      github: '',
      linkedin: '',
      twitter: '',
      website: '',
    });
  
    const handleResumeUpload = (e) => {
      const file = e.target.files[0];
      if (file) setResumeFile(file.name);
    };
  
    const handleLinkChange = (e) => {
      
    };


    return <>
    <div className="resume-extractor-box">
      <label htmlFor="resume-upload" className="upload-button">
        ⬆ Upload Resume
      </label>
      <input
        type="file"
        id="resume-upload"
        style={{ display: 'none' }}
        onChange={handleResumeUpload}
      />
      {resumeFile && <p className="file-name">{resumeFile}</p>}

      <div className="social-section">
        
      <input
              type="text"
              name="github"
              placeholder="GitHub URL"
              value={links.github}
              onChange={handleLinkChange}
            />
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn URL"
              value={links.linkedin}
              onChange={handleLinkChange}
            />
            <input
              type="text"
              name="twitter"
              placeholder="Twitter URL"
              value={links.twitter}
              onChange={handleLinkChange}
            />
            <input
              type="text"
              name="website"
              placeholder="Website URL"
              value={links.website}
              onChange={handleLinkChange}
            />
            <button className="savingbtn">Add</button>
      </div>
    </div>


    <style>
        {
            `
            .resume-extractor-box {
  background: white;
  padding: 25px;
  width: 300px;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  text-align: center;
  position: relative;
}

.resume-extractor-box h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #222;
}

.sparkle {
  font-size: 36px;
  color: #999;
  margin: 10px 0;
}

.description {
  color: #777;
  margin-bottom: 15px;
}

.upload-button {
  display: inline-block;
  background: linear-gradient(to right, #4c63b6, #0be881, #ffdd59);
  color: white;
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: 0.3s;
}

.upload-button:hover {
  opacity: 0.9;
}

.file-name {
  font-size: 14px;
  margin-top: 8px;
  color: #444;
}


            `
        }
    </style>
    </>
}