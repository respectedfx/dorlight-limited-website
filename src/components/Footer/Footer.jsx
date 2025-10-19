import React from "react";
import "./Footer.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer__wrapper__main">
        <div className="footer__container__content">
          <div className="footer__grid__sections">
            <div className="footer__brand__block">
              <div className="footer__logo__section">
                <img
                  src="/assets/dorlight.jpg"
                  alt="Dorlight Logo"
                  className="footer__logo"
                />
              </div>
            </div>

            <div className="footer__links__column">
              <h3 className="footer__heading__title">Our Offices</h3>
              <h4 className="footer__heading__subtitle">Head Office</h4>
              <ul className="footer__list__items">
                <li className="footer__listitem__element">
                  <FaMapMarkerAlt className="footer__icon" />
                  <span className="footer__contact__text">
                    xxxxxxxxx xxxxx xxxxxxxxxxx xxxxx, Delta State.
                  </span>
                </li>
              </ul>
            </div>

            <div className="footer__links__column">
              <div className="footer__contact__block">
                <h4 className="footer__heading__title">Call Us On</h4>
                <ul className="footer__list__items">
                  <li className="footer__listitem__element">
                    <FaPhoneAlt className="footer__icon" />
                    <a href="tel:+234" className="footer__link__text">
                      +234 900 900 9000
                    </a>
                  </li>
                  <li className="footer__listitem__element">
                    <FaPhoneAlt className="footer__icon" />
                    <a href="tel:+234" className="footer__link__text">
                      +234 900 900 9000
                    </a>
                  </li>
                  <li className="footer__listitem__element">
                    <FaPhoneAlt className="footer__icon" />
                    <a href="tel:+234" className="footer__link__text">
                      +234 800 800 8000
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__contact__block">
                <h4 className="footer__heading__title">Get Involved</h4>
                <ul className="footer__list__items">
                  <li className="footer__listitem__element">
                    <a href="" className="footer__link__text">
                      About Us
                    </a>
                  </li>
                  <li className="footer__listitem__element">
                    <a href="" className="footer__link__text">
                      Our Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer__links__column">
              <h4 className="footer__heading__title">Social Media</h4>
              <ul className="footer__list__items">
                <li className="footer__listitem__element">
                  <a href="#" className="footer__link__text">
                    Twitter
                  </a>
                </li>
                <li className="footer__listitem__element">
                  <a href="#" className="footer__link__text">
                    Facebook
                  </a>
                </li>
                <li className="footer__listitem__element">
                  <a href="#" className="footer__link__text">
                    Instagram
                  </a>
                </li>
                <li className="footer__listitem__element">
                  <a href="#" className="footer__link__text">
                    LinkedIn
                  </a>
                </li>
                <li className="footer__listitem__element">
                  <a href="#" className="footer__link__text">
                    Youtube
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
