import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#home" className='footer__logo'>STEVEN EGNACZYK</a>
        <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#myprojects">My Projects</a></li>
            <li><a href="#about">About</a></li>
        </ul>
        <div className="footer__copyright">
            <small>&copy; Steven Egnaczyk. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer