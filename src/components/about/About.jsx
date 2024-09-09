import React from 'react'
import './about.css'
import profilePicture from '../../assets/CompositePhoto.jpg'
import { FaGraduationCap } from "react-icons/fa";
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      <h1>About Me</h1>
      <div className="sm-container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={profilePicture} alt="Picture of Myself" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                  <FaGraduationCap className='about__icon'/>
                  <h2>Education</h2>
                  <b><h5>BS in Computer Science (2020-2024)<br/><i>The Ohio State University</i></h5></b>
                  <b><h5>MS in Computer Science (2024-2025 Expected)<br/><i>The Ohio State University</i></h5></b>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h2>Academics</h2>
                  <b><h5>Undergraduate GPA: 3.6<br/>Undergraduate Major GPA: 3.5</h5></b>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h2>Previous Experience</h2>
                  <small>
                    <ul>
                      <li>Optum (Summer 2022 - Software Engineering Intern)</li>
                      <li>Ab Initio (Summer 2023 - Software Engineering Intern)</li>
                      <li>Vanguard (Autumn 2023 : Present - Data Scientist)</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I'm a <b>Software Engineering Undergradute</b> at the University of Kelaniya. 
                    I'm an enthusiastic and driven Software Engineering student seeking a challenging internship opportunity to apply 
                    and expand my technical skills. 
                    With a strong academic foundation in software engineering and hands-on experience in various programming languages,
                    I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About