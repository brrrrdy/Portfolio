import "../styles.css";
import { router } from "../utils/router.js";
import { HomePage } from "./home.js";
import { ProjectsPage } from "./projects.js";

/**
 * Initialize the SPA
 */
function initApp() {
  // Set up the main app container
  const main = document.createElement("main");
  main.className = "pt-24"; // Added pt-24 for fixed nav spacing
  main.id = "app";
  
  // Set router container
  router.setContainer(main);
  
  // Register routes
  router.addRoute('/', HomePage, { title: 'Portfolio - Home' });
  router.addRoute('/projects', ProjectsPage, { title: 'Portfolio - All Projects' });
  
  // 404 page
  router.addRoute('*', () => {
    const notFound = document.createElement('div');
    notFound.className = 'flex items-center justify-center min-h-screen';
    notFound.innerHTML = `
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <p class="text-gray-600 mb-4">Page not found</p>
        <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Go Home
        </a>
      </div>
    `;
    return notFound;
  }, { title: 'Portfolio - Page Not Found' });
  
  // Add main to body
  document.body.appendChild(main);
  
  // Handle initial route
  const initialPath = window.location.pathname + window.location.hash;
  router.handleRoute(initialPath);
  
  // Set up navigation event handlers
  setupNavigation();
}

/**
 * Set up navigation event handlers for SPA routing
 */
function setupNavigation() {
  // Handle all internal link clicks
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    
    if (link && isInternalLink(link)) {
      e.preventDefault();
      const href = link.getAttribute('href');
      
      // Handle hash links specially
      if (href.startsWith('#') || href.includes('#')) {
        // If it's just a hash, handle it on current page
        if (href.startsWith('#')) {
          const hash = href.substring(1);
          router.scrollToHash(hash);
          // Update URL without triggering route change
          window.history.replaceState({}, '', window.location.pathname + href);
        } else {
          // If it's a path with hash, navigate normally (router will handle hash)
          router.navigate(href);
        }
      } else {
        // Regular SPA navigation
        router.navigate(href);
      }
    }
  });
}

/**
 * Check if a link is internal
 * @param {HTMLAnchorElement} link - Link element
 * @returns {boolean} Whether link is internal
 */
function isInternalLink(link) {
  const href = link.getAttribute('href');
  
  // Skip if no href, external links, or special protocols (but include hash links)
  if (!href || 
      href.startsWith('http') || 
      href.startsWith('mailto:') || 
      href.startsWith('tel:') ||
      link.hasAttribute('target')) {
    return false;
  }
  
  // Include hash links and internal paths
  return true;
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
