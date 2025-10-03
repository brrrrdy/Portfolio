import cardContent from "../content/portfolioText.json";
import projectsData from "../content/projects.json";
import { createProjectCard } from "./projectCard.js";

export function portfolio() {
  const portfolio = document.createElement("div");
  portfolio.className = "section-container";

  const textContainer = document.createElement("div");
  textContainer.className = "section-content";

  const text1 = document.createElement("div");
  text1.textContent = cardContent.cardTitle;
  text1.className = "section-title";

  const text2 = document.createElement("div");
  text2.textContent = cardContent.cardText;
  text2.className = "section-subtitle";

  textContainer.appendChild(text1);
  textContainer.appendChild(text2);

  // Add project cards container
  const projectsContainer = document.createElement("div");
  projectsContainer.className = "mt-8 space-y-6";

  // Generate project cards from JSON data
  projectsData.projects.forEach(project => {
    const projectCard = createProjectCard({
      title: project.title,
      description: project.description,
      image: project.image,
      tags: project.tags
    });
    projectsContainer.appendChild(projectCard);
  });

  textContainer.appendChild(projectsContainer);
  portfolio.appendChild(textContainer);

  return portfolio;
}
