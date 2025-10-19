import React, { useState } from "react";
import "./NewsletterSection.css";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="newslettersection__wrapper__background">
      <div className="newslettersection__container__content">
        <div className="newslettersection__container__text">
          <h3 className="newslettersection__heading__title">
            Subscribe to get our newsletter
          </h3>
          <p className="newslettersection__heading__subtitle">
            Stay ahead with early updates on new releases and industry insights.
          </p>
        </div>
        <div className="newslettersection__container__form">
          <form
            className="newslettersection__form__inline"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="newslettersection__input__email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="newslettersection__button__subscribe"
            >
              Subscribe
            </button>
          </form>
          <div>
            <p className="newslettersection__privacy__text">
              Our <span> privacy policy</span> reflects our commitment to
              safeguarding your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
