import htmlImg from '../assets/images/html5-plain-wordmark.svg';
import cssImg from '../assets/images/css3-plain.svg';
import jsImg from '../assets/images/javascript-plain.svg';
import xmlImg from '../assets/images/xml-plain.svg';
import figmaImg from '../assets/images/figma-original.svg';
import gitImg from '../assets/images/git-original.svg';
import gitHubImg from '../assets/images/github-original.svg';
import jestImg from '../assets/images/jest-plain.svg';
import jiraImg from '../assets/images/jira-original.svg';
import jsonImg from '../assets/images/json-plain.svg';
import psImg from '../assets/images/photoshop-plain.svg';
import reactImg from '../assets/images/react-original.svg';
import tailwindImg from '../assets/images/tailwindcss-original.svg';
import wpImg from '../assets/images/webpack-plain.svg';

const tools = [
  { image: htmlImg, subtitle: "HTML" },
  { image: xmlImg, subtitle: "XML" },
  { image: cssImg, subtitle: "CSS" },
  { image: figmaImg, subtitle: "Figma" },
  { image: jsImg, subtitle: "JavaScript" },
  { image: gitImg, subtitle: "Git" },
  { image: gitHubImg, subtitle: "Github" },
  { image: jestImg, subtitle: "Jest" },
  { image: jiraImg, subtitle: "Jira" },
  { image: jsonImg, subtitle: "JSON" },
  { image: psImg, subtitle: "Photoshop" },
  { image: reactImg, subtitle: "React" },
  { image: tailwindImg, subtitle: "Tailwind" },
  { image: wpImg, subtitle: "Webpack" }
];

export function toolkitCard(customTools) {
  const toolkitDiv = document.createElement("div");
  toolkitDiv.className = "flex flex-wrap gap-8 justify-center items-start mt-8";

  const renderTools = customTools && Array.isArray(customTools) ? customTools : tools;

  renderTools.forEach(tool => {
    const card = document.createElement("div");
    card.className = "flex flex-col items-center mb-1";

    const img = document.createElement("img");
    img.src = tool.image;
    img.alt = tool.subtitle;
    img.className = "w-[50px] h-[50px] object-contain mb-4";

    const subtitle = document.createElement("div");
    subtitle.textContent = tool.subtitle;
    subtitle.className = "text-xs text-gray-700 text-center";

    card.appendChild(img);
    card.appendChild(subtitle);
    toolkitDiv.appendChild(card);
  });

  return toolkitDiv;
}

// {
//   "javascript": "JavaScript",
//   "html": "HTML",
//   "css": "CSS",
//   "eslint": "Eslint",
//   "figma": "Figma",
//   "git": "Git",
//   "github": "GitHub",
//   "jest": "Jest",
//   "jira": "Jira",
//   "json": "JSON",
//   "photoshop": "Photoshop",
//   "react": "React",
//   "tailwind": "Tailwind",
//   "webpack": "Webpack",
//   "xml": "XML"
// }
