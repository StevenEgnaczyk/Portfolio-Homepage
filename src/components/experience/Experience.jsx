import React from 'react'
import './experience.css'

const Experience = () => {
  const currentExperience = {
    company: "Insurify",
    logo: require("../../assets/Logos/Insurify.png"),
    role: "Business Data Analyst",
    period: "June 2025 - Present",
    technologies: ["Python", "SQL", "Mode", "Hex", "MixPanel", "Figma", "Front", "Asana", "Growthbook"],
  };

  const previousExperiences = [
    {
      company: "Vanguard",
      logo: require("../../assets/Logos/Vanguard.png"),
      role: "Data Scientist",
      period: "October 2023 - May 2025",
      technologies: ["Python", "Amazon SageMaker", "TensorFlow", "Pandas", "Scikit-learn", "Machine Learning", "Data Analysis", "Data Visualization"],
    },
    {
      company: "Ohio State University",
      logo: require("../../assets/Logos/OhioState.png"),
      role: "Graduate Teaching Associate",
      period: "June 2024 - June 2025",
      technologies: ["Java", "JUnit"],
    },
    {
      company: "Ab Initio",
      logo: require("../../assets/Logos/AbInitio.png"),
      role: "Software Engineering Intern",
      period: "Summer 2023",
      technologies: ["Java", "Python", "Shell", "Jenkins", "GitHub", "Jira"],
    },
    {
      company: "Optum",
      logo: require("../../assets/Logos/Optum.png"),
      role: "Software Engineering Intern",
      period: "Summer 2022",
      description: "Built healthcare analytics tools and dashboards for clinical data analysis. Developed cloud-based solutions for processing medical claims and patient data.",
      technologies: ["Java", "React", "Node js", "PostgreSQL", "Figma"],
      achievements: ["Developed analytics dashboard for 10,000+ healthcare providers", "Improved data processing efficiency by 30%", "Implemented secure data handling protocols"]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h1>Professional Experience</h1>
      
      {/* Current Role - Featured */}
      <div className="experience__current">
        <div className="experience__card experience__card--current">
          <div className="experience__logo">
            <img src={currentExperience.logo} alt={`${currentExperience.company} logo`} />
            <h3>{currentExperience.company}</h3>
            <p className="experience__role">{currentExperience.role}</p>
            <p className="experience__period-preview">{currentExperience.period}</p>
          </div>
          
          <div className="experience__current-details">
            <div className="experience__technologies">
              <h5>Technologies:</h5>
              <ul>
                {currentExperience.technologies.map((tech, index) => (
                  <li key={index} className={`${tech.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '\\.').replace(/\+/g, '\\+')}-tag`}>{tech}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Experiences */}
      <div className="experience__previous">
        <h3 className="experience__previous-title">Previous Experience</h3>
        <div className="experience__grid experience__grid--previous">
          {previousExperiences.map((exp, index) => (
            <div key={index} className="experience__card">
              <div className="experience__logo">
                <img src={exp.logo} alt={`${exp.company} logo`} />
                <h3>{exp.company}</h3>
                <p className="experience__role">{exp.role}</p>
                <p className="experience__period-preview">{exp.period}</p>
              </div>
              
              <div className="experience__card-content">
                <div className="experience__technologies">
                  <h5>Technologies:</h5>
                  <ul>
                    {exp.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className={`${tech.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '\\.').replace(/\+/g, '\\+')}-tag`}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience