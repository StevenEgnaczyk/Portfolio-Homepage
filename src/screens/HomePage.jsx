import React from 'react'
import Nav from '../components/nav/Nav'
import Header from '../components/header/Header'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Projects from '../components/Projects/Projects'
import Footer from '../components/footer/Footer'

const HomePage = () => {
  return (
    <div className="page-shell">
      <Nav />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  )
}

export default HomePage
