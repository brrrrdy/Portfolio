import { useEffect } from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";
import { useLanguage } from "./LanguageContext";
import projectsData from "../content/projects.json";
import TableBasic from "../helpers/TableBasic";
import "../styles/allprojects.css";

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
            <TableBasic projects={projects} content={content} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
