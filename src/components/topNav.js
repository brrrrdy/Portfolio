import navLinks from "../content/links.json";

export function TopNavBar() {
  const nav = document.createElement("nav");
  nav.className = "flex justify-center text-black p-4";

  const navContainer = document.createElement("div");
  navContainer.className = "flex gap-6";

  navLinks.forEach((link) => {
    const a = document.createElement("a");
    a.className = "hover:text-blue-600 font-medium";
    a.textContent = link.text;
    a.href = link.href;
    navContainer.appendChild(a);
  });

  nav.appendChild(navContainer);
  return nav;
}
