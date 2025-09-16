import cardContent from "../content/card.json";

export function cardBox() {
  const cardBox = document.createElement("div");
  cardBox.className = "w-full flex justify-center px-8";

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
  cardBox.appendChild(textContainer);

  return cardBox;
}
