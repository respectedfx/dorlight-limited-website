import React from "react";
import "./ProjectsSection.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const ProjectsSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  const projects = [
    {
      image: "/assets/images/ernest-estate.jpg",
      title: "Ernest Estate",
      subtitle:
        "A fast-growing residential community ideal for family living and long-term appreciation.",
    },
    {
      image: "/assets/images/favour-estate.jpg",
      title: "Favour Estate",
      subtitle:
        "Designed for smart investors and home seekers who value security, serenity, and accessibility.",
    },
    {
      image: "/assets/images/primeville-estate.jpg",
      title: "PrimeVille Estate",
      subtitle:
        "Perfect for forward-thinking buyers seeking affordable land in a promising location with excellent growth potential and verified documentation.",
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
            Featured Estates and Developments
          </h3>
          <p className="projects-section__description">
            Every project by Dorlight Limited reflects our dedication to
            authenticity, excellence, and sustainable value creation. We
            specialize in residential estates, investment-ready lands, and
            strategically located plots designed for both living and long-term
            investment.
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
