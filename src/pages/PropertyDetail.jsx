import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { client, urlFor } from "../sanity/client";
import "./PropertyDetail.css";

const PropertyDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedProperties, setRelatedProperties] = useState([]);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const query = `*[_type == "properties" && slug.current == $slug][0] {
          _id,
          name,
          location,
          price,
          size,
          titleType,
          image,
          images,
          description,
          isFeatured,
          slug
        }`;
        const data = await client.fetch(query, { slug });

        if (!data) {
          navigate("/properties");
          return;
        }

        setProperty(data);

        // Fetch related properties
        const relatedQuery = `*[_type == "properties" && _id != $id] | order(_createdAt desc) [0...3] {
          _id,
          name,
          location,
          price,
          size,
          titleType,
          image,
          slug
        }`;
        const related = await client.fetch(relatedQuery, { id: data._id });
        setRelatedProperties(related);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching property:", error);
        setLoading(false);
      }
    };

    fetchProperty();
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  const formatPrice = (price) => {
    return `₦${price.toLocaleString()}`;
  };

  const handleContactClick = () => {
    const message = `Hello, I'm interested in ${property.name} located at ${
      property.location
    }. Price: ${formatPrice(property.price)}`;
    const whatsappUrl = `https://wa.me/2348000000000?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  if (loading) {
    return (
      <div className="property-detail__wrapper">
        <div className="property-detail__container">
          <p className="property-detail__loading">
            Loading property details...
          </p>
        </div>
      </div>
    );
  }

  if (!property) {
    return null;
  }

  const allImages = property.images
    ? [property.image, ...property.images]
    : [property.image];

  return (
    <div className="property-detail__wrapper">
      {/* Breadcrumb */}
      <div className="property-detail__breadcrumb">
        <div className="property-detail__breadcrumb-container">
          <Link to="/">Home</Link>
          <span className="property-detail__breadcrumb-separator">/</span>
          <Link to="/properties">Properties</Link>
          <span className="property-detail__breadcrumb-separator">/</span>
          <span>{property.name}</span>
        </div>
      </div>

      <div className="property-detail__container">
        <div className="property-detail__content">
          {/* Main Content */}
          <div className="property-detail__main">
            {/* Image Gallery */}
            <div className="property-detail__gallery">
              <div className="property-detail__gallery-main">
                <img
                  src={urlFor(allImages[selectedImage])
                    .width(1200)
                    .height(800)
                    .url()}
                  alt={property.name}
                  className="property-detail__main-image"
                />
                {property.isFeatured && (
                  <span className="property-detail__featured-badge">
                    Featured
                  </span>
                )}
              </div>

              {allImages.length > 1 && (
                <div className="property-detail__gallery-thumbnails">
                  {allImages.map((img, index) => (
                    <button
                      key={index}
                      className={`property-detail__thumbnail ${
                        selectedImage === index
                          ? "property-detail__thumbnail--active"
                          : ""
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={urlFor(img).width(200).height(150).url()}
                        alt={`${property.name} ${index + 1}`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property Details */}
            <div className="property-detail__info">
              <h1 className="property-detail__title">{property.name}</h1>

              <div className="property-detail__location-row">
                <svg
                  className="property-detail__location-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="property-detail__location">
                  {property.location}
                </span>
              </div>

              <div className="property-detail__price-section">
                <span className="property-detail__price-label">
                  Outright Price
                </span>
                <span className="property-detail__price">
                  {formatPrice(property.price)}
                </span>
              </div>

              {/* Key Features */}
              <div className="property-detail__features">
                <h3 className="property-detail__features-title">
                  Key Features
                </h3>
                <div className="property-detail__features-grid">
                  {property.size && (
                    <div className="property-detail__feature">
                      <div className="property-detail__feature-icon">📐</div>
                      <div className="property-detail__feature-content">
                        <span className="property-detail__feature-label">
                          Size
                        </span>
                        <span className="property-detail__feature-value">
                          {property.size} sqm
                        </span>
                      </div>
                    </div>
                  )}

                  {property.titleType && (
                    <div className="property-detail__feature">
                      <div className="property-detail__feature-icon">📄</div>
                      <div className="property-detail__feature-content">
                        <span className="property-detail__feature-label">
                          Title Type
                        </span>
                        <span className="property-detail__feature-value">
                          {property.titleType}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Description */}
              {property.description && (
                <div className="property-detail__description">
                  <h3 className="property-detail__description-title">
                    Description
                  </h3>
                  <p className="property-detail__description-text">
                    {property.description}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="property-detail__sidebar">
            <div className="property-detail__contact-card">
              <h3 className="property-detail__contact-title">
                Interested in this property?
              </h3>
              <p className="property-detail__contact-subtitle">
                Get in touch with us for more information or to schedule a
                viewing.
              </p>

              <button
                className="property-detail__contact-btn"
                onClick={handleContactClick}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Contact on WhatsApp
              </button>

              <div className="property-detail__contact-divider">or</div>

              <Link
                to="/#contact"
                className="property-detail__contact-btn-secondary"
              >
                Send Inquiry
              </Link>
            </div>

            {/* Property Summary */}
            <div className="property-detail__summary">
              <h4 className="property-detail__summary-title">
                Property Summary
              </h4>
              <div className="property-detail__summary-item">
                <span className="property-detail__summary-label">Name:</span>
                <span className="property-detail__summary-value">
                  {property.name}
                </span>
              </div>
              <div className="property-detail__summary-item">
                <span className="property-detail__summary-label">
                  Location:
                </span>
                <span className="property-detail__summary-value">
                  {property.location}
                </span>
              </div>
              <div className="property-detail__summary-item">
                <span className="property-detail__summary-label">Price:</span>
                <span className="property-detail__summary-value">
                  {formatPrice(property.price)}
                </span>
              </div>
              {property.size && (
                <div className="property-detail__summary-item">
                  <span className="property-detail__summary-label">Size:</span>
                  <span className="property-detail__summary-value">
                    {property.size} sqm
                  </span>
                </div>
              )}
              {property.titleType && (
                <div className="property-detail__summary-item">
                  <span className="property-detail__summary-label">Title:</span>
                  <span className="property-detail__summary-value">
                    {property.titleType}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Related Properties */}
        {relatedProperties.length > 0 && (
          <div className="property-detail__related">
            <h2 className="property-detail__related-title">
              You May Also Like
            </h2>
            <div className="property-detail__related-grid">
              {relatedProperties.map((related) => (
                <Link
                  to={`/properties/${related.slug.current}`}
                  key={related._id}
                  className="property-detail__related-card"
                >
                  <div className="property-detail__related-image-wrapper">
                    <img
                      src={urlFor(related.image).width(600).height(400).url()}
                      alt={related.name}
                      className="property-detail__related-image"
                    />
                  </div>
                  <div className="property-detail__related-content">
                    <h3 className="property-detail__related-name">
                      {related.name}
                    </h3>
                    <p className="property-detail__related-location">
                      {related.location}
                    </p>
                    <p className="property-detail__related-price">
                      {formatPrice(related.price)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyDetail;
