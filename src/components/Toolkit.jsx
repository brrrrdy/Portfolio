import { useLanguage } from "../contexts/languageContext";
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
import gamepadLogo from "../assets/images/joystick_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import websiteLogo from "../assets/images/globe_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import responsiveLogo from "../assets/images/responsive.svg";

function Toolkit({ selectedTechs, setSelectedTechs, embedded = false }) {
  const { language } = useLanguage();
  const { projects } = projectsData;
  const content = toolkitContent[language] || toolkitContent.en;

  const techLogos = {
    Game: gamepadLogo,
    Website: websiteLogo,
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
  const projectTypeFilters = ["Game", "Website"];
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

  const renderFilterButton = (tech, index) => {
    const isProjectType = projectTypeFilters.includes(tech);

    return (
      <button
        key={`${tech}-${index}`}
        className={`technology-item ${isProjectType ? "project-type-item" : ""} ${selectedTechs.includes(tech) ? "selected" : ""}`}
        onClick={() => handleTechClick(tech)}
        aria-pressed={selectedTechs.includes(tech)}
        aria-label={`${selectedTechs.includes(tech) ? "Deselect" : "Select"} ${tech} technology`}
      >
        {techLogos[tech] && (
          <img
            src={techLogos[tech]}
            alt={`${tech} logo`}
            className={`technology-logo ${isProjectType ? "project-type-logo" : ""}`}
            data-tech={tech.toLowerCase().replace(/\s+/g, "-")}
          />
        )}
        <span className="technology-name">{tech}</span>
      </button>
    );
  };

  const technologyButtons = uniqueTechnologies.map(renderFilterButton);
  const projectTypeButtons = projectTypeFilters.map(renderFilterButton);
  const mobileFilterOptions = [...projectTypeFilters, ...uniqueTechnologies];

  const filterLabel = content.filterLabel || "Filter projects";
  const filterAll = content.filterAll || "All projects";
  const summaryValue =
    selectedTechs.length === 0 ? filterAll : selectedTechs.join(", ");

  const mobileFilterMenu = (
    <div className="toolkit-mobile-filter" aria-label={filterLabel}>
      <details className="toolkit-mobile-menu">
        <summary className="toolkit-mobile-summary">
          <span className="toolkit-mobile-summary-label">{filterLabel}</span>
          <span className="toolkit-mobile-summary-value">{summaryValue}</span>
        </summary>
        <div className="toolkit-mobile-menu-panel">
          <label
            className={`toolkit-mobile-option toolkit-mobile-all-option ${selectedTechs.length === 0 ? "selected" : ""}`}
          >
            <input
              type="checkbox"
              checked={selectedTechs.length === 0}
              onChange={() => setSelectedTechs([])}
              aria-label={filterAll}
            />
            <span className="toolkit-mobile-option-name">{filterAll}</span>
          </label>

          {mobileFilterOptions.map((tech) => {
            const isSelected = selectedTechs.includes(tech);
            const isProjectType = projectTypeFilters.includes(tech);

            return (
              <label
                key={`mobile-${tech}`}
                className={`toolkit-mobile-option ${isProjectType ? "mobile-project-type-option" : ""} ${isSelected ? "selected" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleTechClick(tech)}
                  aria-label={tech}
                />
                {techLogos[tech] && (
                  <img
                    src={techLogos[tech]}
                    alt={`${tech} logo`}
                    className={`toolkit-mobile-option-logo ${isProjectType ? "toolkit-mobile-project-type-logo" : ""}`}
                  />
                )}
                <span className="toolkit-mobile-option-name">{tech}</span>
              </label>
            );
          })}
        </div>
      </details>
    </div>
  );

  if (embedded) {
    return (
      <div className="toolkit-filter">
        {mobileFilterMenu}
        <div className="toolkit-filter-layout">
          <div className="technologies-grid toolkit-filter-grid toolkit-tech-grid">
            {technologyButtons}
          </div>
          <div className="technologies-grid toolkit-filter-grid toolkit-type-grid">
            {projectTypeButtons}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="toolkit-section">
      <div className="section-container">
        <h2>{content.myToolkit}</h2>
        <div className="section-content-wrapper">
          {mobileFilterMenu}
          <div className="toolkit-layout">
            <div className="technologies-grid toolkit-tech-grid">
              {technologyButtons}
            </div>
            <div className="technologies-grid toolkit-type-grid">
              {projectTypeButtons}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toolkit;
