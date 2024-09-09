import React from 'react'
import CV from '../../assets/StevenEgnaczykResume.pdf'

const ContactButtons = () => {
  return (
    <div className="contact_buttons">
        <a href={CV} className='btn' target='_blank' rel="noreferrer">Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default ContactButtons