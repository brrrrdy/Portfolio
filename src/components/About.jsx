import { useLanguage } from "../contexts/languageContext";
import footerContent from "../content/footer.json";
import aboutContent from "../content/about.json";
import Section from "./ui/Section";

function About() {
  const { language } = useLanguage();
  const footer = footerContent[language] || footerContent.en;
  const content = aboutContent[language] || aboutContent.en;

  return (
    <Section title={footer.about} className="about-section">
      <div className="about-copy">
        <p>{content.body}</p>
      </div>
    </Section>
  );
}

export default About;
