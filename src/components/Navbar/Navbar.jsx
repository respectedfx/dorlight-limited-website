import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
    } else {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "navbar__link__active" : "";
  };

  return (
    <nav className="navbar__maincontainer__wrapper">
      <div className="navbar__content__container">
        <div className="navbar__logo__section">
          <div className="navbar__logo__icon">
            <img src="/assets/dorlight.jpg" alt="" />
          </div>
          <span className="navbar__logo__text">DORLIGHT</span>
        </div>

        <button
          className="navbar__mobile__toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <ul
          className={`navbar__menu__list ${
            isMenuOpen ? "navbar__menu__open" : ""
          }`}
        >
          <li className="navbar__menuitem__element">
            <Link to="/" className={`navbar__link__item ${isActive("/")}`}>
              Home
            </Link>
          </li>
          <li className="navbar__menuitem__element">
            <a
              onClick={() => handleSectionClick("about")}
              className="navbar__link__item"
            >
              About Us
            </a>
          </li>
          <li className="navbar__menuitem__element">
            <a
              onClick={() => handleSectionClick("services")}
              className="navbar__link__item"
            >
              Our Services
            </a>
          </li>
          <li className="navbar__menuitem__element">
            <Link
              to="/gallery"
              className={`navbar__link__item ${isActive("/gallery")}`}
            >
              Gallery
            </Link>
          </li>
        </ul>

        <button className="navbar__contact__button">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
