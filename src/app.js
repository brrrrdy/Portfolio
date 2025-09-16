import { TopNavBar } from "./components/topNav.js";
import { HeroSection } from "./components/heroSection.js";
import { cardBox } from "./components/card.js";
import { FooterNav } from "./components/footer.js";

export function renderHomepage() {
  const main = document.createElement("main");
  main.appendChild(TopNavBar());
  main.appendChild(HeroSection());
  main.appendChild(cardBox());
  main.appendChild(FooterNav());
  document.body.appendChild(main);
}
