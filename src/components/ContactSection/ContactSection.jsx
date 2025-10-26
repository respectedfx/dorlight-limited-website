import React, { useState } from "react";
import "./ContactSection.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const ContactSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation();
  const [infoRef, infoVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contactsection__wrapper__main" id="contact">
      <div className="contactsection__container__content">
        <h2
          ref={titleRef}
          className={`contactsection__title ${titleVisible ? "animate" : ""}`}
        >
          Contact Us
        </h2>

        <div
          ref={imageRef}
          className={`contactsection__image ${imageVisible ? "animate" : ""}`}
        >
          <img src="/assets/images/contact-us.jpg" alt="Contact Us" />
        </div>

        <div className="contactsection__grid__layout">
          <div
            ref={infoRef}
            className={`contactsection__info__block ${
              infoVisible ? "animate" : ""
            }`}
          >
            <div className="contactsection__info__item">
              <div className="contactsection__icon__wrapper">
                <FaMapMarkerAlt color="#B70C1C" size={24} />
              </div>
              <div className="contactsection__info__content">
                <h4 className="contactsection__info__label">Head Office:</h4>
                <p className="contactsection__info__text">
                  No. 4 Efeakpokrire Street, off Oteri Road, Ughelli, Delta
                  State, Nigeria
                </p>
              </div>
            </div>

            <div className="contactsection__info__item">
              <div className="contactsection__icon__wrapper">
                <FaMapMarkerAlt color="#B70C1C" size={24} />
              </div>
              <div className="contactsection__info__content">
                <h4 className="contactsection__info__label">Branch Office:</h4>
                <p className="contactsection__info__text">
                  Road 4, Suite H415/416, Ikota Shopping Complex, VGC-Ajah,
                  Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="contactsection__info__item">
              <div className="contactsection__icon__wrapper">
                <FaEnvelope color="#B70C1C" size={24} />
              </div>
              <div className="contactsection__info__content">
                <h4 className="contactsection__info__label">Email:</h4>
                <p className="contactsection__info__text">
                  dorlightventures@gmail.com
                </p>
              </div>
            </div>

            <div className="contactsection__info__item">
              <div className="contactsection__icon__wrapper">
                <FaPhone color="#B70C1C" size={24} />
              </div>
              <div className="contactsection__info__content">
                <h4 className="contactsection__info__label">Phone:</h4>
                <p className="contactsection__info__text">+234 703 987 8884</p>
              </div>
            </div>
          </div>

          <form
            ref={formRef}
            className={`contactsection__form ${formVisible ? "animate" : ""}`}
            onSubmit={handleSubmit}
          >
            <div className="contactsection__form__row">
              <div className="contactsection__form__group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contactsection__form__input"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="contactsection__form__group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contactsection__form__input"
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="contactsection__form__group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="contactsection__form__input"
                placeholder="Subject"
                required
              />
            </div>

            <div className="contactsection__form__group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contactsection__form__textarea"
                placeholder="Your Message"
                required
                rows="4"
              ></textarea>
            </div>

            <button type="submit" className="contactsection__form__submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
