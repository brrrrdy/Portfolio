import { useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "./LanguageContext";
import githubLogo from "../assets/images/github-original.svg";
import linkedinLogo from "../assets/images/linkedin.svg";
import footerContent from "../content/footer.json";

function Footer() {
  const { language } = useLanguage();
  const content = footerContent[language] || footerContent.en;
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const footerLinks = [
    { href: "#about", text: content.about },
    { href: "#projects", text: content.projects },
    { href: "#toolkit", text: content.toolkit },
    { href: "/contact", text: content.contact },
  ];

  const handleNavClick = (link) => {
    if (link.href.startsWith("/")) {
      // Navigate to a different page
      navigate(link.href);
    } else if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(link.href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If already on homepage, just scroll to section
      const element = document.querySelector(link.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <p>
              &copy; {currentYear} Tom Alvarez. {content.copyright}
            </p>
          </div>

          <div className="footer-right-section">
            <div className="footer-sitemap-container">
              <div className="footer-sitemap">
                <ul>
                  {footerLinks.map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => handleNavClick(link)}
                        style={{
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                          fontSize: "inherit",
                          fontFamily: "inherit",
                          color: "inherit",
                          padding: 0,
                        }}
                      >
                        {link.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="footer-social">
              <h2>{content.connect}</h2>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/tom-alvarez-ryan-80423951/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedinLogo}
                    alt="LinkedIn"
                    className="social-logo"
                  />
                </a>
                <a
                  href="https://github.com/brrrrdy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubLogo} alt="GitHub" className="social-logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
