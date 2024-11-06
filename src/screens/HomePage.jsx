import React from 'react'
import Header from '../components/header/Header'
import About from '../components/about/About'
import Projects from '../components/Projects/Projects'
import Footer from '../components/footer/Footer'

const HomePage = () => {
  return (
    <>
        <Header/>
        <Projects/>
        <About/>
        <Footer/>
    </>
  )
}

export default HomePage