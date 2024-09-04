import React from 'react'
import CV from '../../assets/Thakshila-Bandara_CV.pdf'

const ContactButtons = () => {
  return (
    <div className="contact_buttons">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default ContactButtons