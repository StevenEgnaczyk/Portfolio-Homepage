import React, { useState } from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const Footer = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:stevenegnaczyk@gmail.com?subject=Message from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`
  }

  return (
    <footer>
      <div className="footer__content">
        <form className="footer__contact-form" onSubmit={handleSubmit}>
          <h3>Send me a message</h3>
          <input 
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email" 
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            <MdEmail /> Send Message
          </button>
        </form>

        <div className="footer__right-column">
          <a href="#home" className='footer__logo'>STEVEN EGNACZYK</a>
          
          <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#myprojects">My Projects</a></li>
            <li><a href="#about">About</a></li>
          </ul>

          <div className="footer__copyright">
            <small>&copy; Steven Egnaczyk. All rights reserved.</small>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer