import React, { useEffect, useState } from 'react'
import './nav.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''} ${open ? 'site-nav--open' : ''}`}>
      <div className="site-nav__inner">
        <a href="#home" className="site-nav__brand" onClick={() => setOpen(false)}>
          Steven Egnaczyk
        </a>

        <button
          type="button"
          className="site-nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>

        <ul className="site-nav__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="mailto:stevenegnaczyk@gmail.com" className="site-nav__cta" onClick={() => setOpen(false)}>
              Email me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
