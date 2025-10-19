import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ image, title, subtitle }) => {
  return (
    <div className="project-card">
      <div className="project-card__image">
        <img src={image} alt={title} />
        <div className="project-card__overlay">
          <div className="project-card__content">
            <h3 className="project-card__title">{title}</h3>
            <p className="project-card__subtitle">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
