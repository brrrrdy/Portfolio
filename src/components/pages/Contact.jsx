import { useLanguage } from "../../contexts/languageContext";
import contactData from "../../content/contact.json";
import { flagImages } from "../../assets/images/projectImages";
import mailIcon from "../../assets/images/mail_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import phoneIcon from "../../assets/images/call_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import locationIcon from "../../assets/images/globe_location_pin_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
import "../../styles/contact.css";

export default function Contact() {
  const { language } = useLanguage();
  const content = contactData[language] || contactData.en;

  return (
    <section id="contact-page">
      <div className="contact-container">
        <h1>{content.title}</h1>
        <div className="contact-content">
          <p>{content.intro}</p>

          <div className="contact-info">
            <div className="contact-item">
              <img
                src={mailIcon}
                alt={content.emailLabel}
                className="contact-icon"
              />
              <div className="contact-item-content">
                <a href={`mailto:${content.email.address}`}>
                  {content.email.address}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <img
                src={phoneIcon}
                alt={content.phoneLabel}
                className="contact-icon"
              />
              <div className="contact-item-content">
                <div className="phone-numbers">
                  {content.phoneNumbers.map((phone, index) => (
                    <div key={index} className="phone-number">
                      <div className="flag-container">
                        {phone.flags.map((flagKey, flagIndex) => (
                          <img
                            key={flagIndex}
                            src={flagImages[flagKey]}
                            alt={`${flagKey} flag`}
                            className="flag-icon"
                          />
                        ))}
                      </div>
                      <a href={`tel:${phone.telLink}`}>{phone.number}</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-item">
              <img
                src={locationIcon}
                alt={content.locationLabel}
                className="contact-icon"
              />
              <div className="contact-item-content">
                <p>{content.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
