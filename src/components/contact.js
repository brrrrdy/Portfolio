import cardContent from "../content/contact.json";

export function contact() {
  const contact = document.createElement("div");
  contact.className = "section-container";

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
  contact.appendChild(textContainer);

  return contact;
}