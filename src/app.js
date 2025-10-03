import { TopNavBar } from "./components/topNav.js";
import { header } from "./components/header.js";
import { toolkit } from "./components/toolkit.js";
import { portfolio } from "./components/portfolioProjects.js";
import { FooterNav } from "./components/footer.js";

export function renderHomepage() {
  const main = document.createElement("main");
  main.className = "min-h-screen flex flex-col";

  main.appendChild(TopNavBar());
  main.appendChild(header());
  main.appendChild(toolkit());
  main.appendChild(portfolio());
  main.appendChild(FooterNav());
  document.body.appendChild(main);
}
