import cardContent from "../content/portfolioText.json";

export function portfolio() {
  const portfolio = document.createElement("div");
  portfolio.className = "section-container";

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
  portfolio.appendChild(textContainer);

  return portfolio;
}
