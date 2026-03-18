import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import projectsData from "../content/projects.json";
import toolkitContent from "../content/toolkit.json";

// Import technology logos
import cssLogo from "../assets/images/css3-plain.svg";
import eslintLogo from "../assets/images/eslint-plain.svg";
import figmaLogo from "../assets/images/figma-original.svg";
import gitLogo from "../assets/images/git-original.svg";
import githubLogo from "../assets/images/github-original.svg";
import htmlLogo from "../assets/images/html5-plain-wordmark.svg";
import javascriptLogo from "../assets/images/javascript-plain.svg";
import jestLogo from "../assets/images/jest-plain.svg";
import jiraLogo from "../assets/images/jira-original.svg";
import jsonLogo from "../assets/images/json-plain.svg";
import photoshopLogo from "../assets/images/photoshop-plain.svg";
import reactLogo from "../assets/images/react-original.svg";
import tailwindLogo from "../assets/images/tailwindcss-original.svg";
import webpackLogo from "../assets/images/webpack-plain.svg";
import xmlLogo from "../assets/images/xml-plain.svg";
import apiLogo from "../assets/images/api.svg";
import responsiveLogo from "../assets/images/responsive.svg";

function Toolkit({ selectedTechs, setSelectedTechs }) {
  const { language } = useLanguage();
  const { projects } = projectsData;
  const content = toolkitContent[language] || toolkitContent.en;

  const techLogos = {
    CSS: cssLogo,
    ESLint: eslintLogo,
    Figma: figmaLogo,
    Git: gitLogo,
    GitHub: githubLogo,
    HTML: htmlLogo,
    JavaScript: javascriptLogo,
    Jest: jestLogo,
    Jira: jiraLogo,
    JSON: jsonLogo,
    Photoshop: photoshopLogo,
    React: reactLogo,
    "Tailwind CSS": tailwindLogo,
    Webpack: webpackLogo,
    XML: xmlLogo,
    "API Integration": apiLogo,
    "Responsive Design": responsiveLogo,
  };
  // Extract all unique tags from all projects, excluding 'Game'
  const allTags = projects.flatMap((project) => project.tags);
  const uniqueTechnologies = [...new Set(allTags)]
    .filter((tech) => tech !== "Game")
    .sort();

  const handleTechClick = (tech) => {
    // If tech is already selected, remove it
    if (selectedTechs.includes(tech)) {
      setSelectedTechs(selectedTechs.filter((t) => t !== tech));
    } else {
      // Add tech to selected array
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  return (
    <div className="toolkit-section">
      <div className="section-container">
        <h2>{content.myToolkit}</h2>
        <div className="section-content-wrapper">
          <div className="technologies-grid">
            {uniqueTechnologies.map((tech, index) => (
              <button
                key={index}
                className={`technology-item ${
                  selectedTechs.includes(tech) ? "selected" : ""
                }`}
                onClick={() => handleTechClick(tech)}
                aria-pressed={selectedTechs.includes(tech)}
                aria-label={`${selectedTechs.includes(tech) ? "Deselect" : "Select"} ${tech} technology`}
              >
                {techLogos[tech] && (
                  <img
                    src={techLogos[tech]}
                    alt={`${tech} logo`}
                    className="technology-logo"
                    data-tech={tech.toLowerCase().replace(/\s+/g, "-")}
                  />
                )}
                <span className="technology-name">{tech}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toolkit;
