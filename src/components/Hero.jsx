import { useState, useEffect, useMemo, useRef } from "react";
import { useLanguage } from "../contexts/languageContext";
import heroContent from "../content/hero.json";
import tomImage from "../assets/images/heroTom.webp";
import tomCvPdf from "../assets/images/docs/tomalvarezcv.pdf";
import useLastFmTrack from "./useLastFmTrack";

const colors = ["red", "orange", "purple", "green", "blue", "yellow"];
const lastFmProfileUrl = "https://www.last.fm/user/viptosomeone";

function Hero() {
  const { language } = useLanguage();
  const content = heroContent[language] || heroContent.en;
  const phrases = content.typingPhrases;
  const listeningTrack = useLastFmTrack();

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [titleWidth, setTitleWidth] = useState(null);
  const titleRef = useRef(null);

  const typingPhrases = useMemo(
    () =>
      listeningTrack
        ? [phrases[0], listeningTrack, ...phrases.slice(1)]
        : phrases,
    [phrases, listeningTrack],
  );

  const subtitleStyle = useMemo(
    () =>
      titleWidth
        ? {
            "--title-width": `${Math.round(titleWidth)}px`,
          }
        : undefined,
    [titleWidth],
  );

  const isLastFmPhraseActive =
    Boolean(listeningTrack) &&
    typingPhrases[currentPhraseIndex] === listeningTrack;

  useEffect(() => {
    const titleElement = titleRef.current;

    if (!titleElement) return;

    const updateTitleWidth = () => {
      setTitleWidth(titleElement.getBoundingClientRect().width);
    };

    updateTitleWidth();

    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateTitleWidth);
      resizeObserver.observe(titleElement);
    }

    window.addEventListener("resize", updateTitleWidth);

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      window.removeEventListener("resize", updateTitleWidth);
    };
  }, [content.headerTitle]);

  useEffect(() => {
    const currentPhrase = typingPhrases[currentPhraseIndex] || "";

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
          setCurrentPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
        }
      }
    };

    let timeout;
    if (isTyping && !isDeleting) {
      timeout = setTimeout(typeAnimation, 45);
    } else if (isDeleting) {
      timeout = setTimeout(typeAnimation, 12);
    }

    return () => clearTimeout(timeout);
  }, [
    currentPhraseIndex,
    currentCharIndex,
    isTyping,
    isDeleting,
    typingPhrases,
  ]);

  return (
    <div className="hero-section">
      <div className="hero-container">
        <div className="main-content">
          <div className="text-content">
            <h1 className="title" ref={titleRef}>
              {content.headerTitle}
            </h1>

            <div className="subtitle" style={subtitleStyle}>
              <span className="intro-text">{content.headerSubtitle} </span>
              {isLastFmPhraseActive ? (
                <a
                  href={lastFmProfileUrl}
                  className={`typing-text typing-link ${
                    colors[currentPhraseIndex % colors.length]
                  }`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {displayedText}
                </a>
              ) : (
                <span
                  className={`typing-text ${
                    colors[currentPhraseIndex % colors.length]
                  }`}
                >
                  {displayedText}
                </span>
              )}
              <span className="cursor">|</span>
            </div>

            <div className="link-content">
              <a
                href={tomCvPdf}
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
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
