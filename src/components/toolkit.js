import cardContent from "../content/toolkit.json";
import { toolkitCard } from "./toolkitCard.js";

export function toolkit() {
  const toolkit = document.createElement("div");
  toolkit.className = "section-container";

  const textContainer = document.createElement("div");
  textContainer.className = "section-content";

  const text1 = document.createElement("div");
  text1.textContent = cardContent.cardTitle;
  text1.className = "section-title";

  const text2 = document.createElement("div");
  text2.textContent = cardContent.cardText;
  text2.className = "section-subtitle";

  textContainer.appendChild(text1);
  textContainer.appendChild(text2);

  // Add toolkit cards below title/subtitle
  const cards = toolkitCard();
  textContainer.appendChild(cards);
  toolkit.appendChild(textContainer);

  return toolkit;
}
