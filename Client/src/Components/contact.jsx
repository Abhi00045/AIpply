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
            <br />
          <div className="social-icons-2">
          <a href="#" aria-label="Facebook"><FaGithubSquare/></a>
          <a href="#" aria-label="Twitter"><CiLinkedin/></a>
          <a href="#" aria-label="LinkedIn"><BsTwitterX/></a>
          </div>
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
        color:white;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
          position: relative;
          padding: 60px;
          background-color:rgb(68, 68, 69);
          
        }

        .contact-info {
        color:white;
          z-index: 1;
          position: relative;
          max-width: 600px;
        }

        .contact-info h2 {
        color:white;
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .contact-info p {
        color:white;
          font-size: 1.1rem;
          margin: 10px 0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
          .social-icons h2{
          color:white;
          }
        .social-icons-2 {
        color:white;
        display:flex;
        flex-direction:row;
        justify-content:space-around;
        //   margin-top: 20px;
          display: flex;
          gap: 10px;
        }

        .social-icons a {
        color:white;
          font-size: 1.5rem;
          color:white;
          transition: color 0.3s;
        }

        .social-icons a:hover {
          color: #007bff;
        }
        .useful h2{
        color:white;
        }  
        
        .useful{
          color:white;
           display:flex;
        flex-direction:column;
        // justify-content:space-around;
          }
        ul{
        color:white;
        padding:5px;
        }
        ul li{
        color:white;
        list-style:none;
        margin-bottom:3px;
        }

        
      `}</style>
    </>
  );
};

export default Contact;
