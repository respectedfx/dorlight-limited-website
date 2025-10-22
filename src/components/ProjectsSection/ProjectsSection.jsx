import React from "react";
import "./ProjectsSection.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      image: "/assets/images/sterling-groove.jpg",
      title: "The Sterling Groove",
      subtitle: "4-Bedroom Terrace",
    },
    {
      image: "/assets/images/marquis-court.jpg",
      title: "The Marquis Court",
      subtitle: "4-Bedroom Terrace",
    },
    {
      image: "/assets/images/arden-place.jpg",
      title: "Arden Place",
      subtitle: "4-Bedroom Terrace",
    },
    {
      image: "/assets/images/aqua-vista-residences.jpg",
      title: "Aqua Vista Residences",
      subtitle: "4-Bedroom Terrace",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-section__container">
        <div className="projects-section__header">
          <h2 className="projects-section__title">Our Projects</h2>
          <h3 className="projects-section__subtitle">
            Tech-Embedded Buildings
          </h3>
          <p className="projects-section__description">
            Every home we deliver represents the perfect blend of contemporary
            design and long-term value. From stylish apartments and townhouses
            to luxurious penthouses and villas.
          </p>
        </div>

        <div className="projects-section__grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
