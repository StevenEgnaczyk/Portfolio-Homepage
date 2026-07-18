import React, { useState, useEffect } from 'react'
import './Projects.css'

const projectsData = [
  {
    title: 'Spotify Genie',
    category: 'machine-learning',
    description:
      'Recommends songs from playlist signals, lyrics, and machine learning models.',
    tags: ['Python', 'Flask', 'React', 'Docker', 'Tensorflow'],
    images: [
      require('../../assets/Projects/SpotifyGenie/SpotifyGenie_1.png'),
      require('../../assets/Projects/SpotifyGenie/SpotifyGenie_2.png'),
      require('../../assets/Projects/SpotifyGenie/SpotifyGenie_3.png'),
    ],
    githubLink: 'https://github.com/LukeAMcSherry/CSE5914-SpotifyGroup',
    demoLink: '',
    dates: { start: new Date(2024, 0), end: new Date(2024, 4) },
  },
  {
    title: 'Sorting Visualizer',
    category: 'software-development',
    description: 'Real-time visualization of classic sorting algorithms in Java.',
    tags: ['Java'],
    images: [
      require('../../assets/Projects/SortingAlgorithmVisualizer/SortingAlgorithmVisualizer_1.png'),
      require('../../assets/Projects/SortingAlgorithmVisualizer/SortingAlgorithmVisualizer_2.png'),
      require('../../assets/Projects/SortingAlgorithmVisualizer/SortingAlgorithmVisualizer_3.png'),
      require('../../assets/Projects/SortingAlgorithmVisualizer/SortingAlgorithmVisualizer_4.png'),
    ],
    githubLink: 'https://github.com/StevenEgnaczyk/Sorting-Algorithm-Visualizer',
    demoLink: '',
    dates: { start: new Date(2019, 11), end: new Date(2020, 5) },
  },
  {
    title: 'Legend of Zelda Game',
    category: 'software-development',
    description: 'Recreation of the first Legend of Zelda dungeon in C++.',
    tags: ['C++'],
    images: [
      require('../../assets/Projects/LegendOfZelda/LOZ_3.png'),
      require('../../assets/Projects/LegendOfZelda/LOZ_2.png'),
      require('../../assets/Projects/LegendOfZelda/LOZ_1.png'),
    ],
    githubLink: 'https://github.com/StevenEgnaczyk/Legend-of-Zelda-Game',
    demoLink: '',
    dates: { start: new Date(2022, 8), end: new Date(2022, 11) },
  },
  {
    title: 'NBA Stats API',
    category: 'data-science',
    description: 'API and visualizer for NBA team statistics.',
    tags: ['Python', 'API', 'Matplotlib', 'Render'],
    images: [
      require('../../assets/Projects/NBA API/nba_1.png'),
      require('../../assets/Projects/NBA API/nba_2.png'),
      require('../../assets/Projects/NBA API/nba_3.png'),
    ],
    githubLink: 'https://github.com/StevenEgnaczyk/NBA-Statistics-Visualizer',
    demoLink: '/nba-api',
    dates: { start: new Date(2024, 7), end: new Date(2024, 8) },
  },
  {
    title: 'NullPointerException',
    category: 'other',
    description: 'Educational CS YouTube channel with general-purpose lectures.',
    tags: ['YouTube'],
    images: [
      require('../../assets/Projects/NullPointerException/NullPointerException_1.png'),
      require('../../assets/Projects/NullPointerException/NullPointerException_2.png'),
      require('../../assets/Projects/NullPointerException/NullPointerException_3.png'),
    ],
    githubLink: '',
    demoLink: 'https://www.youtube.com/channel/UCmWDlvMYYEbW42B8JyxFBcA',
    dates: { start: new Date(2019, 5), end: new Date(2022, 5) },
  },
  {
    title: 'Portfolio Homepage',
    category: 'software-development',
    description: 'Personal site for projects, experience, and contact.',
    tags: ['React', 'Vercel'],
    images: [
      require('../../assets/Projects/Portfolio Homepage/Portfolio_1.png'),
      require('../../assets/Projects/Portfolio Homepage/Portfolio_2.png'),
      require('../../assets/Projects/Portfolio Homepage/Portfolio_3.png'),
    ],
    githubLink: 'https://github.com/StevenEgnaczyk/Portfolio-Homepage',
    demoLink: 'https://www.stevenegg.com',
    dates: { start: new Date(2024, 7), end: 'Present' },
  },
  {
    title: 'DataBaseD',
    category: 'software-development',
    description: 'Shared library for study guides, notes, and course materials.',
    tags: ['React', 'Firebase', 'Firestore'],
    images: [
      require('../../assets/Projects/Databased/Databased_1.png'),
      require('../../assets/Projects/Databased/Databased_2.png'),
      require('../../assets/Projects/Databased/Databased_3.png'),
    ],
    githubLink: 'https://github.com/StevenEgnaczyk/DatabaseD',
    demoLink: '',
    dates: { start: new Date(2024, 9), end: 'Present' },
  },
  {
    title: 'LockedIn',
    category: 'software-development',
    description: '3D LinkedIn network explorer built with react-force-graph.',
    tags: ['React', 'Firestore', 'Firebase', 'Hackathon'],
    images: [
      require('../../assets/Projects/LockedIn/LockedIn-1.png'),
      require('../../assets/Projects/LockedIn/LockedIn-2.png'),
      require('../../assets/Projects/LockedIn/LockedIn-3.png'),
    ],
    githubLink: 'https://github.com/StevenEgnaczyk/LockedIn',
    demoLink: '/locked-in',
    dates: { start: new Date(2024, 9), end: new Date(2024, 9) },
  },
  {
    title: 'Infinigrams',
    category: 'software-development',
    description: 'Create and play infinite grid-based puzzles in the browser.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    images: [
      require('../../assets/Projects/Infinigrams/Infinigrams_1.png'),
      require('../../assets/Projects/Infinigrams/Infinigrams_2.png'),
      require('../../assets/Projects/Infinigrams/Infinigrams_3.png'),
      require('../../assets/Projects/Infinigrams/Infinigrams_4.png'),
    ],
    githubLink: 'https://github.com/StevenEgnaczyk/infinigrams',
    demoLink: 'https://stevenegnaczyk.github.io/infinigrams',
    dates: { start: new Date(2025, 1), end: 'Present' },
  },
]

