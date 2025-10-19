import React, { useState } from "react";
import "./HeroSection.css";
import BookInspectionModal from "../BookInspectionModal/BookInspectionModal";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitInspection = (data) => {
    // Handle the form submission here
    console.log("Inspection booking data:", data);
    // You can add API call or other logic here
  };

  return (
    <section className="herosection__mainwrapper__background" id="home">
      <div className="herosection__overlay__dark"></div>
      <div className="herosection__content__centered">
        <h1 className="herosection__title__main">
          Find Your Dream
          <br />
          House By Us
        </h1>
        <p className="herosection__title__subtitle">
          We provide a complete service for the sale, purchase or rental real
          estate.
        </p>
        <div className="herosection__buttons__container">
          <a
            href="#contact"
            className="herosection__button__primary"
            onClick={handleOpenModal}
          >
            Book Inspection
          </a>
        </div>
      </div>
      <BookInspectionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitInspection}
      />
    </section>
  );
};

export default HeroSection;
