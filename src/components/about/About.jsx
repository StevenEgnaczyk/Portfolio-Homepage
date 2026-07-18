import React from 'react'
import ohioStateLogo from '../../assets/Logos/OhioState.png'
import './about.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about__layout">
        <div className="about__intro">
          <p className="section-label">about</p>
          <h2 className="section-heading">Helping build out core product at Insurify</h2>
          <p className="about__copy">
            Currently, I'm an Associate Product Manager at Insurify in Boston, working
            closely with engineering across agency and carrier products. 
            I help define what to build next by working with stakeholders, running experiments,
            and translating insights into clear product priorities.
          </p>
          <p className="about__copy about__copy--secondary">
            Before that I was a Data Analyst at Vanguard and taught computer science
            at The Ohio State University while finishing my MS. Outside of work I build
            side projects and used to publish CS lectures on YouTube as NullPointerException.
          </p>
        </div>

        <div className="about__meta">
          <div className="about__meta-block">
            <h3>// education</h3>
            <ul className="about__education">
              <li>
                <img
                  src={ohioStateLogo}
                  alt=""
                  className="about__edu-logo"
                />
                <div className="about__edu-text">
                  <strong>MS, Computer Science, AI Specialization</strong>
                  <span>THE Ohio State University · 2024–2025</span>
                </div>
              </li>
              <li>
                <img
                  src={ohioStateLogo}
                  alt=""
                  className="about__edu-logo"
                />
                <div className="about__edu-text">
                  <strong>BS, Computer Science</strong>
                  <span>THE Ohio State University · 2020–2024</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="about__meta-block">
            <h3>// focuses</h3>
            <ul className="about__focus">
              <li>Product development</li>
              <li>User research</li>
              <li>Experimentation</li>
              <li>Data analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
