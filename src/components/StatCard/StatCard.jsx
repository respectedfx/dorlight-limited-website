import React from "react";
import "./StatCard.css";
import icons from "./icons";

const StatCard = ({ icon, value, label }) => {
  const IconComponent = icons[icon];

  return (
    <div className="stat-card">
      <div className="stat-card__icon">
        <IconComponent />
      </div>
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
};

export default StatCard;
