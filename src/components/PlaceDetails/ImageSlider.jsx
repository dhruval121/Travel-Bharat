import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../../styles/imageSlider.css';

const ImageSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(true);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-slider-container">
      {/* Main Image */}
      <div className="image-slider-main">
        <div>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="slider-nav-btn slider-nav-btn-left"
                aria-label="Previous image"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={handleNext}
                className="slider-nav-btn slider-nav-btn-right"
                aria-label="Next image"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="image-slider-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="image-slider-thumbnails-wrapper">
          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            className="image-slider-thumbnails-toggle"
          >
            {showThumbnails ? '▼ Hide' : '▶ Show'} Thumbnails
          </button>

          {showThumbnails && (
            <div className="image-slider-thumbnails">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`image-slider-thumbnail ${
                    index === currentIndex ? 'active' : ''
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
