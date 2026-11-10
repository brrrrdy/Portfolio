import techLogos from "../content/techLogos";

const technologies = [
  "JavaScript",
  "React",
  "TypeScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Figma",
  "Tailwind",
  "Webpack",
];

function AboutTechnologies({ label }) {
  return (
    <ul className="about-technologies" aria-label={label}>
      {technologies.map((name) => (
        <li className="about-technology" key={name}>
          <img src={techLogos[name]} alt="" aria-hidden="true" />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
}

export default AboutTechnologies;
