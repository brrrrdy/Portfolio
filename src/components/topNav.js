import navLinks from "../content/links.json";

export function TopNavBar() {
  // Main nav container - Fixed at top with flex layout
  const nav = document.createElement("nav");
  nav.className = "fixed top-0 left-0 w-full text-black p-4 bg-red-100 z-50 flex justify-center items-center";

  // Create a relative container for absolute positioned elements
  const container = document.createElement("div");
  container.className = "relative w-full flex justify-center items-center";

  // Nav links container
  const linksContainer = document.createElement("div");
  linksContainer.className = "flex gap-6 justify-center items-center";
  navLinks.forEach((link) => {
    const a = document.createElement("a");
    a.className = "text-black-600 hover:text-yellow-600 font-medium";
    a.textContent = link.text;
    a.href = link.href;
    linksContainer.appendChild(a);
  });

  // Language buttons container
  const langContainer = document.createElement("div");
  langContainer.className = "flex gap-2 absolute right-20";
  const languages = ["EN", "ES", "GZ"];
  languages.forEach((lang) => {
    const btn = document.createElement("button");
    if (lang === "EN") {
      btn.className = "px-2 py-1 rounded bg-transparent font-semibold hover:text-blue-800 transition-colors duration-300";
    } else if (lang === "ES") {
      btn.className = "px-2 py-1 rounded bg-transparent font-semibold hover:text-red-600 transition-colors duration-300";
    } else if (lang === "GZ") {
      btn.className = "px-2 py-1 rounded bg-transparent font-semibold hover:text-sky-400 transition-colors duration-300";
    }
    btn.textContent = lang;
    langContainer.appendChild(btn);
  });

  // Light/Dark Mode Switch with SVG
  const darkModeToggle = document.createElement("div");
  darkModeToggle.className = "flex absolute left-0 top-1/2 transform -translate-y-1/2";
  
  const darkModeButton = document.createElement("button");
  darkModeButton.className = "";
  
  // Create inline SVG for black color control
  const darkModeSvg = document.createElement("div");
  darkModeSvg.innerHTML = `
    <svg class="w-[40px] h-[40px] fill-black hover:fill-orange-500 transition-all duration-200 hover:animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" style="animation-duration: 0.6s;">
      <path d="M480-120q-66 0-113-47t-47-113H200q-33 0-56.5-23.5T120-360q0-140 92-241.5T440-718v-122h80v122q136 15 228 116.5T840-360q0 33-23.5 56.5T760-280H640q0 66-47 113t-113 47ZM200-360h560q0-116-82-198t-198-82q-116 0-198 82t-82 198Zm280 160q33 0 56.5-23.5T560-280H400q0 33 23.5 56.5T480-200Zm0-80Z"/>
    </svg>
  `;
  
  darkModeButton.appendChild(darkModeSvg);
  darkModeToggle.appendChild(darkModeButton);

  container.appendChild(linksContainer);
  container.appendChild(langContainer);
  container.appendChild(darkModeToggle);
  nav.appendChild(container);
  return nav;
}
