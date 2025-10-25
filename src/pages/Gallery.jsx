import React, { useState, useEffect, useRef } from "react";
import { useGalleryImages } from "../hooks/useGalleryImages";
import { urlFor } from "../sanity/client";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const { images, loading, error } = useGalleryImages();
  const observerRef = useRef();
  const imagesPerPage = 20;

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const paginatedImages = images.slice(startIndex, endIndex);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
              observerRef.current.unobserve(img);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const galleryImages = document.querySelectorAll(
      ".gallery__image[data-src]"
    );
    galleryImages.forEach((img) => {
      if (observerRef.current) {
        observerRef.current.observe(img);
      }
    });
  }, [currentPage, paginatedImages]);

  // Reset loaded images when page changes
  useEffect(() => {
    setLoadedImages(new Set());
  }, [currentPage]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleImageLoad = (imageId) => {
    setLoadedImages((prev) => new Set(prev).add(imageId));
  };

  // Show loading state with skeletons
  if (loading) {
    return (
      <div className="gallery__page">
        <section className="gallery__hero">
          <div className="gallery__hero__overlay"></div>
          <div className="gallery__hero__content">
            <h1 className="gallery__hero__title">Our Gallery</h1>
          </div>
        </section>
        <div className="gallery__container">
          <div className="gallery__grid">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="gallery__item gallery__skeleton">
                <div className="skeleton__image"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="gallery__page">
        <section className="gallery__hero">
          <div className="gallery__hero__overlay"></div>
          <div className="gallery__hero__content">
            <h1 className="gallery__hero__title">Our Gallery</h1>
          </div>
        </section>
        <div className="gallery__container">
          <div className="gallery__error">
            <p className="gallery__error__message">Error loading images</p>
            <button
              className="gallery__error__retry"
              onClick={() => window.location.reload()}
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery__page">
      {/* Hero Section */}
      <section className="gallery__hero">
        <div className="gallery__hero__overlay"></div>
        <div className="gallery__hero__content">
          <h1 className="gallery__hero__title">Our Gallery</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <div className="gallery__container">
        <div className="gallery__grid">
          {paginatedImages.map((image) => {
            const imageUrl = urlFor(image.image).width(800).height(600).url();
            const isLoaded = loadedImages.has(image._id);

            return (
              <div
                key={image._id}
                className="gallery__item"
                onClick={() => handleImageClick(image)}
              >
                {!isLoaded && (
                  <div className="gallery__skeleton">
                    <div className="skeleton__image"></div>
                  </div>
                )}
                <img
                  data-src={imageUrl}
                  alt={image.alt}
                  className={`gallery__image ${isLoaded ? "loaded" : ""}`}
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                  onLoad={() => handleImageLoad(image._id)}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x400/4a90e2/ffffff?text=${encodeURIComponent(
                      image.title
                    )}`;
                    handleImageLoad(image._id);
                  }}
                />
                <div className="gallery__overlay">
                  <span className="gallery__view">View</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="gallery__pagination">
            <button
              className="gallery__pagination__button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <div className="gallery__pagination__info">
              <span className="gallery__pagination__current">
                Page {currentPage} of {totalPages}
              </span>
            </div>
            <button
              className="gallery__pagination__button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="gallery__modal" onClick={handleCloseModal}>
          <div
            className="gallery__modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gallery__modal__close"
              onClick={handleCloseModal}
            >
              ×
            </button>
            <img
              src={urlFor(selectedImage.image).url()}
              alt={selectedImage.alt}
              className="gallery__modal__image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
