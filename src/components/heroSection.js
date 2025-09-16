export function HeroSection() {
  const hero = document.createElement("section");
  hero.className = "p-8 text-center";
  hero.innerHTML =
    '<h1 class="text-4xl font-bold">Welcome to My Portfolio</h1>';
  return hero;
}
