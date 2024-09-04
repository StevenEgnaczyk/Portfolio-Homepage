import React from 'react'
import './header.css'
import ContactButtons from './ContactButtons'
import professional_headshot from '../../assets/professional-headshot.jpg'
import { FaLaptopCode, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'

const socialLinks = [
  { icon: <FaGithub />, link: 'https://github.com/StevenEgnaczyk', label: 'Github' },
  { icon: <FaLinkedin />, link: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: <FaYoutube />, link: 'https://youtube.com/', label: 'YouTube' },
  { icon: <FaLaptopCode />, link: 'https://example.com/', label: 'Portfolio' }, // Example link and label
]

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container">
        <h1>Steven Egnaczyk</h1>
        <h2 className="text-white">Computer Science Graduate Student</h2>
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
      </div>
    </header>
  )
}

export default Header
