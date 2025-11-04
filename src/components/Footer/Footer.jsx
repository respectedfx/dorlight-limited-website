import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Footer = () => {
  const location = useLocation();
  const [logoRef, logoVisible] = useScrollAnimation({ threshold: 0.2 });
  const [col1Ref, col1Visible] = useScrollAnimation({ threshold: 0.2 });
  const [col2Ref, col2Visible] = useScrollAnimation({ threshold: 0.2 });
  const [col3Ref, col3Visible] = useScrollAnimation({ threshold: 0.2 });

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <footer className="footer__wrapper__main">
        <div className="footer__container__content">
          <div className="footer__grid__sections">
            <div
              ref={logoRef}
              className={`footer__brand__block ${logoVisible ? "animate" : ""}`}
            >
              <div className="footer__logo__section">
                <img
                  src="/assets/dorlight.jpg"
                  alt="Dorlight Logo"
                  className="footer__logo"
                />
              </div>
            </div>

            <div
              ref={col1Ref}
              className={`footer__links__column ${
                col1Visible ? "animate" : ""
              }`}
            >
              <h3 className="footer__heading__title">Our Offices</h3>
              <h4 className="footer__heading__subtitle">Head Office</h4>
              <ul className="footer__list__items">
                <li className="footer__listitem__element">
                  <FaMapMarkerAlt className="footer__icon" />
                  <span className="footer__contact__text">
                    No. 4 Efeakpokrire Street, off Oteri Road, Ughelli, Delta
                    State, Nigeria
                  </span>
                </li>
              </ul>
              <h4 className="footer__heading__subtitle">Branch Office</h4>
              <ul className="footer__list__items">
                <li className="footer__listitem__element">
                  <FaMapMarkerAlt className="footer__icon" />
                  <span className="footer__contact__text">
                    Road 4, Suite H415/416, Ikota Shopping Complex, VGC-Ajah,
                    Lagos, Nigeria
                  </span>
                </li>
              </ul>
            </div>

            <div
              ref={col2Ref}
              className={`footer__links__column ${
                col2Visible ? "animate" : ""
              }`}
            >
              <div className="footer__contact__block">
                <h4 className="footer__heading__title">Call Us On</h4>
                <ul className="footer__list__items">
                  <li className="footer__listitem__element">
                    <FaPhoneAlt className="footer__icon" />
                    <a href="tel:+2347039878884" className="footer__link__text">
                      +234 703 987 8884
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__contact__block">
                <h4 className="footer__heading__title">Email Us</h4>
                <ul className="footer__list__items">
                  <li className="footer__listitem__element">
                    <FaEnvelope className="footer__icon" />
                    <a
                      href="mailto:Dorlightventures@gmail.com"
                      className="footer__link__text"
                    >
                      Dorlightventures@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__contact__block">
                <h4 className="footer__heading__title">Get Involved</h4>
                <ul className="footer__list__items">
                  <li className="footer__listitem__element">
                    <a
                      onClick={() => handleSectionClick("about")}
                      className="footer__link__text"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="footer__listitem__element">
                    <a
                      onClick={() => handleSectionClick("services")}
                      className="footer__link__text"
                    >
                      Our Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div
              ref={col3Ref}
              className={`footer__links__column ${
                col3Visible ? "animate" : ""
              }`}
            >
              <h4 className="footer__heading__title">Social Media</h4>
              <ul className="footer__list__items">
                <li className="footer__listitem__element">
                  <a
                    href="https://wa.me/2347039878884?text=Hello%20Dorlight%2C%20I%27d%20like%20to%20make%20an%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link__text"
                  >
                    WhatsApp
                  </a>
                </li>
                <li className="footer__listitem__element">
                  <a
                    href="https://x.com/Dorlightlimited"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link__text"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li className="footer__listitem__element">
                  <a
                    href="https://www.facebook.com/DorlightVenturesLtd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link__text"
                  >
                    Facebook
                  </a>
                </li>
                <li className="footer__listitem__element">
                  <a
                    href="https://www.instagram.com/dorlightlimited_realestate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link__text"
                  >
                    Instagram
                  </a>
                </li>
                <li className="footer__listitem__element">
                  <a
                    href="https://www.linkedin.com/company/dorlight-limited"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link__text"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="footer__listitem__element">
                  <a
                    href="https://www.youtube.com/@DorlightLimited"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link__text"
                  >
                    YouTube
                  </a>
                </li>
                <li className="footer__listitem__element">
                  <a
                    href="https://www.tiktok.com/@dorlightltdrealestate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link__text"
                  >
                    TikTok
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer__bottom__bar">
        <p className="footer__copyright__text">
          © Copyright DORLIGHT LTD. All Rights Reserved 2025
        </p>
      </div>
    </>
  );
};

export default Footer;
