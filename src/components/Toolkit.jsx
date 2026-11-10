import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/languageContext";
import projectsData from "../content/projects.json";
import toolkitContent from "../content/toolkit.json";
import techLogos from "../content/techLogos";

function MobileFilterOption({ tech, isSelected, isProjectType, onToggle }) {
  return (
    <label
      className={`toolkit-mobile-option ${isProjectType ? "mobile-project-type-option" : ""} ${isSelected ? "selected" : ""}`}
    >
      <input
        type="checkbox"
        checked={isSelected}
        onChange={() => onToggle(tech)}
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
}

function Toolkit({
  selectedTechs,
  setSelectedTechs,
  embedded = false,
  desktopExpanded = false,
}) {
  const { language } = useLanguage();
  const [isDesktop, setIsDesktop] = useState(false);
  const { projects } = projectsData;
  const content = toolkitContent[language] || toolkitContent.en;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 871px)");
    const updateViewport = () => setIsDesktop(mediaQuery.matches);

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

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

  const renderMobileOption = (tech) => (
    <MobileFilterOption
      key={`mobile-${tech}`}
      tech={tech}
      isSelected={selectedTechs.includes(tech)}
      isProjectType={projectTypeFilters.includes(tech)}
      onToggle={handleTechClick}
    />
  );

  const filterLabel = content.filterLabel || "Filter projects";
  const filterAll = content.filterAll || "All projects";
  const filterByType = content.filterByType || "by type";
  const filterByTech = content.filterByTech || "by tech";
  const filterExpand = content.filterExpand || "Open";
  const filterCollapse = content.filterCollapse || "Collapse";

  const mobileFilterMenu = (
    <div className="toolkit-mobile-filter" aria-label={filterLabel}>
      <details
        className="toolkit-mobile-menu"
        open={desktopExpanded && isDesktop ? true : undefined}
      >
        <summary className="toolkit-mobile-summary">
          <span className="toolkit-mobile-summary-label">{filterLabel}</span>
          <span className="toolkit-mobile-toggle-btn" aria-hidden="true">
            <span className="toolkit-mobile-toggle-open">{filterExpand}</span>
            <span className="toolkit-mobile-toggle-close">
              {filterCollapse}
            </span>
          </span>
        </summary>
        <div className="toolkit-mobile-menu-panel">
          <div className="toolkit-mobile-group toolkit-mobile-all-group">
            <div className="toolkit-mobile-group-options">
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
            </div>
          </div>

          <div className="toolkit-mobile-group">
            <span className="toolkit-mobile-group-label">{filterByType}</span>
            <div className="toolkit-mobile-group-options">
              {projectTypeFilters.map(renderMobileOption)}
            </div>
          </div>

          <div className="toolkit-mobile-group">
            <span className="toolkit-mobile-group-label">{filterByTech}</span>
            <div className="toolkit-mobile-group-options">
              {uniqueTechnologies.map(renderMobileOption)}
            </div>
          </div>
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
