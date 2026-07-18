import React from 'react'
import CV from '../../assets/StevenEgnaczykResume.pdf'

const ContactButtons = () => {
  return (
    <div className="contact_buttons">
      <a href={CV} className="btn btn-primary" target="_blank" rel="noreferrer">
        Download CV
      </a>
      <a
        href="mailto:stevenegnaczyk@gmail.com?subject=Inquiry&body=Hello Steven,%0D%0A%0D%0AI am reaching out to you regarding..."
        className="btn btn-secondary"
      >
        Contact Me
      </a>
    </div>
  )
}

export default ContactButtons
