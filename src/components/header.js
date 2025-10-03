import headerContent from "../content/header.json";

export function header() {
  const header = document.createElement("header");
  header.className = "w-full flex justify-center py-4 mb-20";

  const textContainer = document.createElement("div");
  textContainer.className = "flex flex-col items-center";

  const text1 = document.createElement("div");
  text1.textContent = headerContent.headerTitle;
  text1.className = "text-6xl font-bold mb-10";

  const text2 = document.createElement("div");
  text2.textContent = headerContent.headerSubtitle;
  text2.className = "text-lg text-gray-500";

  textContainer.appendChild(text1);
  textContainer.appendChild(text2);
  header.appendChild(textContainer);

  return header;
}
