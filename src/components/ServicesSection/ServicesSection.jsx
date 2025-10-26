import React from "react";
import "./ServicesSection.css";
import ServiceCard from "../ServiceCard/ServiceCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const ServicesSection = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [introRef, introVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  const [whyChooseRef, whyChooseVisible] = useScrollAnimation();

  const services = [
    {
      image: "/assets/services/property-sales-marketing.jpg",
      title: "Property Sales & Marketing",
      description:
        "We connect buyers and sellers with seamless, results-driven real estate transactions. Whether you're searching for your dream home, a commercial space, or aiming to sell your property, our expert team leverages strategic marketing to maximize exposure and value. From initial listing to final closing, we ensure a streamlined, stress-free experience.",
    },
    {
      image: "/assets/services/property-development.png",
      title: "Property Development",
      description:
        "At Dorlight Limited, we transform ideas into exceptional spaces. Our property development services cover residential estates, commercial projects, and mixed-use developments. We manage every stage: planning, design, construction, and delivery, with a focus on quality craftsmanship, modern aesthetics, and sustainable practices that enhance communities and lifestyles.",
    },
    {
      image: "/assets/services/investment-advisory.jpg",
      title: "Real Estate Investment Advisory",
      description:
        "Navigate the dynamic real estate market with confidence. Our personalized advisory services empower both novice and seasoned investors to make informed decisions. We analyze market trends, identify high-yield opportunities, and craft tailored strategies to optimize returns while minimizing risks, ensuring your investments align with your financial goals.",
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
          ref={introRef}
          className={`servicessection__intro ${introVisible ? "animate" : ""}`}
        >
          <p className="servicessection__intro__text">
            Welcome to <strong>Dorlight Limited</strong>, where your real estate
            aspirations become reality. With a commitment to integrity,
            professionalism, and client-centric service, we deliver tailored
            solutions to meet your unique needs. Under the visionary leadership
            of our Chairman, <strong>Rev. Dorcas Edoja</strong>, we are
            redefining real estate in Nigeria through innovation, quality, and
            trust.
          </p>
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

        <div
          ref={whyChooseRef}
          className={`servicessection__why__choose ${
            whyChooseVisible ? "animate" : ""
          }`}
        >
          <h3 className="servicessection__why__title">
            Why Choose Dorlight Limited?
          </h3>
          <div className="servicessection__why__grid">
            <div className="servicessection__why__item">
              <h4 className="servicessection__why__item__title">
                Client-Centric Approach
              </h4>
              <p className="servicessection__why__item__text">
                Your needs drive our solutions.
              </p>
            </div>
            <div className="servicessection__why__item">
              <h4 className="servicessection__why__item__title">
                Innovative Excellence
              </h4>
              <p className="servicessection__why__item__text">
                We blend modern design with sustainable practices.
              </p>
            </div>
            <div className="servicessection__why__item">
              <h4 className="servicessection__why__item__title">
                Trusted Expertise
              </h4>
              <p className="servicessection__why__item__text">
                Led by <strong>Rev. Dorcas Edoja</strong>, our team delivers
                results with integrity.
              </p>
            </div>
          </div>
        </div>

        <div className="servicessection__closing">
          <p className="servicessection__closing__text">
            At <strong>Dorlight Limited</strong>, we don't just build
            properties, we create opportunities and turn dreams into reality.
            Contact us today to find, develop, or invest in your ideal property!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
