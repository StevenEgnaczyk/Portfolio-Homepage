import React, { useState } from 'react'
import './experience.css'

const roles = [
  {
    company: 'Insurify',
    logo: require('../../assets/Logos/Insurify.png'),
    linkedIn: 'https://www.linkedin.com/company/insurify/',
    role: 'Associate Product Manager',
    team: 'Boston, MA',
    period: 'Jun 2025 – Present',
    current: true,
    summary: 'Insurance aggregator · $600M Series B',
    technologies: [
      'SQL', 'Mode', 'Hex', 'MixPanel', 'Figma', 'Growthbook',
      'Datadog', 'Salesforce', 'Python', 'Asana',
    ],
    highlights: [
      'Scoped and led an end-to-end AI voice agent POC to automate 100% of inbound customer service calls, enabling self-serve workflows for reinstatements, ID card delivery, and payment collection.',
      'Drove execution of a suite of agency-facing features, including automated carrier-portal RC3 scrapers, dynamic reshopping, and an LLM-powered chatbot, resulting in 33% QoQ agency sales growth and a 10% conversion lift.',
      'Defined requirements and oversaw rollout of a contextual multi-arm bandit traffic routing system, dynamically allocating lead volume across purchase channels for 80,000 monthly users to maximize sale conversion efficiency.',
      'Owned QA strategy and execution across 100+ insurance API integrations, improving price accuracy and quoting success rate by 10%, recovering an estimated $1.5M in otherwise lost sales.',
      'Designed and shipped a self-healing VIN selection system that automatically surfaces optimal vehicle data at RC1 based on historical provider quoting patterns, reducing vehicle-related error rates by 80% in pilot.',
      'Served as the primary PM for carrier partnership integrations, managing end-to-end requests across migration, filter rule updates, and traffic toggling for 100+ carrier relationships including Allstate and National General.',
      'Owned technical servicing for Insurify Car, using Datadog to triage payment and integration errors, driving ticket rate down from 10% to 3% through systematic root cause analysis and coordinated fixes with engineering.',
    ],
  },
  {
    company: 'Vanguard',
    logo: require('../../assets/Logos/Vanguard.png'),
    linkedIn: 'https://www.linkedin.com/company/vanguard/',
    role: 'Data Analyst',
    team: 'Malvern, PA',
    period: 'Oct 2023 – Jun 2025',
    summary: 'Asset manager · $10T AUM · Fortune 500',
    technologies: ['Python', 'SQL', 'Machine Learning', 'Data Analysis', 'Data Visualization'],
    highlights: [
      'Led cross-functional development of an internal macroeconomic data pipeline aggregating time series data from sources including the Federal Reserve and Bureau of Labor Statistics, improving data accessibility for ML modeling teams.',
      'Scoped and evaluated deep learning approaches to improve housing turnover rate predictions in mortgage-backed securities, testing integration of lagged macroeconomic variables to improve time-series accuracy.',
      'Conducted exploratory data analysis on emerging datasets to assess feasibility for inclusion in production prediction models, informing roadmap decisions on data sourcing.',
    ],
  },
  {
    company: 'Ohio State University',
    logo: require('../../assets/Logos/OhioState.png'),
    linkedIn: 'https://www.linkedin.com/school/the-ohio-state-university/',
    role: 'Graduate Teaching Associate',
    team: 'Columbus, OH',
    period: 'Jun 2024 – Jun 2025',
    summary: 'College of Engineering',
    technologies: ['Java', 'JUnit'],
    highlights: [
      'Taught and supported undergraduate computer science coursework while completing an MS in Computer Science and Engineering with an AI specialization.',
      'Guided students through software engineering fundamentals, testing with JUnit, and core programming concepts.',
      'Led 2 weekly lectures and 2 lab sessions per week for 80+ students across 2 semesters.',
    ],
  },
  {
    company: 'Ab Initio',
    logo: require('../../assets/Logos/AbInitio.png'),
    linkedIn: 'https://www.linkedin.com/company/ab-initio/',
    role: 'Software Engineering Intern',
    team: '',
    period: 'Jun 2023 – Aug 2023',
    summary: 'Enterprise data processing',
    technologies: ['Java', 'Python', 'Oracle', 'Amazon S3', 'SharePoint', 'Git', 'Jenkins'],
    highlights: [
      'Updated the Metadata importer to extract data from Excel and Oracle RDBMS, improving data integration.',
      'Implemented file storage enhancements, migrating storage to a database, reducing infrastructure costs and eliminating the need for a dedicated import server to support the company’s transition to cloud-based architecture.',
      'Extended importer capabilities by adding support for data sources including Amazon S3, SharePoint, and Git.',
    ],
  },
  {
    company: 'Optum',
    logo: require('../../assets/Logos/Optum.png'),
    linkedIn: 'https://www.linkedin.com/company/optum/',
    role: 'Software Engineering Intern',
    team: '',
    period: 'Jun 2022 – Aug 2022',
    summary: 'Healthcare technology',
    technologies: ['Bootstrap', 'SQL', 'jQuery', 'APIs'],
    highlights: [
      'Full-stack developed an internal website for 2,500+ end-users using Bootstrap, SQL, jQuery, and various APIs to improve user experience and streamline internal processes, resulting in ~$250,000 in annual savings.',
      'Presented work biweekly to senior leadership in a “shark-tank” format through live demos and presentations.',
      'Integrated financial forecasting, enabling the company to track project costs and improve budget management.',
    ],
  },
  {
    company: 'Ohio State University',
    logo: require('../../assets/Logos/OhioState.png'),
    linkedIn: 'https://www.linkedin.com/school/the-ohio-state-university/',
    role: 'Data Scientist',
    team: 'Columbus, OH',
    period: 'May 2022 – Aug 2022',
    summary: 'College of Materials Science',
    technologies: ['TensorFlow', 'Python', 'Deep Learning', 'Dream3D', 'GANs'],
    highlights: [
      'Applied TensorFlow and deep learning to model crystallographic symmetries within synthetic microstructures.',
      'Enhanced the architecture of a Wasserstein Generative Adversarial Network to handle higher-dimensional data.',
      'Streamlined synthetic data generation by developing an efficient pipeline using Dream3D and Python, enabling the creation of 10,000+ unique microstructure slices for network training.',
    ],
  },
]

