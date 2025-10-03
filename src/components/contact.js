import cardContent from "../content/contact.json";
import linkedinIcon from "../assets/images/linkedin.svg";

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

  // LinkedIn link container
  const socialContainer = document.createElement("div");
  socialContainer.className = "mt-6 flex items-center gap-4";

  // LinkedIn link with icon
  const linkedinLink = document.createElement("a");
  linkedinLink.href = "https://www.linkedin.com/in/tom-alvarez-ryan-80423951/"; // Replace with your LinkedIn URL
  linkedinLink.target = "_blank";
  linkedinLink.rel = "noopener noreferrer";
  linkedinLink.className = "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200";

  const linkedinImg = document.createElement("img");
  linkedinImg.src = linkedinIcon;
  linkedinImg.alt = "LinkedIn";
  linkedinImg.className = "w-8 h-8";

  linkedinLink.appendChild(linkedinImg);
  socialContainer.appendChild(linkedinLink);

  textContainer.appendChild(text1);
  textContainer.appendChild(text2);
  textContainer.appendChild(socialContainer);
  contact.appendChild(textContainer);

  return contact;
}