import React, { useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Spotify Genie",
    category: "machine-learning",
    description: "Machine learning project that uses user playlists, song lyrics, and machine learning to recommend songs based on user preferences.",
    tags: ["Python", "Flask", "React", "Docker", "API Usage", "Tensorflow"],
    images: [
      "../../assets/Projects/SpotifyGenie/SpotifyGenie_1.png",
      "../../assets/Projects/SpotifyGenie/SpotifyGenie_2.png",
      "../../assets/Projects/SpotifyGenie/SpotifyGenie_3.png",
    ],
    githubLink: "https://github.com/LukeAMcSherry/CSE5914-SpotifyGroup",
    demoLink: ""
  },
  {
    title: "Sorting Visualizer",
    category: "software-development",
    description: "Sorting algorithm visualizer that displays the process of sorting algorithms in real-time.",
    tags: ["Java"],
    images: [
      "../../assets/Projects/SortingAlgorithmVisualizer/SortingAlgorithmVisualizer_1.png",
      "../../assets/Projects/SortingAlgorithmVisualizer/SortingAlgorithmVisualizer_2.png",
      "../../assets/Projects/SortingAlgorithmVisualizer/SortingAlgorithmVisualizer_3.png",
      "../../assets/Projects/SortingAlgorithmVisualizer/SortingAlgorithmVisualizer_4.png",
    ],
    githubLink: "https://github.com/",
    demoLink: "https://github.com/"
  },
  {
    title: "Legend of Zelda Game",
    category: "software-development",
    description: "Recreation of the first Legend of Zelda Dungeon using C++.",
    tags: ["C++"],
    images: [
      "../../assets/Projects/LegendOfZelda/LOZ_3.png",
      "../../assets/Projects/LegendOfZelda/LOZ_2.png",
      "../../assets/Projects/LegendOfZelda/LOZ_1.png",
    ],
    githubLink: "https://github.com/",
    demoLink: "https://github.com/"
  },
  {
    title: "NBA Stats API",
    category: "data-science",
    description: "API that retrieves NBA team statistics and displays them in a user-friendly format.",
    tags: ["Python", "API Usage", "Matplot Lib"],
    images: [
      "../../assets/Projects/NBA API/nba_1.png",
      "../../assets/Projects/NBA API/nba_2.png",
      "../../assets/Projects/NBA API/nba_3.png",
    ],
    githubLink: "https://github.com/",
    demoLink: "projects/nba-api.html"
  },
  {
    title: "NullPointerException",
    category: "other",
    description: "Educational Computer Science YouTube channel specializing in general-purpose lectures.",
    tags: ["YouTube"],
    images: [
      "../../assets/Projects/NullPointerException/NullPointerException_1.png",
      "../../assets/Projects/NullPointerException/NullPointerException_2.png",
      "../../assets/Projects/NullPointerException/NullPointerException_3.png",
    ],
    githubLink: "https://github.com/",
    demoLink: "https://github.com/"
  }
];

const Project = ({ project }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className={`project show ${project.category}`}>
      <h2 className="project-title">{project.title}</h2>
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
        <button className="btn github-btn" onClick={() => window.location.href = project.githubLink}>
          GitHub
        </button>
        <button className={`btn ${project.demoLink ? "project-btn" : "project-btn-invalid"}`} 
          onClick={() => {
            if (project.demoLink) {
              window.location.href = project.demoLink;
            }
          }}
        >
  Live Demo
</button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleTabChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section id="projects">
      <h1 className="title">Recent Projects</h1>
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
          {projectsData
            .filter(project => selectedCategory === "all" || project.category === selectedCategory)
            .map(project => (
              <Project key={project.title} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;