import React from "react";
import "./ProjectsSection.css";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      image: "/assets/paramount-oak.jpg",
      title: "Paramount Oak",
      subtitle: "4-Bedroom Terrace",
    },
    {
      image: "/assets/imperial-emerald.jpg",
      title: "Imperial Emerald",
      subtitle: "4-Bedroom Terrace",
    },
    {
      image: "/assets/luke-place.jpg",
      title: "Luke Place",
      subtitle: "4-Bedroom Terrace",
    },
    {
      image: "/assets/lake-residence.jpg",
      title: "Lake Residence",
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
