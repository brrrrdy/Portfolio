import { useLanguage } from "../contexts/LanguageContext";
import projectsData from "../content/projects.json";
import TableBasic from "../helpers/TableBasic";
import "../styles/allprojects.css";

export default function AllProjects() {
  const { projects, pageCopy } = projectsData;
  const { language } = useLanguage();
  const content = pageCopy[language] || pageCopy.en;

  return (
    <section id="all-projects">
      <div className="projects-container">
        <h1>{content.pageTitle}</h1>
        <div className="intro-box">{content.intro}</div>
        <TableBasic projects={projects} content={content} />
      </div>
    </section>
  );
}
