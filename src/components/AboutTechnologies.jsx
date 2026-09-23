import cssLogo from "../assets/images/css3-plain.svg";
import figmaLogo from "../assets/images/figma-original.svg";
import gitLogo from "../assets/images/git-original.svg";
import githubLogo from "../assets/images/github-original.svg";
import htmlLogo from "../assets/images/html5-plain-wordmark.svg";
import javascriptLogo from "../assets/images/javascript-plain.svg";
import reactLogo from "../assets/images/react-original.svg";
import tailwindLogo from "../assets/images/tailwindcss-original.svg";
import typeScriptLogo from "../assets/images/ts-logo-512.svg";
import webpackLogo from "../assets/images/webpack-plain.svg";

const technologies = [
  ["JavaScript", javascriptLogo],
  ["React", reactLogo],
  ["TypeScript", typeScriptLogo],
  ["HTML", htmlLogo],
  ["CSS", cssLogo],
  ["Git", gitLogo],
  ["GitHub", githubLogo],
  ["Figma", figmaLogo],
  ["Tailwind", tailwindLogo],
  ["Webpack", webpackLogo],
];

function AboutTechnologies() {
  return (
    <div className="about-technologies" aria-label="Technologies">
      {technologies.map(([name, logo]) => (
        <button
          type="button"
          className="about-technology-button"
          key={name}
          aria-label={name}
          title={name}
        >
          <img src={logo} alt="" aria-hidden="true" />
          <span>{name}</span>
        </button>
      ))}
    </div>
  );
}

export default AboutTechnologies;
