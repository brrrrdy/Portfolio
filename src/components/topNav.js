import navLinks from "../content/links.json";

export function TopNavBar() {
  // Main nav container - Fixed at top
  const nav = document.createElement("nav");
  nav.className = "fixed top-0 left-0 w-full text-black p-4 bg-red-100 z-50";

  // Flex container for links and language buttons
  const mainContainer = document.createElement("div");
  mainContainer.className =
    "flex justify-center p-4  items-center w-full relative";

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
    btn.className =
      "px-2 py-1 rounded bg-transparent hover:bg-red-200 font-semibold";
    btn.textContent = lang;
    langContainer.appendChild(btn);
  });

  // Light/Dark Mode Switch with SVG
  const darkModeToggle = document.createElement("div");
  darkModeToggle.className = "flex gap-2 absolute left-12 pt-2";
  
  const darkModeButton = document.createElement("button");
  darkModeButton.className = "p-1 rounded bg-transparent ";
  
  // Create inline SVG for black color control
  const darkModeSvg = document.createElement("div");
  darkModeSvg.innerHTML = `
    <svg class="w-[40px] h-[40px] fill-black hover:fill-orange-500 transition-colors duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path d="M480-120q-66 0-113-47t-47-113H200q-33 0-56.5-23.5T120-360q0-140 92-241.5T440-718v-122h80v122q136 15 228 116.5T840-360q0 33-23.5 56.5T760-280H640q0 66-47 113t-113 47ZM200-360h560q0-116-82-198t-198-82q-116 0-198 82t-82 198Zm280 160q33 0 56.5-23.5T560-280H400q0 33 23.5 56.5T480-200Zm0-80Z"/>
    </svg>
  `;
  
  darkModeButton.appendChild(darkModeSvg);
  darkModeToggle.appendChild(darkModeButton);

  mainContainer.appendChild(linksContainer);
  mainContainer.appendChild(langContainer);
  mainContainer.appendChild(darkModeToggle);
  nav.appendChild(mainContainer);
  return nav;
}
