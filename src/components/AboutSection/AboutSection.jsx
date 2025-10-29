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
              Welcome to <strong>Dorlight Limited</strong>, where your real
              estate aspirations become reality. With a commitment to integrity,
              professionalism, and client-centric service, we deliver tailored
              solutions to meet your unique needs. Under the visionary
              leadership of our Chairman, <strong>Rev. Dorcas Edoja</strong>, we
              are redefining real estate in Nigeria through innovation, quality,
              and trust.
            </p>
            <p className="aboutsection__paragraph__description">
              Our team combines deep industry expertise with a passion for
              excellence, ensuring that every project we undertake meets the
              highest standards of quality, transparency, and value. From
              residential estates to commercial developments, we design and
              deliver properties that reflect functionality, comfort, and
              long-term investment potential.
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
            To emerge the gap between modern living and community while
            providing remarkable value through premium real estate development.
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
            We are committed to empowering our clients with transparency and
            integrity, ensuring they enjoy the best property development. Our
            goal is to go beyond standards, build trust, and make the dream of
            owning beautiful real estate a reality for all.
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
              <span className="aboutsection__corevalue__item">
                I — Integrity
              </span>
              <span className="aboutsection__corevalue__divider">|</span>
              <span className="aboutsection__corevalue__item">
                P — Professionalism
              </span>
              <span className="aboutsection__corevalue__divider">|</span>
              <span className="aboutsection__corevalue__item">
                E — Excellence
              </span>
              <span className="aboutsection__corevalue__divider">|</span>
              <span className="aboutsection__corevalue__item">
                A — Accountability
              </span>
              <span className="aboutsection__corevalue__divider">|</span>
              <span className="aboutsection__corevalue__item">
                S — Sustainability
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
