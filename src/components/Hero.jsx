import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageContext";
import heroContent from "../content/hero.json";
import tomImage from "../assets/images/heroTom.webp";

const colors = ["red", "orange", "purple", "green", "blue", "yellow"];

function Hero() {
  const { language } = useLanguage();
  const content = heroContent[language] || heroContent.en;
  const phrases = content.typingPhrases;

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const typeAnimation = () => {
      if (isTyping && !isDeleting) {
        if (currentCharIndex < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, currentCharIndex + 1));
          setCurrentCharIndex((prev) => prev + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsDeleting(true);
          }, 3000);
        }
      } else if (isDeleting) {
        if (currentCharIndex > 0) {
          setDisplayedText(currentPhrase.substring(0, currentCharIndex - 1));
          setCurrentCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setIsTyping(true);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    let timeout;
    if (isTyping && !isDeleting) {
      timeout = setTimeout(typeAnimation, 80);
    } else if (isDeleting) {
      timeout = setTimeout(typeAnimation, 20);
    }

    return () => clearTimeout(timeout);
  }, [currentPhraseIndex, currentCharIndex, isTyping, isDeleting, phrases]);

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="main-content">
          <div className="text-content">
            <h1 className="title">{content.headerTitle}</h1>

            <div className="subtitle">
              <span className="intro-text">{content.headerSubtitle} </span>
              <span className={`typing-text ${colors[currentPhraseIndex]}`}>
                {displayedText}
              </span>
              <span className="cursor">|</span>
            </div>

            <div className="link-content">
              <a href="#" className="btn-primary">
                <span>{content.headerLink}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 -960 960 960"
                >
                  <path d="M440-240v-368L296-464l-56-56 240-240 240 240-56 56-144-144v368z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="image-container">
            <img
              className="tomImage"
              src={tomImage}
              alt="stylized photo of Tom Alvarez"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
