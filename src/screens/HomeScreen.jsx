import React from 'react'

import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import About from '../components/about/About'
import Projects from '../components/Projects/Projects'
import Footer from '../components/footer/Footer'

const HomeScreen = () => {
  return (
    
    <>
        <Header/>
        <Nav/>
        <Projects/>
        <About/>
        <Footer/>

    </>
  )
}

export default HomeScreen