import React from "react";
import "./ProjectsSection.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const ProjectsSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

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
        <div
          ref={headerRef}
          className={`projects-section__header ${
            headerVisible ? "animate" : ""
          }`}
        >
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
        <div
          ref={gridRef}
          className={`projects-section__grid ${gridVisible ? "animate" : ""}`}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
