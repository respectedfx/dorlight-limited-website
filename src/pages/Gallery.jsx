import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const observerRef = useRef();
  const imagesPerPage = 20;

  const galleryImages = Array.from({ length: 150 }, (_, i) => ({
    id: i + 1,
    src: `/assets/gallery/image${i + 1}.jpg`,
    alt: `Gallery image ${i + 1}`,
  }));

  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const paginatedImages = galleryImages.slice(startIndex, endIndex);

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
    const images = document.querySelectorAll(".gallery__image[data-src]");
    images.forEach((img) => {
      if (observerRef.current) {
        observerRef.current.observe(img);
      }
    });
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
          {paginatedImages.map((image) => (
            <div
              key={image.id}
              className="gallery__item"
              onClick={() => handleImageClick(image)}
            >
              <img
                data-src={image.src}
                alt={image.alt}
                className="gallery__image"
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/400x400/4a90e2/ffffff?text=Image+${image.id}`;
                }}
              />
              <div className="gallery__overlay">
                <span className="gallery__view">View</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
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
              src={selectedImage.src}
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
