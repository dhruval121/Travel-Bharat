import React, { useState, useMemo, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryLightbox from '../components/GalleryLightbox';
import { galleryData, getUniqueCategories, getUniqueStates } from '../data/galleryData';
import '../styles/galleryPage.css';
import { ChevronDown, Search } from 'lucide-react';

/**
 * Gallery Page Component
 * Displays a filterable gallery of India's attractions with lightbox preview
 * Features: Category & State filters, search, responsive grid, lazy loading
 */
const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedState, setSelectedState] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageHovered, setImageHovered] = useState(null);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showStateDropdown, setShowStateDropdown] = useState(false);

  const categories = ['All', ...getUniqueCategories()];
  const states = ['All', ...getUniqueStates()];

  // Filter gallery data
  const filteredImages = useMemo(() => {
    return galleryData.filter(item => {
      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchState = selectedState === 'All' || item.state === selectedState;
      const matchSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase());

      return matchCategory && matchState && matchSearch;
    });
  }, [selectedCategory, selectedState, searchTerm]);

  // Open lightbox
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowCategoryDropdown(false);
      setShowStateDropdown(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="gallery-page">
      <Navbar />

      {/* Header Section */}
      <section className="gallery-header">
        <div className="gallery-header-content">
          <h1 className="gallery-title">Explore India Through Images</h1>
          <p className="gallery-subtitle">Discover the beauty of every region</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="gallery-section">
        <div className="gallery-container">
          {/* Gallery Grid */}
          {filteredImages.length > 0 ? (
            <div className="gallery-grid">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="gallery-card"
                  onMouseEnter={() => setImageHovered(image.id)}
                  onMouseLeave={() => setImageHovered(null)}
                >
                  <div
                    className="gallery-image-container"
                    onClick={() => openLightbox(index)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') openLightbox(index);
                    }}
                  >
                    <img
                      src={image.image}
                      alt={image.name}
                      className="gallery-image"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className={`gallery-overlay ${imageHovered === image.id ? 'visible' : ''}`}>
                      <div className="overlay-content">
                        <h3 className="overlay-title">{image.name}</h3>
                        <p className="overlay-category">{image.category}</p>
                        <button className="view-button">View Full Image</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <h3>No images found</h3>
              <p>
                Try adjusting your filters or search terms to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        currentImage={filteredImages[currentImageIndex]}
        images={filteredImages}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />

      <Footer />
    </div>
  );
};

export default GalleryPage;
