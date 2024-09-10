import React from 'react'
import './about.css'
import profilePicture from '../../assets/CompositePhoto.jpg'
import { FaGraduationCap } from "react-icons/fa";
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'
import { AiOutlineHome } from 'react-icons/ai';

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
            <p>
              Currently, I am a Graduate Student at The Ohio State University pursuing a Master's in Computer Science and Engineering.
              I am extremely passionate about the growing field of artificial intelligence and machine learning - and it's implications on the field
              of Computer Science. In addition to being a full-time student, I work as both a data science contractor at Vanguard, and a 
              Graduate Teaching Associate at The Ohio State University. My previous software engineering experience, combined with current work on 
              AI/ML gives me a unique perspective on the field of Computer Science. I am always looking for new opportunities to learn and grow in the field.
              </p>
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
                    <b>
                      <h5>Optum (Summer 2022) - Software Engineering Intern</h5>
                      <h5>Ab Initio (Summer 2023) - Software Engineering Intern</h5>
                      <h5>Vanguard (Autumn 2023 : Present) - Data Scientist</h5>
                      <h5>The Ohio State University (Spring 2024 : Present) - Graduate Teaching Associate</h5>
                    </b>
              </article>

              

            </div>
          </div>
      </div>
    </section>
  )
}

export default About