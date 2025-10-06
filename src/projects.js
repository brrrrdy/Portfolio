import "./styles.css";
import { TopNavBar } from "./components/topNav.js";
import { allProjects } from "./components/allProjects.js";
import { FooterNav } from "./components/footer.js";

// Create the projects page layout
function createProjectsPage() {
  const body = document.body;
  body.innerHTML = ""; // Clear existing content
  body.className = "bg-red-100 min-h-screen flex flex-col";
  
  // Add components
  const nav = TopNavBar();
  const main = allProjects();
  const footer = FooterNav();
  
  // Add flex-grow to main content to push footer down
  main.style.flexGrow = "1";
  
  body.appendChild(nav);
  body.appendChild(main);
  body.appendChild(footer);
}

// Initialize the projects page
createProjectsPage();