import "../styles.css";
import { renderHomepage } from "../app.js";

// Set up the main page structure
const main = document.createElement("main");
main.className = "min-h-screen flex flex-col pt-24"; // Added pt-24 for fixed nav spacing

// Render homepage components into the main element
renderHomepage(main);

// Add main to the body
document.body.appendChild(main);
