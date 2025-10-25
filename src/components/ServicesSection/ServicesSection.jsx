import React from "react";
import "./ServicesSection.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const ServicesSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  const services = [
    {
      image: "/assets/services/property-development.png",
      title: "Property Development",
      description:
        "We design, construct, and deliver high-quality residential and commercial properties that combine functionality, durability, and aesthetic appeal. From modern housing estates and gated communities to mixed-use developments and office complexes.",
    },
    {
      image: "/assets/services/property-sales-marketing.jpg",
      title: "Property Sales & Marketing",
      description:
        "Our sales and marketing team bridges the gap between property buyers and sellers, ensuring smooth and profitable transactions. We provide tailored marketing strategies that give properties the right visibility, connecting them with qualified buyers and investors.",
    },
    {
      image: "/assets/services/property-leasing.jpg",
      title: "Property Leasing & Management",
      description:
        "We understand the importance of efficient property management in maximizing returns on investment. Our leasing and management services cover tenant acquisition, rent collection, facility upkeep, and customer support.",
    },
    {
      image: "/assets/services/investment-advisory.jpg",
      title: "Real Estate Investment Advisory",
      description:
        "For local and international investors, we provide strategic advice and market insights to help identify lucrative opportunities in the Nigerian real estate market. Our advisory services include feasibility studies, risk assessments, market analysis, and portfolio management.",
    },
    {
      image: "/assets/services/land-acquisition.jpg",
      title: "Land Acquisition & Documentation",
      description:
        "Acquiring land in Nigeria can be complex, but we simplify the process for our clients. We provide secure land acquisition services, verification of titles, and documentation support. Whether for residential, commercial, we ensure clients obtain legally recognized ownership.",
    },
    {
      image: "/assets/services/consultancy-valuation.jpg",
      title: "Consultancy & Valuation Service",
      description:
        "We provide expert consultancy services covering property valuation, feasibility studies and professional advice on real estate transactions. Whether for individual buyers, developers, or financial institutions, our valuation services are conducted with accuracy and transparency",
    },
  ];

  return (
    <section className="servicessection__wrapper__main" id="services">
      <div className="servicessection__container__content">
        <div
          ref={headerRef}
          className={`servicessection__header ${
            headerVisible ? "animate" : ""
          }`}
        >
          <h2 className="servicessection__subtitle">Our Services</h2>
        </div>
        <div
          ref={gridRef}
          className={`servicessection__grid__cards ${
            gridVisible ? "animate" : ""
          }`}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
