import React, { useState, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "light";
  });

  useEffect(() => {
    document.body.className = `app-${theme}`;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const value = {
    theme,
    setTheme,
    toggleTheme,
    isLight: theme === "light",
    isDark: theme === "dark",
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
