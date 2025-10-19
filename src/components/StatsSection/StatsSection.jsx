import React from "react";
import "./StatsSection.css";
import StatCard from "../StatCard/StatCard";

const StatsSection = () => {
  const stats = [
    { icon: "totalArea", value: "560+", label: "Total Area Sq" },
    { icon: "apartments", value: "560+", label: "Apartments Sold" },
    { icon: "constructions", value: "560+", label: "Total Constructions" },
    { icon: "rooms", value: "300+", label: "Apartio Rooms" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-section__container">
        <div className="stats-section__grid">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
