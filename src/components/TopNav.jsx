import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "../contexts/languageContext";
import { useTheme } from "../contexts/themeContext";
import navContent from "../content/navbar.json";

function TopNav() {
  const { language, switchLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const content = navContent[language] || navContent.en;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const languages = [
    { code: "en", label: "EN", name: "English" },
    { code: "es", label: "ES", name: "Español" },
    { code: "gz", label: "GZ", name: "Galego" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === language) || languages[0];

  const getThemeIcon = () => {
    return theme === "light" ? "dark_mode" : "light_mode";
  };

  const navLinks = [
    { href: "#home", text: content.home, type: "scroll" },
    { href: "#about", text: content.about, type: "scroll" },
    { href: "#projects", text: content.projects, type: "scroll" },
    { href: "#toolkit", text: content.toolkit, type: "scroll" },
    { href: "/contact", text: content.contact, type: "navigate" },
  ];

  const handleLanguageSelect = (langCode) => {
    switchLanguage(langCode);
    setIsLanguageDropdownOpen(false);
  };

  const handleNavClick = (link) => {
    // Close mobile menu when a link is clicked

    setIsMobileMenuOpen(false);

    if (link.type === "navigate") {
      // Navigate to a different page

      navigate(link.href);
    } else if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage first, then scroll

      navigate("/");

      // Use setTimeout to wait for navigation to complete before scrolling

      setTimeout(() => {
        if (link.href === "#home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.querySelector(link.href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 100);
    } else {
      // If already on homepage, scroll to section or top

      if (link.href === "#home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav className="top-nav">
      <div className="top-nav-container">
        {/* left side - theme toggle and mobile home button */}

        <div className="nav-left">
          <div className="nav-theme-toggle">
            <div className="theme-toggle">
              <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle-button"
                title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                <span className="material-icons">{getThemeIcon()}</span>
              </button>
            </div>
          </div>

          {/* Home icon - mobile only */}

          <button
            className="mobile-home-button"
            onClick={() => handleNavClick({ href: "#home", type: "scroll" })}
            aria-label="Go to home"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 -960 960 960"
            >
              <path d="M120-120v-560h160v-160h400v320h160v400H520v-160h-80v160H120Zm80-80h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 320h80v-80h-80v80Zm0-160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 480h80v-80h-80v80Zm0-160h80v-80h-80v80Z" />
            </svg>
          </button>
        </div>

        {/* center - nav links (desktop) */}

        <div className="nav-links nav-links-desktop">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link)}
              className="nav-link"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "inherit",
                fontFamily: "inherit",
                fontWeight: "inherit",
              }}
            >
              {link.text}
            </button>
          ))}
        </div>

        {/* right side - burger menu and language selector */}

        <div className="nav-right">
          {/* Burger menu button */}
          <button
            className={`burger-menu-button ${isMobileMenuOpen ? "opened" : ""}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Main Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg width="30" height="30" viewBox="0 0 100 100">
              <path
                className="line line1"
                d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
              />
              <path className="line line2" d="M 20,50 H 80" />
              <path
                className="line line3"
                d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
              />
            </svg>
          </button>

          <div className="language-selector">
            {/* Desktop: Button layout */}
            <div className="language-selector-desktop">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => switchLanguage(lang.code)}
                  className={`language-button ${language === lang.code ? "active" : ""}`}
                  title={`Switch to ${lang.name}`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Mobile: Dropdown layout */}
            <div className="language-selector-mobile">
              <button
                type="button"
                onClick={() =>
                  setIsLanguageDropdownOpen(!isLanguageDropdownOpen)
                }
                className="language-dropdown-toggle"
                title="Select language"
              >
                {currentLanguage.label}
                <span className="dropdown-arrow">
                  {isLanguageDropdownOpen ? "▲" : "▼"}
                </span>
              </button>

              {isLanguageDropdownOpen && (
                <div className="language-dropdown-menu">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`language-dropdown-item ${language === lang.code ? "active" : ""}`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
      >
        <div className="mobile-menu-items">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link)}
              className="mobile-nav-link"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "inherit",
                fontFamily: "inherit",
                fontWeight: "inherit",
              }}
            >
              {link.text}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
