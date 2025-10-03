import navLinks from "../content/links.json";

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

  // Light/Dark Mode Switch
  const darkModeToggle = document.createElement("div");
  darkModeToggle.className = "flex gap-2 absolute left-4";
  const darkModeToggleButton = ["dark mode"];
  darkModeToggleButton.forEach((switchBtn) => {
    const DarkBtn = document.createElement("lightBulb");
    DarkBtn.className =
      "px-2 py-1 rounded bg-transparent hover:bg-orange-200 font-semibold";
    DarkBtn.textContent = switchBtn;
    darkModeToggle.appendChild(DarkBtn);
  });

  mainContainer.appendChild(linksContainer);
  mainContainer.appendChild(langContainer);
  mainContainer.appendChild(darkModeToggle);
  nav.appendChild(mainContainer);
  return nav;
}
