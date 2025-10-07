import cardContent from "../content/portfolioText.json";
import projectsData from "../content/projects.json";
import { createProjectCard } from "./projectCard.js";
import weatherAppImg from "../assets/images/WeatherApp.png";
import adminDashboardImg from "../assets/images/AdminDash.png";
import calcImg from "../assets/images/calculator.png";
import etchImg from "../assets/images/etch.png";

export function portfolio() {
  const portfolio = document.createElement("div");
  portfolio.className = "section-container scroll-mt-15";
  portfolio.id = "projects";

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

  // Add project cards container with 2-column grid layout
  const projectsContainer = document.createElement("div");
  projectsContainer.className = "mt-8 grid grid-cols-2 gap-6";

  // Image mapping for projects
  const imageMap = {
    1: weatherAppImg, // Weather App
    2: adminDashboardImg,
    3: calcImg,
    10: etchImg, // Etch-a-Sketch
  };

  // Generate project cards from JSON data - show first 4 featured projects
  const featuredProjects = projectsData.projects
    .filter(project => project.featured && project.featured.includes("y"))
    .slice(0, 4); // Limit to 4 projects

  featuredProjects.forEach(project => {
    const projectCard = createProjectCard({
      title: project.title,
      description: project.description,
      image: imageMap[project.id] || project.image,
      tags: project.tags
    });
    projectsContainer.appendChild(projectCard);
  });

  // view all my projects link with arrow SVG at the bottom

  const viewAllContainer = document.createElement("div");
  viewAllContainer.className = "block text-left mt-0";
  
  const viewAllLink = document.createElement("a");
  viewAllLink.href = "/projects"; 
  viewAllLink.className = "inline-flex items-center gap-2 font-semibold text-base text-red-600 hover:text-orange-300 transition-colors duration-300 hover:underline group border-2 border-red-400 p-2.5";
  
  const linkText = document.createElement("span");
  linkText.textContent = "view all my projects";
  
  const arrowSvg = document.createElement("div");
  arrowSvg.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 -960 960 960" class="mt-1 transition-transform duration-300 group-hover:translate-x-1.5"><path d="M504-480 320-664l56-56 240 240-240 240-56-56z"/></svg>`;
  
  viewAllLink.appendChild(linkText);
  viewAllLink.appendChild(arrowSvg);
  viewAllContainer.appendChild(viewAllLink);
  projectsContainer.appendChild(viewAllContainer);

  textContainer.appendChild(projectsContainer);
  portfolio.appendChild(textContainer);

  return portfolio;
}
