import React from "react";
import "./StatCard.css";
import icons from "./icons";

const StatCard = ({ icon, value, label, index }) => {
  const IconComponent = icons[icon];

  return (
    <div className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="stat-card__icon">
        <IconComponent />
      </div>
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
};

export default StatCard;
