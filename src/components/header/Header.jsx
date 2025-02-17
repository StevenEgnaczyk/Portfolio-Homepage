import React from 'react'
import './header.css'
import ContactButtons from './ContactButtons'
import professional_headshot from '../../assets/professional-headshot.jpg'
import { FaLaptopCode, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

const socialLinks = [
  { icon: <FaGithub />, link: 'https://github.com/StevenEgnaczyk', label: 'Github' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/steven-egnaczyk-949a71208/', label: 'LinkedIn' },
  { icon: <FaYoutube />, link: 'https://www.youtube.com/channel/UCmWDlvMYYEbW42B8JyxFBcA', label: 'YouTube' },
  { icon: <FaLaptopCode />, link: 'https://stevenegnaczyk.github.io/infinigrams', label: 'Recent Project' },
]

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h1>Steven Egnaczyk</h1>
        <h2>Computer Science Graduate Student</h2>
        <ContactButtons />
        <div className="icon-bubble-container">
          <div className="professional-headshot">
            <img src={professional_headshot} alt='professional-headshot' />
          </div>
          <div className="social-icons-container">
            {socialLinks.map((social, index) => (
              <a 
                href={social.link} 
                className={`social-icon social-icon-${index}`} 
                key={index}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="social-icon-content">
                  {social.icon}
                  <span className="social-icon-label">{social.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="social-dropdown">
          <button className="btn btn-secondary">
            Social Links
          </button>
          <ul className="dropdown-menu">
            <li><a href="https://github.com/StevenEgnaczyk" target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/steven-egnaczyk-949a71208/" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="https://www.youtube.com/channel/UCmWDlvMYYEbW42B8JyxFBcA" target="_blank" rel="noreferrer">YouTube</a></li>
            <li><a href="#recent-project" target="/nba-api" rel="noreferrer">Recent Project</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;
