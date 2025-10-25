import React from "react";
import "./StatsSection.css";
import StatCard from "../StatCard/StatCard";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const StatsSection = () => {
  const [gridRef, gridVisible] = useScrollAnimation();

  const stats = [
    { icon: "totalArea", value: "560+", label: "Developed Land Area" },
    { icon: "apartments", value: "560+", label: "Luxury Apartments Delivered" },
    { icon: "constructions", value: "560+", label: "Completed Projects" },
    { icon: "rooms", value: "300+", label: "Serviced Apartments" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-section__container">
        <div
          ref={gridRef}
          className={`stats-section__grid ${gridVisible ? "animate" : ""}`}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} index={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
