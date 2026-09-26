import React, { useState, useEffect } from 'react';
import '../styles/galleryLightbox.css';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

/**
 * GalleryLightbox Component
 * Displays full-screen image preview with navigation controls
 * Features: Next/Prev navigation, keyboard controls, swipe support
 */
const GalleryLightbox = ({ isOpen, currentImage, images, onClose, onNext, onPrev }) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen, onNext, onPrev, onClose]);

  // Touch/Swipe support
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe(touchStart, e.changedTouches[0].clientX);
  };

  const handleSwipe = (start, end) => {
    if (!start || !end) return;
    
    const distance = start - end;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) onNext();
    if (isRightSwipe) onPrev();
  };

  if (!isOpen || !currentImage) return null;

  const currentIndex = images.findIndex(img => img.id === currentImage.id);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div
        className="lightbox-container"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close Button */}
        <button className="lightbox-close" onClick={onClose} aria-label="Close gallery">
          <X size={32} />
        </button>

        {/* Main Image */}
        <div className="lightbox-image-wrapper">
          <img
            src={currentImage.image}
            alt={currentImage.name}
            className="lightbox-image"
            loading="lazy"
          />
        </div>

        {/* Image Info */}
        <div className="lightbox-info">
          <div className="lightbox-details">
            <h3 className="lightbox-title">{currentImage.name}</h3>
            <p className="lightbox-location">
              📍 {currentImage.state} • {currentImage.category}
            </p>
            <p className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              className="lightbox-nav lightbox-prev"
              onClick={onPrev}
              aria-label="Previous image"
              title="Previous (← or swipe right)"
            >
              <ChevronLeft size={40} />
            </button>

            <button
              className="lightbox-nav lightbox-next"
              onClick={onNext}
              aria-label="Next image"
              title="Next (→ or swipe left)"
            >
              <ChevronRight size={40} />
            </button>
          </>
        )}

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="lightbox-thumbnails">
            {images.map((img, idx) => (
              <button
                key={img.id}
                className={`lightbox-thumbnail ${
                  img.id === currentImage.id ? 'active' : ''
                }`}
                onClick={() => {
                  // This would need to be handled by parent component
                  // For now, we'll use prev/next
                }}
                title={`Go to image ${idx + 1}`}
              >
                <img src={img.image} alt={`Thumbnail ${idx + 1}`} />
              </button>
            ))}
          </div>
        )}

        {/* Keyboard Hint */}
        <div className="lightbox-hint">
          <small>← → Arrow keys or Swipe | ESC to close</small>
        </div>
      </div>
    </div>
  );
};

export default GalleryLightbox;
