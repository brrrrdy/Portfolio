import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/languageContext";
import projectsData from "../content/projects.json";
import Card from "./ui/Card";
import Toolkit from "./Toolkit";

function Projects() {
  const { language } = useLanguage();
  const { projects } = projectsData;
  const ui = projectsData.ui[language] || projectsData.ui.en;
  const [selectedTechs, setSelectedTechs] = useState([]);

  const matchesSelectedFilter = (project, filter) => {
    if (filter === "Game") {
      return project.tags.includes("Game");
    }

    if (filter === "Website") {
      return !project.tags.includes("Game");
    }

    return project.tags.includes(filter);
  };

  // shuffle array and get random projects
  const getRandomProjects = (projectsArray, count) => {
    const shuffled = [...projectsArray].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  let displayProjects;
  const galleryTitle = ui.myProjects;

  if (selectedTechs && selectedTechs.length > 0) {
    // filter projects that include all selected techs
    const filteredProjects = projects.filter((project) =>
      selectedTechs.every((tech) => matchesSelectedFilter(project, tech)),
    );
    displayProjects = getRandomProjects(filteredProjects, 4);
  } else {
    // show featured projects by default
    const featuredProjects = projects.filter(
      (project) => project.featured[0] === "y",
    );
    displayProjects = featuredProjects.slice(0, 4);
  }

  return (
    <>
      <div className="projects-gallery">
        <div className="section-container">
          <h2>{galleryTitle}</h2>
          <div className="section-content-wrapper">
            <div id="toolkit" className="projects-toolkit">
              <Toolkit
                selectedTechs={selectedTechs}
                setSelectedTechs={setSelectedTechs}
                embedded
              />
            </div>
            <div className="gallery-grid">
              {displayProjects.map((project) => (
                <Card key={project.id} project={project} />
              ))}
            </div>
            <div className="see-more-container">
              <Link to="/projects" className="btn-primary">
                {ui.seeAllProjects}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
