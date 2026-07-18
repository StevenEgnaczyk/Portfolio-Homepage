import React, { useState } from 'react'
import './footer.css'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    window.location.href = `mailto:stevenegnaczyk@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(email)}`
  }

  return (
    <footer id="contact" className="footer">
      <div className="footer__inner container">
        <div className="footer__intro">
          <p className="section-label">contact</p>
          <h2 className="section-heading">Let&apos;s talk</h2>
          <p className="footer__lede">
            Open to conversations about product management, building customer-facing
            products, and interesting side projects. Send a note and I&apos;ll get back to you.
          </p>
          <div className="footer__socials">
            <a href="mailto:stevenegnaczyk@gmail.com" aria-label="Email">
              <MdEmail />
            </a>
            <a href="https://www.linkedin.com/in/steven-egnaczyk-949a71208/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <BsLinkedin />
            </a>
            <a href="https://github.com/StevenEgnaczyk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <BsGithub />
            </a>
          </div>
        </div>

        <form className="footer__form" onSubmit={handleSubmit}>
          <label className="footer__field">
            <span>Name</span>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="footer__field">
            <span>Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="footer__field">
            <span>Message</span>
            <textarea
              placeholder="What are you working on?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="btn btn-primary">
            <MdEmail /> Send Message
          </button>
        </form>
      </div>

      <div className="footer__bar">
        <div className="footer__bar-inner container">
          <a href="#home" className="footer__logo">Steven Egnaczyk</a>
          <ul className="permalinks">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
          <small className="footer__copyright">&copy; {new Date().getFullYear()} Steven Egnaczyk</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
