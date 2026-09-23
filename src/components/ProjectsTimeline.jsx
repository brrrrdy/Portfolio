import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/languageContext";
import projectsData from "../content/projects.json";
import { projectImages } from "../assets/images/projectImages";
import Section from "./ui/Section";
import Toolkit from "./Toolkit";

function ProjectsTimeline() {
  const { language } = useLanguage();
  const ui = projectsData.ui[language] || projectsData.ui.en;
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const matchesFilter = (project, filter) => {
    if (filter === "Game") {
      return project.tags.includes("Game");
    }

    if (filter === "Website") {
      return !project.tags.includes("Game");
    }

    return project.tags.includes(filter);
  };

  const filteredProjects = projectsData.projects
    .filter((project) =>
      selectedTechs.every((filter) => matchesFilter(project, filter)),
    )
    .sort(
      (firstProject, secondProject) => secondProject.year - firstProject.year,
    );
  const visibleProjects = isExpanded
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  return (
    <Section title={ui.myProjects} className="projects-timeline-section">
      <div className="projects-timeline-layout">
        <div className="projects-timeline-content">
          <div className="projects-timeline">
            {visibleProjects.map((project, index) => {
              const title = project.title[language] || project.title.en;
              const description =
                project.description[language] || project.description.en;
              const projectImage = projectImages[project.id];
              const projectUrl = project.ghPage?.[0] || project.HTMLlink?.[0];
              const isFirstProjectInYear =
                index === 0 || visibleProjects[index - 1].year !== project.year;

              return (
                <article className="timeline-item" key={project.id}>
                  <div
                    className={`timeline-year ${isFirstProjectInYear ? "" : "timeline-year-repeat"}`}
                  >
                    {project.year}
                  </div>
                  <div className="timeline-entry">
                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-thumbnail-link"
                    >
                      {projectImage ? (
                        <img src={projectImage} alt={`${title} preview`} />
                      ) : (
                        <span className="timeline-thumbnail-placeholder">
                          No image
                        </span>
                      )}
                    </a>
                    <div className="timeline-details">
                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline-title"
                      >
                        {title}
                      </a>
                      <p className="timeline-description">{description}</p>
                      <div className="timeline-tags">
                        {project.tags.map((tag) => (
                          <span className="timeline-tag" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
            {filteredProjects.length > 4 && (
              <button
                type="button"
                className="timeline-expand-arrow"
                onClick={() => setIsExpanded((expanded) => !expanded)}
                aria-label={
                  isExpanded ? "Show fewer projects" : "Show all projects"
                }
                aria-expanded={isExpanded}
              >
                <span
                  className="timeline-expand-icon material-icons"
                  aria-hidden="true"
                >
                  {isExpanded ? "expand_less" : "expand_more"}
                </span>
                <span className="timeline-expand-label">
                  {isExpanded ? "show fewer projects" : "show more projects"}
                </span>
              </button>
            )}
          </div>
        </div>
        <div className="projects-timeline-toolkit">
          <Toolkit
            selectedTechs={selectedTechs}
            setSelectedTechs={setSelectedTechs}
            desktopExpanded
            embedded
          />
          <div className="timeline-see-more">
            <Link to="/projects" className="btn-primary">
              {ui.seeAllProjects}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ProjectsTimeline;
