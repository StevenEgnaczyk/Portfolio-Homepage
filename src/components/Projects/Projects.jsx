import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import "./Projects.css";

const projectsData = [
  {
    title: "Spotify Genie",
    category: "machine-learning",
    description: "Machine learning project that uses user playlists, song lyrics, and machine learning to recommend songs based on user preferences.",
    tags: ["Python", "Flask", "React", "Docker", "API", "Tensorflow"],
    images: [
      require("../../assets/Projects/SpotifyGenie/SpotifyGenie_1.png"),
      require("../../assets/Projects/SpotifyGenie/SpotifyGenie_2.png"),
      require("../../assets/Projects/SpotifyGenie/SpotifyGenie_3.png"),
    ],
    githubLink: "https://github.com/LukeAMcSherry/CSE5914-SpotifyGroup",
    demoLink: "",
    dates: { start: new Date(2024, 0), end: new Date(2024, 4) }
  },
  {
    title: "Sorting Visualizer",
    category: "software-development",
    description: "Sorting algorithm visualizer that displays the process of sorting algorithms in real-time.",
    tags: ["Java"],
    images: [
      require("../../assets/Projects/SortingAlgorithmVisualizer/SortingAlgorithmVisualizer_1.png"),
      require("../../assets/Projects/SortingAlgorithmVisualizer/SortingAlgorithmVisualizer_2.png"),
      require("../../assets/Projects/SortingAlgorithmVisualizer/SortingAlgorithmVisualizer_3.png"),
      require("../../assets/Projects/SortingAlgorithmVisualizer/SortingAlgorithmVisualizer_4.png"),
    ],
    githubLink: "https://github.com/StevenEgnaczyk/Sorting-Algorithm-Visualizer",
    demoLink: "",
    dates: { start: new Date(2019, 11), end: new Date(2020, 5) }
  },
  {
    title: "Legend of Zelda Game",
    category: "software-development",
    description: "Recreation of the first Legend of Zelda Dungeon using C++.",
    tags: ["C++"],
    images: [
      require("../../assets/Projects/LegendOfZelda/LOZ_3.png"),
      require("../../assets/Projects/LegendOfZelda/LOZ_2.png"),
      require("../../assets/Projects/LegendOfZelda/LOZ_1.png"),
    ],
    githubLink: "https://github.com/StevenEgnaczyk/Legend-of-Zelda-Game",
    demoLink: "",
    dates: { start: new Date(2022, 8), end: new Date(2022, 11) }
  },
  {
    title: "NBA Stats API",
    category: "data-science",
    description: "API that retrieves NBA team statistics and displays them in a user-friendly format.",
    tags: ["Python", "API", "Matplotlib", "Render"],
    images: [
      require("../../assets/Projects/NBA API/nba_1.png"),
      require("../../assets/Projects/NBA API/nba_2.png"),
      require("../../assets/Projects/NBA API/nba_3.png"),
    ],
    githubLink: "https://github.com/StevenEgnaczyk/NBA-Statistics-Visualizer",
    demoLink: "/nba-api",
    dates: { start: new Date(2024, 7), end: new Date(2024, 8) }
  },
  {
    title: "NullPointerException",
    category: "other",
    description: "Educational Computer Science YouTube channel specializing in general-purpose lectures.",
    tags: ["YouTube"],
    images: [
      require("../../assets/Projects/NullPointerException/NullPointerException_1.png"),
      require("../../assets/Projects/NullPointerException/NullPointerException_2.png"),
      require("../../assets/Projects/NullPointerException/NullPointerException_3.png"),
    ],
    githubLink: "",
    demoLink: "https://www.youtube.com/channel/UCmWDlvMYYEbW42B8JyFBcA",
    dates: { start: new Date(2019, 5), end: new Date(2022, 5) }
  },
  {
    title: "Portfolio Homepage",
    category: "software-development",
    description: "Website to host my portfolio of projects and information.",
    tags: ["Flask", "React", "Vercel"],
    images: [
      require("../../assets/Projects/Portfolio Homepage/Portfolio_1.png"),
      require("../../assets/Projects/Portfolio Homepage/Portfolio_2.png"),
      require("../../assets/Projects/Portfolio Homepage/Portfolio_3.png"),
    ],
    githubLink: "https://github.com/StevenEgnaczyk/Portfolio-Homepage",
    demoLink: "https://www.stevenegg.com",
    dates: { start: new Date(2024, 7), end: new Date(2024, 9) }
  },
  {
    title: "DataBaseD",
    category: "software-development",
    description: "Online Database to store old study guides, notes, and other educational material.",
    tags: ["React", "Firebase", "Firestore"],
    images: [
      require("../../assets/Projects/Databased/Databased_1.png"),
      require("../../assets/Projects/Databased/Databased_2.png"),
      require("../../assets/Projects/Databased/Databased_3.png"),
    ],
    githubLink: "https://github.com/StevenEgnaczyk/DatabaseD",
    demoLink: "",
    dates: { start: new Date(2024, 9), end: new Date(2024, 9) }
  },
  {
    title: "LockedIn",
    category: "software-development",
    description: "LinkedIn network visualization tool that allows users to explore their connections using react force graph.",
    tags: ["React", "Firestore", "Firebase", "Hackathon"],
    images: [
      require("../../assets/Projects/LockedIn/LockedIn-1.png"),
      require("../../assets/Projects/LockedIn/LockedIn-2.png"),
      require("../../assets/Projects/LockedIn/LockedIn-3.png"),
    ],
    githubLink: "https://github.com/StevenEgnaczyk/LockedIn",
    demoLink: "/locked-in",
    dates: { start: new Date(2024, 9), end: new Date(2024, 9) }
  },
];

