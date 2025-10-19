import React from "react";
import "./BookInspectionModal.css";

const BookInspectionModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
    onClose();
  };

  return (
    <div className="inspection-modal__overlay" onClick={onClose}>
      <div
        className="inspection-modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="inspection-modal__close-btn" onClick={onClose}>
          ×
        </button>
        <h2 className="inspection-modal__title">Schedule Property Viewing</h2>
        <form className="inspection-modal__form" onSubmit={handleSubmit}>
          <div className="inspection-modal__form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className="inspection-modal__form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="inspection-modal__form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              placeholder="Enter your phone number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter any additional details"
            ></textarea>
          </div>
          <button type="submit" className="inspection-modal__submit-btn">
            Schedule Viewing
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookInspectionModal;
