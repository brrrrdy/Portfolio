import { TopNavBar } from "./components/topNav.js";
import { header } from "./components/header.js";
import { portfolio } from "./components/portfolioProjects.js";
import { toolkit } from "./components/toolkit.js";
import { contact } from "./components/contact.js"
import { FooterNav } from "./components/footer.js";

export function renderHomepage() {
  const main = document.createElement("main");
  main.className = "min-h-screen flex flex-col";

  main.appendChild(TopNavBar());
  main.appendChild(header());
    main.appendChild(portfolio());
  main.appendChild(toolkit());
  main.appendChild(contact());
  main.appendChild(FooterNav());
  document.body.appendChild(main);
}
