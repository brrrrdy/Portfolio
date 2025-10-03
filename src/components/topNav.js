import navLinks from "../content/links.json";
import darkSwitchIcon from "../assets/images/darkswitchsvg.svg";

export function TopNavBar() {
  // Main nav container
  const nav = document.createElement("nav");
  nav.className = "w-full text-black p-4";

  // Flex container for links and language buttons
  const mainContainer = document.createElement("div");
  mainContainer.className =
    "flex justify-center p-4 items-center w-full relative";

  // Nav links container
  const linksContainer = document.createElement("div");
  linksContainer.className = "flex gap-6 justify-center items-center";
  navLinks.forEach((link) => {
    const a = document.createElement("a");
    a.className = "text-black-600 hover:text-blue-600 font-medium";
    a.textContent = link.text;
    a.href = link.href;
    linksContainer.appendChild(a);
  });

  // Language buttons container
  const langContainer = document.createElement("div");
  langContainer.className = "flex gap-2 absolute right-4";
  const languages = ["EN", "ES", "GZ"];
  languages.forEach((lang) => {
    const btn = document.createElement("button");
    btn.className =
      "px-2 py-1 rounded bg-transparent hover:bg-red-200 font-semibold";
    btn.textContent = lang;
    langContainer.appendChild(btn);
  });

  // Light/Dark Mode Switch with SVG
  const darkModeToggle = document.createElement("div");
  darkModeToggle.className = "flex gap-2 absolute left-4 pt-10";
  
  const darkModeButton = document.createElement("button");
  darkModeButton.className = "p-2 rounded bg-transparent hover:bg-orange-200 transition-colors duration-200";
  
  const darkModeIcon = document.createElement("img");
  darkModeIcon.src = darkSwitchIcon;
  darkModeIcon.alt = "Dark Mode Toggle";
  darkModeIcon.className = "w-[80px] h-[80px] object-contain";
  
  darkModeButton.appendChild(darkModeIcon);
  darkModeToggle.appendChild(darkModeButton);

  mainContainer.appendChild(linksContainer);
  mainContainer.appendChild(langContainer);
  mainContainer.appendChild(darkModeToggle);
  nav.appendChild(mainContainer);
  return nav;
}