projectsData.sort((a, b) => b.dates.end - a.dates.end);

const Project = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + project.images.length) % project.images.length);
  };

  const formatDate = (date) => {
    return date instanceof Date && !isNaN(date)
      ? `${date.toLocaleString("default", { month: "short" })} ${date.getFullYear()}`
      : "Present";
  };

  return (
    <div className={`project show ${project.category}`}>
      <h2 className="project-title">{project.title}</h2>
      <p className="project-dates">
        {formatDate(project.dates.start)} - {formatDate(project.dates.end)}
      </p>
      <div className="tags-container">
        {project.tags.map(tag => (
          <span key={tag} className={`tag ${tag.toLowerCase().replace(/\s+/g, '-')}-tag`}>{tag}</span>
        ))}
      </div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src={project.images[currentSlide]} alt={project.title} className="project-img" />
        </div>
        <a className="prev" onClick={prevSlide}>&#10094;</a>
        <a className="next" onClick={nextSlide}>&#10095;</a>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="btn-container">
        {project.githubLink && (
          <button className="btn github-btn" onClick={() => window.location.href = project.githubLink}>
            GitHub
          </button>
        )}
        {project.demoLink && (
          <button className="btn btn-primary" onClick={() => navigation.navigate(project.demoLink)}>
            Live Demo
          </button>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(6);

  useEffect(() => {
    const updateProjectsPerPage = () => {
      if (window.innerWidth > 1200) {
        setProjectsPerPage(6); // 3 columns × 2 rows
      } else if (window.innerWidth > 600) {
        setProjectsPerPage(4); // 2 columns × 2 rows
      } else {
        setProjectsPerPage(2); // 1 column × 2 rows
      }
    };

    updateProjectsPerPage();
    window.addEventListener('resize', updateProjectsPerPage);
    return () => window.removeEventListener('resize', updateProjectsPerPage);
  }, []);

  const handleTabChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const filteredProjects = projectsData.filter(
    project => selectedCategory === "all" || project.category === selectedCategory
  );
  
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section id="projects">
      <h1 className="title">Projects</h1>
      <div className="projects-container">
        <div className="project-tabs">
          <input type="radio" id="all" name="category" checked={selectedCategory === "all"} onChange={() => handleTabChange("all")} />
          <label htmlFor="all" className="checkbox-label">All</label>

          <input type="radio" id="data-science" name="category" checked={selectedCategory === "data-science"} onChange={() => handleTabChange("data-science")} />
          <label htmlFor="data-science" className="checkbox-label">Data Science</label>

          <input type="radio" id="machine-learning" name="category" checked={selectedCategory === "machine-learning"} onChange={() => handleTabChange("machine-learning")} />
          <label htmlFor="machine-learning" className="checkbox-label">Machine Learning</label>

          <input type="radio" id="software-development" name="category" checked={selectedCategory === "software-development"} onChange={() => handleTabChange("software-development")} />
          <label htmlFor="software-development" className="checkbox-label">Software Development</label>

          <input type="radio" id="other" name="category" checked={selectedCategory === "other"} onChange={() => handleTabChange("other")} />
          <label htmlFor="other" className="checkbox-label">Other</label>
        </div>

        <div className="projects">
          {currentProjects.map(project => (
            <Project key={project.title} project={project} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button 
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>{currentPage} of {totalPages}</span>
            <button 
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
