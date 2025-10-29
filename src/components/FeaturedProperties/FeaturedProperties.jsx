import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "../../sanity/client";
import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const query = `*[_type == "properties" && isFeatured == true] | order(_createdAt desc) [0...6] {
          _id,
          name,
          location,
          price,
          size,
          titleType,
          image,
          slug
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + properties.length) % properties.length
    );
  };

  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  if (loading) {
    return (
      <section className="featured-properties__wrapper">
        <div className="featured-properties__container">
          <h2 className="featured-properties__heading">
            Featured{" "}
            <span className="featured-properties__heading--accent">
              Property
            </span>
          </h2>
          <p className="featured-properties__loading">Loading properties...</p>
        </div>
      </section>
    );
  }

  if (properties.length === 0) {
    return null;
  }

  const getVisibleProperties = () => {
    if (properties.length <= 3) return properties;

    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(properties[(currentIndex + i) % properties.length]);
    }
    return visible;
  };

  const visibleProperties = getVisibleProperties();

  return (
    <section className="featured-properties__wrapper" id="properties">
      <div className="featured-properties__container">
        <h2 className="featured-properties__heading">
          Featured{" "}
          <span className="featured-properties__heading--accent">Property</span>
        </h2>

        <div className="featured-properties__carousel">
          {properties.length > 3 && (
            <button
              className="featured-properties__nav featured-properties__nav--prev"
              onClick={prevSlide}
              aria-label="Previous properties"
            >
              ‹
            </button>
          )}

          <div className="featured-properties__grid">
            {visibleProperties.map((property) => (
              <Link
                to={`/properties/${property.slug.current}`}
                key={property._id}
                className="featured-property__card"
              >
                <div className="featured-property__image-wrapper">
                  <img
                    src={urlFor(property.image).width(800).height(600).url()}
                    alt={property.name}
                    className="featured-property__image"
                  />
                </div>

                <div className="featured-property__content">
                  <h3 className="featured-property__name">{property.name}</h3>

                  <p className="featured-property__location">
                    {property.location}
                  </p>

                  <p className="featured-property__price">
                    Outright price:{" "}
                    <strong>{formatPrice(property.price)}</strong>
                  </p>

                  {property.size && property.titleType && (
                    <p className="featured-property__details">
                      {property.size}sqm Title: {property.titleType}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {properties.length > 3 && (
            <button
              className="featured-properties__nav featured-properties__nav--next"
              onClick={nextSlide}
              aria-label="Next properties"
            >
              ›
            </button>
          )}
        </div>

        <div className="featured-properties__footer">
          <Link to="/properties" className="featured-properties__view-all">
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
