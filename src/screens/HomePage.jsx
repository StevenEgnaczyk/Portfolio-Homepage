import React from 'react'
import Header from '../components/header/Header'
import Projects from '../components/Projects/Projects'
import Experience from '../components/experience/Experience'
import Footer from '../components/footer/Footer'

const HomePage = () => {
  return (
    <>
        <Header/>
        <Projects/>
        <Experience/>
        <Footer/>
    </>
  )
}

export default HomePage