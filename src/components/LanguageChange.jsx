import { useState, useEffect } from "react";
import { LanguageContext } from "../contexts/languageContext";

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("portfolio-language") || "en";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const value = {
    language,
    switchLanguage,
    isEnglish: language === "en",
    isSpanish: language === "es",
    isGalician: language === "gz",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
