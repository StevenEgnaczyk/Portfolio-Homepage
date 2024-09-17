import React from 'react';
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
      <a href={CV} className="btn btn-primary" target="_blank" rel="noreferrer">Download CV</a>
      
      <a 
        href="mailto:stevenegnaczyk@gmail.com?subject=Inquiry&body=Hello Steven,%0D%0A%0D%0AI am reaching out to you regarding..."
        className="btn btn-secondary"
      >
        Contact Me
      </a>
      
      <div className="social-dropdown">
        <button className="btn socials-btn">Social Links</button>
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
