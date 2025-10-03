import cardContent from "../content/portfolioText.json";
import projectsData from "../content/projects.json";
import { createProjectCard } from "./projectCard.js";
import weatherAppImg from "../assets/images/WeatherApp.png";
import adminDashboardImg from "../assets/images/AdminDash.png";
import calcImg from "../assets/images/calculator.png";

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

  // Image mapping for projects
  const imageMap = {
    1: weatherAppImg, // Weather App
    2: adminDashboardImg,
    3: calcImg,
  };

  // Generate project cards from JSON data
  projectsData.projects.forEach(project => {
    const projectCard = createProjectCard({
      title: project.title,
      description: project.description,
      image: imageMap[project.id] || project.image,
      tags: project.tags
    });
    projectsContainer.appendChild(projectCard);
  });

  textContainer.appendChild(projectsContainer);
  portfolio.appendChild(textContainer);

  return portfolio;
}