projectsData.sort((a, b) => {
  if (a.dates.end === 'Present') return -1
  if (b.dates.end === 'Present') return 1
  return b.dates.end - a.dates.end
})

const categories = [
  { id: 'all', label: 'All' },
  { id: 'data-science', label: 'Data' },
  { id: 'machine-learning', label: 'ML' },
  { id: 'software-development', label: 'Software' },
  { id: 'other', label: 'Other' },
]

const formatDate = (date) => {
  if (date === 'Present') return 'Present'
  return date instanceof Date && !isNaN(date)
    ? `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`
    : 'Present'
}

const Project = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = (e) => {
    e.stopPropagation()
    setCurrentSlide((currentSlide + 1) % project.images.length)
  }

  const prevSlide = (e) => {
    e.stopPropagation()
    setCurrentSlide((currentSlide - 1 + project.images.length) % project.images.length)
  }

  return (
    <article className="project">
      <div className="project__media">
        <img
          src={project.images[currentSlide]}
          alt={project.title}
          className="project__img"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
        {project.images.length > 1 && (
          <div className="project__controls">
            <button type="button" className="project__nav" onClick={prevSlide} aria-label="Previous image">
              ‹
            </button>
            <span className="project__count">
              {currentSlide + 1} / {project.images.length}
            </span>
            <button type="button" className="project__nav" onClick={nextSlide} aria-label="Next image">
              ›
            </button>
          </div>
        )}
      </div>

      <div className="project__body">
        <header className="project__meta">
          <h3 className="project__title">{project.title}</h3>
          <p className="project__dates">
            {formatDate(project.dates.start)} – {formatDate(project.dates.end)}
          </p>
        </header>
        <p className="project__description">{project.description}</p>
        <div className="project__tags">
          {project.tags.map((tag) => (
            <span key={tag} className={`tag ${tag.toLowerCase().replace(/\s+/g, '-')}-tag`}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project__actions">
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {project.demoLink && (
            project.demoLink.startsWith('http') ? (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                Live demo
              </a>
            ) : (
              <a href={project.demoLink}>
                Live demo
              </a>
            )
          )}
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [projectsPerPage, setProjectsPerPage] = useState(6)

  useEffect(() => {
    const updateProjectsPerPage = () => {
      setProjectsPerPage(window.innerWidth > 800 ? 5 : 4)
    }
    updateProjectsPerPage()
    window.addEventListener('resize', updateProjectsPerPage)
    return () => window.removeEventListener('resize', updateProjectsPerPage)
  }, [])

  const handleTabChange = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const filteredProjects = projectsData.filter(
    (project) => selectedCategory === 'all' || project.category === selectedCategory
  )

  const indexOfLastProject = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject)
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-label">projects</p>
        <h2 className="section-heading">Selected work</h2>
        <p className="section-lede">
          Side projects I work on in my free time.
        </p>

        <div className="project-tabs" aria-label="Project categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              aria-pressed={selectedCategory === cat.id}
              className={`project-tab ${selectedCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => handleTabChange(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="projects">
          {currentProjects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              type="button"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              {currentPage} / {totalPages}
            </span>
            <button
              type="button"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
