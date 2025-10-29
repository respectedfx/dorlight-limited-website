import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../sanity/client";
import "./Properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const query = `*[_type == "properties"] | order(_createdAt desc) {
          _id,
          name,
          location,
          price,
          size,
          titleType,
          image,
          slug,
          isFeatured
        }`;
        const data = await client.fetch(query);
        setProperties(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching properties:", error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  const filteredProperties = properties.filter((property) => {
    if (filter === "all") return true;
    if (filter === "featured") return property.isFeatured;
    return true;
  });

  if (loading) {
    return (
      <div className="properties-page__wrapper">
        <div className="properties-page__container">
          <p className="properties-page__loading">Loading properties...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="properties-page__wrapper">
      <div className="properties-page__hero">
        <h1 className="properties-page__title">Our Properties</h1>
        <p className="properties-page__subtitle">
          Discover your dream property from our exclusive collection
        </p>
      </div>

      <div className="properties-page__container">
        <div className="properties-page__filters">
          <button
            className={`properties-page__filter-btn ${
              filter === "all" ? "properties-page__filter-btn--active" : ""
            }`}
            onClick={() => setFilter("all")}
          >
            All Properties
          </button>
          <button
            className={`properties-page__filter-btn ${
              filter === "featured" ? "properties-page__filter-btn--active" : ""
            }`}
            onClick={() => setFilter("featured")}
          >
            Featured Only
          </button>
        </div>

        {filteredProperties.length === 0 ? (
          <p className="properties-page__empty">No properties found.</p>
        ) : (
          <div className="properties-page__grid">
            {filteredProperties.map((property) => (
              <Link
                to={`/properties/${property.slug.current}`}
                key={property._id}
                className="property-card"
              >
                <div className="property-card__image-wrapper">
                  <img
                    src={urlFor(property.image).width(800).height(600).url()}
                    alt={property.name}
                    className="property-card__image"
                  />
                  {property.isFeatured && (
                    <span className="property-card__featured-badge">
                      Featured
                    </span>
                  )}
                </div>

                <div className="property-card__content">
                  <h3 className="property-card__name">{property.name}</h3>

                  <p className="property-card__location">{property.location}</p>

                  <p className="property-card__price">
                    Outright price:{" "}
                    <strong>{formatPrice(property.price)}</strong>
                  </p>

                  {property.size && property.titleType && (
                    <p className="property-card__details">
                      {property.size}sqm Title: {property.titleType}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
