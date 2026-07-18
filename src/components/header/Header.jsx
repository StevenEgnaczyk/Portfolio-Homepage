import React from 'react'
import './header.css'
import ContactButtons from './ContactButtons'
import ShipsBackground from '../background/ShipsBackground'
import { FaLaptopCode, FaGithub, FaLinkedin, FaYoutube, FaChalkboardTeacher } from 'react-icons/fa'

const socialLinks = [
  { icon: <FaGithub />, link: 'https://github.com/StevenEgnaczyk', label: 'GitHub' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/steven-egnaczyk-949a71208/', label: 'LinkedIn' },
  { icon: <FaYoutube />, link: 'https://www.youtube.com/channel/UCmWDlvMYYEbW42B8JyxFBcA', label: 'YouTube' },
  { icon: <FaLaptopCode />, link: 'https://stevenegnaczyk.github.io/infinigrams', label: 'Infinigrams' },
  { icon: <FaChalkboardTeacher />, link: 'https://www.youtube.com/playlist?list=PLv9p59WkkdPQVx_8jkNjNbDiXD6q6kJ9i', label: 'Lectures' },
]

const Header = () => {
  return (
    <header id="home" className="hero">
      <ShipsBackground />
      <div className="hero__content">
        <p className="hero__status">
          <span className="hero__status-dot" />
          status: online · boston
        </p>
        <h1 className="hero__name">Steven Egnaczyk</h1>
        <p className="hero__title">Associate Product Manager @ Insurify</p>
        <p className="hero__lede">
          Partnering with design &amp; engineering to ship
          <span className="hero__lede-focus">integrations · agency · service</span>
        </p>
        <ContactButtons />
        <div className="hero__social">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              {social.icon}
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
