import cardContent from "../content/about.json";

export function aboutCard() {
  const aboutCard = document.createElement("div");
  aboutCard.className = "section-container scroll-mt-24";
  aboutCard.id = "about";

  const textContainer = document.createElement("div");
  textContainer.className = "about-content";

  const text1 = document.createElement("div");
  text1.textContent = cardContent.cardTitle;
  text1.className = "section-title text-left";

  const text2 = document.createElement("div");
  text2.textContent = cardContent.cardText1;
  text2.className = "about-section-subtitle mb-5";

  const text3 = document.createElement("div");
  text3.textContent = cardContent.cardText2;
  text3.className = "about-section-subtitle";

  textContainer.appendChild(text1);
  textContainer.appendChild(text2);
  textContainer.appendChild(text3);
  aboutCard.appendChild(textContainer);

  return aboutCard;
}
