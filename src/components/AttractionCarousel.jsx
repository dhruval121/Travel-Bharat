import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/attractionCarousel.css';

const AttractionCarousel = ({ attractions }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? attractions.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === attractions.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (!attractions || attractions.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === attractions.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change card every 3 seconds

    return () => clearInterval(interval);
  }, [attractions]);

  if (!attractions || attractions.length === 0) {
    return null;
  }

  const currentAttraction = attractions[currentIndex];

  return (
    <div className="state-carousel-container">
      <div className="state-carousel-image-wrapper">
        <img
          src={currentAttraction.image}
          alt={currentAttraction.name}
          className="state-carousel-image"
        />
        <div className="state-carousel-overlay"></div>
        {currentAttraction.category && (
          <div className="state-carousel-badge">{currentAttraction.category}</div>
        )}
      </div>

      {attractions.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="state-carousel-arrow state-carousel-arrow-left"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="state-carousel-arrow state-carousel-arrow-right"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="state-carousel-indicators">
            {attractions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`state-carousel-indicator ${
                  index === currentIndex ? 'active' : ''
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </>
      )}
      
    </div>
  );
};

export default AttractionCarousel;
