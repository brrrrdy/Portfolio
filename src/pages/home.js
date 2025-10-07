import { TopNavBar } from "../components/topNav.js";
import { header } from "../components/header.js";
import { portfolio } from "../components/portfolioProjects.js";
import { aboutCard} from "../components/about.js";
import { toolkit } from "../components/toolkit.js";
import { contact } from "../components/contact.js";
import { FooterNav } from "../components/footer.js";

/**
 * Homepage component
 * @returns {HTMLElement} Homepage element
 */
export function HomePage() {
  const container = document.createElement('div');
  container.className = 'min-h-screen flex flex-col';

  // anchor for top navigation
  const topAnchor = document.createElement('div');
  topAnchor.id = 'top';
  topAnchor.style.height = '1px';
  topAnchor.style.width = '100%';
  topAnchor.style.position = 'relative';
  container.appendChild(topAnchor);

  try {
    // Add all homepage components
    container.appendChild(TopNavBar());
    container.appendChild(header());
    container.appendChild(aboutCard());
    container.appendChild(portfolio());
    container.appendChild(toolkit());
    container.appendChild(contact());
    container.appendChild(FooterNav());
    
    return container;
  } catch (error) {
    console.error('Error rendering homepage:', error);
    throw error;
  }
}