import React from 'react';
import { FaGithubSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import './Contact.css'; // Import the external CSS

const Contact = () => {
  return (
    <footer className="contact-container">
      <div className="contact-links">
        <div className="contact-info">
          <p><MdEmail /> info@Aipply.com</p>
          <p><IoHome /> Hyderabad, Telangana</p>
        </div>

        <nav className="useful-links">
          <ul>
            <li>Benefits</li>
            <li>Specifications</li>
            <li>How-to</li>
          </ul>
        </nav>

        <div className="social-icons">
          <a href="#" aria-label="GitHub"><FaGithubSquare /></a>
          <a href="#" aria-label="LinkedIn"><CiLinkedin /></a>
          <a href="#" aria-label="Twitter"><BsTwitterX /></a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
