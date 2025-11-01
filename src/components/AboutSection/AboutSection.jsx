import React from "react";
import "./AboutSection.css";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const AboutSection = () => {
  const [welcomeRef, welcomeVisible] = useScrollAnimation({ threshold: 0.2 });
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });
  const [visionRef, visionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [missionRef, missionVisible] = useScrollAnimation({ threshold: 0.2 });
  const [coreValuesRef, coreValuesVisible] = useScrollAnimation({
    threshold: 0.2,
  });
  const [quoteRef, quoteVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="aboutsection__wrapper__main" id="about">
      <div className="aboutsection__container__content">
        <h2
          ref={welcomeRef}
          className={`aboutsection__heading__welcome ${
            welcomeVisible ? "animate" : ""
          }`}
        >
          Welcome Home
        </h2>

        <div className="aboutsection__grid__twocolumn">
          <div
            ref={imageRef}
            className={`aboutsection__image__container ${
              imageVisible ? "animate" : ""
            }`}
          >
            <img
              src="/assets/about_us_img.jpg"
              alt="Modern building architecture"
              className="aboutsection__image__featured"
            />
          </div>

          <div
            ref={contentRef}
            className={`aboutsection__content__textblock ${
              contentVisible ? "animate" : ""
            }`}
          >
            <h3 className="aboutsection__title__aboutus">About Us</h3>
            <p className="aboutsection__paragraph__description">
              <strong>Dorlight Limited</strong> is a dynamic and innovative real
              estate company in Nigeria, dedicated to making property ownership
              accessible, transparent, and profitable. With a strong presence in
              both Lagos and Delta State, we connect aspiring homeowners,
              investors, and developers to genuine, verified, and high-value
              real estate opportunities across the country.
            </p>
            <p className="aboutsection__paragraph__description">
              Founded with the vision to redefine how Nigerians buy and invest
              in land, Dorlight Limited focuses on trust, integrity, and
              professionalism. These qualities have helped us stand out in the
              competitive real estate markets of Abuja, Warri, Delta, Ughelli,
              Asaba, and Lagos. Our team works tirelessly to simplify the
              process of property acquisition, ensuring that every client enjoys
              a seamless experience backed by clear documentation, expert
              guidance, and long-term value.
            </p>
            <p className="aboutsection__paragraph__description">
              At Dorlight, we understand that buying land or a home is more than
              a transaction; it's a life decision. That's why we ensure that
              every property we sell is authentic, properly documented and
              strategically located to yield long-term appreciation. Whether
              you're looking for residential plots in Ughelli, investment land
              in Asaba, or luxury estates in Lagos, we offer real estate
              solutions that fit your needs and budget.
            </p>
          </div>
        </div>

        <div
          ref={visionRef}
          className={`aboutsection__vision__block ${
            visionVisible ? "animate" : ""
          }`}
        >
          <h4 className="aboutsection__subtitle__vision">Our Vision</h4>
          <p className="aboutsection__text__visionmission">
            To become one of Nigeria's most trusted and respected real estate
            companies, delivering secure, affordable, and high-value property
            ownership opportunities that empower individuals, families, and
            communities to build lasting financial stability and generational
            wealth.
          </p>
        </div>

        <div
          ref={missionRef}
          className={`aboutsection__mission__block ${
            missionVisible ? "animate" : ""
          }`}
        >
          <h4 className="aboutsection__subtitle__mission">Our Mission</h4>
          <p className="aboutsection__text__visionmission">
            Our mission is to make real estate ownership simple, transparent and
            rewarding for Nigerians at home and abroad. We achieve this by
            offering verified and affordable properties in Delta State (Ughelli,
            Asaba, Warri), Abuja, and Lagos (Ajah, Lekki, VGC). We also provide
            professional consultation and guidance from inquiry to documentation
            while upholding integrity, trust, and transparency in every
            transaction. Through exceptional service and consistent value
            delivery, we help homeowners and investors make confident, informed
            property decisions.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="aboutsection__corevalues__section">
        <div className="aboutsection__corevalues__bg">
          <div className="aboutsection__corevalues__overlay"></div>
          <div
            ref={coreValuesRef}
            className={`aboutsection__corevalues__content ${
              coreValuesVisible ? "animate" : ""
            }`}
          >
            <h3 className="aboutsection__corevalues__title">Our Core Values</h3>
            <div className="aboutsection__corevalues__list">
              <span className="aboutsection__corevalue__item">Integrity</span>
              <span className="aboutsection__corevalue__divider">|</span>
              <span className="aboutsection__corevalue__item">
                Customer Commitment
              </span>
              <span className="aboutsection__corevalue__divider">|</span>
              <span className="aboutsection__corevalue__item">Excellence</span>
              <span className="aboutsection__corevalue__divider">|</span>
              <span className="aboutsection__corevalue__item">Innovation</span>
              <span className="aboutsection__corevalue__divider">|</span>
              <span className="aboutsection__corevalue__item">
                Accountability
              </span>
              <span className="aboutsection__corevalue__divider">|</span>
              <span className="aboutsection__corevalue__item">
                Growth Mindset
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div
        ref={quoteRef}
        className={`aboutsection__quote__section ${
          quoteVisible ? "animate" : ""
        }`}
      >
        <div className="aboutsection__quote__grid">
          <div className="aboutsection__quote__image">
            <img
              src="/assets/anatolli.jpg"
              alt="Rev. Dorcas Edoja"
              className="aboutsection__chairman__image"
            />
            <div className="aboutsection__chairman__text">
              <p className="aboutsection__chairman__label">Rev. Dorcas Edoja</p>
              <p className="aboutsection__chairman__label">
                Chairman, DORLIGHT LIMITED
              </p>
            </div>
          </div>
          <div className="aboutsection__quote_content_container">
            <div className="aboutsection__quote__content">
              <p className="aboutsection__quote__text">
                Building Dreams, Creating Opportunities
              </p>
              <p className="aboutsection__quote__description">
                At Dorlight Limited, we believe that real estate is more than
                just property—it's about creating homes, building communities,
                and fostering growth. Our commitment to integrity, innovation,
                and client satisfaction drives everything we do. Join us as we
                continue to redefine excellence in Nigeria's real estate
                landscape.
              </p>
              <button className="aboutsection__quote__button">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
