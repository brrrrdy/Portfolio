import cardContent from "../content/toolkit.json";
import { toolkitCard } from "./toolkitCard.js";

export function toolkit() {
  const toolkit = document.createElement("div");
  toolkit.className = "w-full flex justify-center px-8 mb-20";

  const textContainer = document.createElement("div");
  textContainer.className = "flex flex-col items-center";

  const text1 = document.createElement("div");
  text1.textContent = cardContent.cardTitle;
  text1.className = "text-4xl font-bold mb-4";

  const text2 = document.createElement("div");
  text2.textContent = cardContent.cardText;
  text2.className = "text-sm text-gray-500";

  textContainer.appendChild(text1);
  textContainer.appendChild(text2);

  // Add toolkit cards below title/subtitle
  const cards = toolkitCard();
  textContainer.appendChild(cards);
  toolkit.appendChild(textContainer);

  return toolkit;
}
