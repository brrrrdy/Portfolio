/**
 * Simple SPA Router for handling client-side navigation
 */
export class Router {
  constructor() {
    this.routes = new Map();
    this.currentRoute = null;
    this.container = null;
    this.init();
  }

  /**
   * Initialize the router
   */
  init() {
    // Handle browser back/forward buttons
    window.addEventListener("popstate", (e) => {
      const fullPath = window.location.pathname + window.location.hash;
      this.handleRoute(fullPath);
    });

    // Handle initial page load
    document.addEventListener("DOMContentLoaded", () => {
      // Check for GitHub Pages redirect parameter
      const urlParams = new URLSearchParams(window.location.search);
      const redirect = urlParams.get("redirect");

      if (redirect) {
        // Remove redirect parameter and navigate to the intended route
        const cleanUrl = window.location.origin + redirect;
        window.history.replaceState({}, "", redirect);
        this.handleRoute(redirect);
      } else {
        const fullPath = window.location.pathname + window.location.hash;
        this.handleRoute(fullPath);
      }
    });
  }

  /**
   * Set the container element where pages will be rendered
   * @param {HTMLElement} container - Container element
   */
  setContainer(container) {
    this.container = container;
  }

  /**
   * Register a route
   * @param {string} path - Route path
   * @param {Function} component - Component function to render
   * @param {Object} options - Route options
   */
  addRoute(path, component, options = {}) {
    this.routes.set(path, {
      component,
      title: options.title || "Portfolio",
      ...options,
    });
  }

  /**
   * Navigate to a route
   * @param {string} path - Route path
   * @param {boolean} replace - Whether to replace current history entry
   */
  navigate(path, replace = false) {
    if (replace) {
      window.history.replaceState({}, "", path);
    } else {
      window.history.pushState({}, "", path);
    }
    this.handleRoute(path);
  }

  /**
   * Handle route change
   * @param {string} path - Route path
   */
  handleRoute(path) {
    // Parse path and hash
    const [routePath, hash] = path.split("#");
    const normalizedPath =
      routePath === "/" ? "/" : routePath.replace(/\/$/, "");

    const route = this.routes.get(normalizedPath) || this.routes.get("*");

    if (!route) {
      console.error(`No route found for path: ${path}`);
      return;
    }

    // Clear container
    if (this.container) {
      this.container.innerHTML = "";
    }

    // Update document title
    document.title = route.title;

    // Render component
    try {
      const component = route.component();
      if (this.container && component) {
        this.container.appendChild(component);
      }

      this.currentRoute = normalizedPath;

      // Handle hash scrolling after component renders
      if (hash) {
        // Use requestAnimationFrame to ensure DOM is updated
        requestAnimationFrame(() => {
          this.scrollToHash(hash);
        });
      } else {
        // Scroll to top on route change without hash
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error("Error rendering component:", error);
      this.handleError(error);
    }
  }

  /**
   * Scroll to hash element with smooth behavior
   * @param {string} hash
   */
  scrollToHash(hash) {
    const targetElement = document.getElementById(hash);

    if (targetElement) {
      // Use different offsets based on the target
      let yOffset;
      if (hash === "top") {
        yOffset = -120;
      } else {
        yOffset = -60; // Standard offset for other anchors
      }

      const y =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    } else {
      console.warn(`Element with id '${hash}' not found`);
    }
  }

  /**
   * Handle routing errors
   * @param {Error} error - Error object
   */
  handleError(error) {
    if (this.container) {
      const errorElement = document.createElement("div");
      errorElement.className = "flex items-center justify-center min-h-screen";
      errorElement.innerHTML = `
        <div class="text-center">
          <h1 class="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
          <p class="text-gray-600 mb-4">${error.message}</p>
          <button onclick="window.location.reload()" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Reload Page
          </button>
        </div>
      `;
      this.container.appendChild(errorElement);
    }
  }

  /**
   * Get current route
   * @returns {string} Current route path
   */
  getCurrentRoute() {
    return this.currentRoute;
  }

  /**
   * Check if route exists
   * @param {string} path - Route path
   * @returns {boolean} Whether route exists
   */
  hasRoute(path) {
    return this.routes.has(path);
  }
}

// Export singleton instance
export const router = new Router();
