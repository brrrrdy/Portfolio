import { TopNavBar } from "./components/topNav.js";
import { header } from "./components/header.js";
import { cardBox } from "./components/card.js";
import { FooterNav } from "./components/footer.js";

export function renderHomepage() {
  const main = document.createElement("main");
  main.className = "min-h-screen flex flex-col";

  main.appendChild(TopNavBar());
  main.appendChild(header());
  main.appendChild(cardBox());
  main.appendChild(FooterNav());
  document.body.appendChild(main);
}
