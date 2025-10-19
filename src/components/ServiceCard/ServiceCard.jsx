import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="servicecard__wrapper__container">
      <div className="servicecard__image__container">
        <img src={image} alt={title} className="servicecard__image" />
      </div>
      <div className="servicecard__content__block">
        <h3 className="servicecard__title__heading">{title}</h3>
        <p className="servicecard__description__text">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
