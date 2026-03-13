import { useEffect } from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";
import { useLanguage } from "./LanguageContext";
import projectsData from "../content/projects.json";
import "../styles/allprojects.css";
import githubIcon from "../assets/images/github-original.svg?url";

export default function AllProjects() {
  const { projects, pageCopy } = projectsData;
  const { language } = useLanguage();
  const content = pageCopy[language] || pageCopy.en;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="app">
      <TopNav />
      <main>
        <section id="all-projects">
          <div className="projects-container">
            <h1>{content.pageTitle}</h1>
            <div className="intro-box">{content.intro}</div>
            <div className="projects-table-wrapper">
              <table className="projects-table">
                <thead>
                  <tr>
                    <th>{content.tableHeaders.title}</th>
                    <th>{content.tableHeaders.description}</th>
                    <th>{content.tableHeaders.tags}</th>
                    <th>{content.tableHeaders.year}</th>
                    <th>{content.tableHeaders.github}</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project.id}>
                      <td>
                        <a
                          href={project.ghPage[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-title-link"
                        >
                          {project.title[language] || project.title.en}
                        </a>
                      </td>
                      <td className="description-cell">
                        {project.description[language] ||
                          project.description.en}
                      </td>
                      <td>
                        <div className="tags-container">
                          {project.tags.map((tag, index) => (
                            <span key={index} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="year-cell">{project.year}</td>

                      <td>
                        <a
                          href={project.HTMLlink[0]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="github-page-link"
                          aria-label={`View live demo of ${project.title[language] || project.title.en}`}
                        >
                          <img
                            src={githubIcon}
                            alt="GitHub"
                            className="github-icon"
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