const getRoleId = (exp) =>
  `${exp.company}-${exp.period}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

const getTimelineYear = (period) => {
  const years = [...period.matchAll(/\d{4}/g)].map((match) => match[0])
  if (years.length === 0) return ''
  if (/present/i.test(period)) return years[0]
  if (years.length === 1 || years[0] === years[1]) return years[0]
  return `${years[0]}–${years[1].slice(2)}`
}

const INITIAL_OPEN_ID = getRoleId(
  roles.find((role) => role.current) ?? roles[0]
)

const Experience = () => {
  const [openId, setOpenId] = useState(INITIAL_OPEN_ID)

  const toggle = (id) => {
    setOpenId((current) => (current === id ? null : id))
  }

  return (
    <section id="experience" className="experience">
      <div className="container">
        <p className="section-label">experience</p>
        <h2 className="section-heading">Where I&apos;ve worked</h2>
        <p className="section-lede">
          Product at Insurify, data at Vanguard, and engineering internships —
          click a role to see what I&apos;ve worked on.
        </p>

        <ol className="experience__timeline">
          {roles.map((exp) => {
            const id = getRoleId(exp)
            const isOpen = openId === id
            const year = getTimelineYear(exp.period)

            return (
              <li
                key={id}
                className={`experience__item ${exp.current ? 'experience__item--current' : ''} ${isOpen ? 'experience__item--open' : ''}`}
              >
                <time className="experience__year" dateTime={year.slice(0, 4)}>
                  {year}
                </time>
                <div className="experience__marker" aria-hidden="true" />
                <div className="experience__card">
                  <button
                    type="button"
                    className="experience__trigger"
                    aria-expanded={isOpen}
                    aria-controls={`experience-panel-${id}`}
                    id={`experience-trigger-${id}`}
                    onClick={() => toggle(id)}
                  >
                    <div className="experience__top">
                      <span className="experience__logo-wrap">
                        <img src={exp.logo} alt="" className="experience__logo" />
                      </span>
                      <div className="experience__heading">
                        <div className="experience__title-row">
                          <h3>{exp.role}</h3>
                          {exp.current && <span className="experience__badge">Current</span>}
                        </div>
                        <p className="experience__company">
                          {exp.company}
                          {exp.team ? ` · ${exp.team}` : ''}
                        </p>
                        <p className="experience__period">{exp.period}</p>
                        {exp.summary && (
                          <p className="experience__summary">{exp.summary}</p>
                        )}
                      </div>
                      <span className="experience__chevron" aria-hidden="true" />
                    </div>
                  </button>

                  <div
                    id={`experience-panel-${id}`}
                    role="region"
                    aria-labelledby={`experience-trigger-${id}`}
                    className={`experience__panel ${isOpen ? 'is-open' : ''}`}
                    aria-hidden={!isOpen}
                  >
                    <div className="experience__panel-inner">
                      <ul className="experience__highlights">
                        {exp.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <div className="experience__panel-footer">
                        <ul className="experience__technologies">
                          {exp.technologies.map((tech) => (
                            <li
                              key={tech}
                              className={`${tech.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '').replace(/\+/g, 'p')}-tag`}
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                        <a
                          href={exp.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="experience__company-link"
                          tabIndex={isOpen ? 0 : -1}
                        >
                          View company
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default Experience
