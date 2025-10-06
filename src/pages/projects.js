import { TopNavBar } from "../components/topNav.js";
import { allProjects } from "../components/allProjects.js";
import { FooterNav } from "../components/footer.js";

/**
 * Projects page component
 * @returns {HTMLElement} Projects page element
 */
export function ProjectsPage() {
  const container = document.createElement('div');
  container.className = 'min-h-screen flex flex-col';
  
  try {
    // Add projects page components
    container.appendChild(TopNavBar());
    container.appendChild(allProjects());
    container.appendChild(FooterNav());
    
    return container;
  } catch (error) {
    console.error('Error rendering projects page:', error);
    throw error;
  }
}