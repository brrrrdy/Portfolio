import { useLanguage } from "../components/LanguageContext";
import githubIcon from "../assets/images/github-original.svg?url";
import openInNewIcon from "../assets/images/open_in_new_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg?url";

function TableBasic({ projects, content }) {
  const { language } = useLanguage();

  return (
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
                  <img
                    src={openInNewIcon}
                    alt="Opens in new window"
                    className="open-in-new-icon"
                  />
                </a>
              </td>
              <td className="description-cell">
                {project.description[language] || project.description.en}
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
                  aria-label={`View live demo of ${project.title[language] || project.title.en} (opens in new window)`}
                >
                  <img src={githubIcon} alt="GitHub" className="github-icon" />
                  <img
                    src={openInNewIcon}
                    alt="Opens in new window"
                    className="open-in-new-icon"
                  />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableBasic;
