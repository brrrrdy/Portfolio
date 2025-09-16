// TopNavBar.js
export function TopNavBar() {
  const nav = document.createElement("nav");
  nav.className = "bg-blue-600 text-white p-4";
  nav.textContent = "Top Navigation";
  return nav;
}

// HeroSection.js
export function HeroSection() {
  const hero = document.createElement("section");
  hero.className = "p-8 text-center";
  hero.innerHTML =
    '<h1 class="text-4xl font-bold">Welcome to My Portfolio</h1>';
  return hero;
}

// DemoSection.js
export function DemoSection() {
  const demo = document.createElement("section");
  demo.className = "p-8";
  demo.textContent = "Demo Section";
  return demo;
}

// FooterNav.js
export function FooterNav() {
  const footer = document.createElement("footer");
  footer.className = "bg-gray-800 text-white p-4 text-center";
  footer.textContent = "Footer Navigation";
  return footer;
}
export function renderHomepage() {
  const main = document.createElement("main");
  main.appendChild(TopNavBar());
  main.appendChild(HeroSection());
  main.appendChild(DemoSection());
  main.appendChild(FooterNav());
  document.body.appendChild(main);
}
