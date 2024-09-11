import React, { useState } from 'react';
import CV from '../../assets/StevenEgnaczykResume.pdf';
import { FaLaptopCode, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

// Define the social links for the dropdown menu
const socialLinks = [
  { icon: <FaGithub />, link: 'https://github.com/StevenEgnaczyk', label: 'Github' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/steven-egnaczyk-949a71208/', label: 'LinkedIn' },
  { icon: <FaYoutube />, link: 'https://www.youtube.com/channel/UCmWDlvMYYEbW42B8JyxFBcA', label: 'YouTube' },
  { icon: <FaLaptopCode />, link: '', label: 'Recent Project' }, // Example link and label
];

const ContactButtons = () => {
  return (
    <div className="contact_buttons">
      <a href={CV} className="btn" target="_blank" rel="noreferrer">Download CV</a>
      <a href="#contacts" className="btn btn-primary">Contact Me</a>
      
      {/* Social links dropdown, visible only on small screens */}
      <div className="social-dropdown">
        <button className="btn-primary btn">Social Links</button>
        <ul className="dropdown-menu">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                {social.icon} {social.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactButtons;
