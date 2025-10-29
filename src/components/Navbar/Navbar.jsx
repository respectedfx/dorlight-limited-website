import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (sectionId) => {
    if (location.pathname !== "/") {
      // Store target section for when the homepage loads
      sessionStorage.setItem("scrollTarget", sectionId);
      navigate("/");
    } else {
      // Already on home, just scroll immediately
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

  // Check if we're on homepage
  const isHomePage = location.pathname === "/";
  const isGalleryPage = location.pathname === "/gallery";

  return (
    <nav
      className={`navbar__maincontainer__wrapper ${
        isHomePage
          ? "navbar--absolute"
          : isGalleryPage
          ? "navbar--absolute"
          : "navbar--fixed"
      }`}
    >
      <div className="navbar__content__container">
        <Link to="/" className="navbar__logo__section">
          <div className="navbar__logo__icon">
            <img src="/assets/dorlight.jpg" alt="DORLIGHT logo" />
          </div>
          <span className="navbar__logo__text">DORLIGHT</span>
        </Link>

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
            <Link
              to="/"
              className={`navbar__link__item ${isActive("/")}`}
              onClick={() => setIsMenuOpen(false)}
            >
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
              to="/properties"
              className={`navbar__link__item ${isActive("/properties")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
          </li>
          <li className="navbar__menuitem__element">
            <Link
              to="/gallery"
              className={`navbar__link__item ${isActive("/gallery")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
          </li>
        </ul>

        <a
          className="navbar__contact__button"
          onClick={() => handleSectionClick("contact")}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
