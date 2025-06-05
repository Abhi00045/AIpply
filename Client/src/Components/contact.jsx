import React from 'react';
import { FaGithubSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoHome } from "react-icons/io5";

const Contact = () => {
  return (
    <>
    <div className="contact-section">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p><MdEmail/> info@Aipply.com</p>
        <p><IoHome /> Hyderabad, Telangana</p>
        </div>

        <div className="social-icons">
            <h2>Follow us</h2>
          <a href="#" aria-label="Facebook"><FaGithubSquare/></a>
          <a href="#" aria-label="Twitter"><CiLinkedin/></a>
          <a href="#" aria-label="LinkedIn"><BsTwitterX/></a>
        </div>

        <div className="useful">
            <h2>Useful Links</h2>
            <ul><li>privacy policy</li>
            <li>About us</li>
            <li>Terms of Service</li></ul>
        </div>
      </div>

      {/* <div className="hero-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div> */}

      <style>{`
        .contact-section {
        display:flex;
        flex-direction:row;
        justify-content:space-around;
          position: relative;
          padding: 60px;
          background-color: #f5f5f5;
          
        }

        .contact-info {
          z-index: 1;
          position: relative;
          max-width: 600px;
        }

        .contact-info h2 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .contact-info p {
          font-size: 1.1rem;
          margin: 10px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .social-icons {
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        //   margin-top: 20px;
          display: flex;
          gap: 10px;
        }

        .social-icons a {
          font-size: 1.5rem;
          color: #333;
          transition: color 0.3s;
        }

        .social-icons a:hover {
          color: #007bff;
        }
          .useful{
           display:flex;
        flex-direction:column;
        // justify-content:space-around;
          }
        ul{
        padding:5px;
        }
        ul li{
        list-style:none;
        margin-bottom:3px;
        }

        
      `}</style>
    </>
  );
};

export default Contact;
