import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../contexts/languageContext";
import { projectImages } from "../../assets/images/projectImages";

function Card({ project }) {
  const { language } = useLanguage();
  const [isInFocus, setIsInFocus] = useState(false);
  const cardRef = useRef(null);

  // Get the imported image for this project
  const projectImage = projectImages[project.id];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Card is in focus when it's intersecting
          setIsInFocus(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5, // Card is focused when 50% visible
        rootMargin: "-20% 0px -20% 0px", // Focus area is center 60% of viewport
      },
    );

    const currentCard = cardRef.current;

    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, []);

  const homepageUrl = project.ghPage?.[0];

  return (
    <div className={`card ${isInFocus ? "in-focus" : ""}`} ref={cardRef}>
      <a
        href={homepageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        {projectImage ? (
          <img
            src={projectImage}
            alt={project.title[language] || project.title.en}
          />
        ) : (
          <div className="image-placeholder">
            <span>No Image Available</span>
          </div>
        )}
      </a>
      <a
        href={homepageUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="project-title-link"
      >
        <h3>{project.title[language] || project.title.en}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="14px"
          viewBox="0 -960 960 960"
          width="14px"
          fill="currentColor"
          className="open-in-new-icon"
        >
          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z" />
        </svg>
      </a>
      <p>{project.description[language] || project.description.en}</p>
      <div className="tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
