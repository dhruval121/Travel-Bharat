import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getPlaceById } from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageSlider from '../components/PlaceDetails/ImageSlider';
import InfoCard from '../components/PlaceDetails/InfoCard';
import NearbyPlaces from '../components/PlaceDetails/NearbyPlaces';
import '../styles/placeDetails.css';

const PlaceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [place, setPlace] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlace = async () => {
      try {
        setError(null);
        const data = await getPlaceById(id);
        setPlace(data);
      } catch (err) {
        console.error('Error fetching place details', err);
        setError(err.message || 'Place not found');
      }
    };

    if (id) {
      fetchPlace();
    }
  }, [id]);

  if (error) {
    return (
      <div>
        <Navbar />
        <section className="place-details-section">
          <div className="place-details-container">
            <div className="text-center py-24">
              <p className="text-red-500 text-lg">{error}</p>
              <button
                onClick={() => navigate('/')}
                className="mt-4 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                <ArrowLeft size={20} /> Go to Home
              </button>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (!place) {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }

  // Prepare images array (handle both 'images' array and 'image' single field)
  const images = place.images && Array.isArray(place.images) ? place.images : (place.image ? [place.image] : []);

  return (
    <div>
      <Navbar />
      <section className="place-details-section">
        {/* Back Button */}
        <div className="place-details-container">
          <button
            onClick={() => navigate(-1)}
            className="place-details-back-btn"
          >
            <ArrowLeft size={20} /> Back
          </button>
        </div>

        {/* Image Slider */}
        <div className="place-details-container" style={{ marginBottom: '2rem' }}>
          <ImageSlider images={images} />
        </div>

        {/* Main Content - 2 Column Layout */}
        <div className="place-details-container">
          <div className="place-details-main-grid">
            {/* Left Column (70%) - Main Content */}
            <div className="place-details-left-column">
              {/* Title & Quick Info */}
              <div className="place-details-title-section">
                <h1 className="place-details-title">{place.name}</h1>
                <div className="place-details-tags">
                  {place.category && (
                    <span className="place-details-tag" style={{ color: '#D97706' }}>
                      {place.category}
                    </span>
                  )}
                  {place.region && (
                    <span className="place-details-tag" style={{ color: '#1f2937' }}>
                      {place.region}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="place-details-description-box">
                <h2>About</h2>
                <p>
                  {place.description}
                </p>
              </div>

              {/* Highlights / Key Features */}
              {place.highlights && Array.isArray(place.highlights) && place.highlights.length > 0 && (
                <div className="place-details-highlights">
                  <h2>Key Highlights</h2>
                  <div className="place-details-highlights-list">
                    {place.highlights.map((highlight, idx) => (
                      <div key={idx} className="place-details-highlights-item">
                        <span className="place-details-highlights-check">✓</span>
                        <span className="place-details-highlights-text">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Details */}
              {(place.openingHours || place.closedOn || place.duration) && (
                <div className="place-details-details">
                  <h2>Details</h2>
                  <div className="place-details-details-grid">
                    {place.openingHours && (
                      <div className="place-details-details-item">
                        <div className="place-details-details-label">Opening Hours</div>
                        <div className="place-details-details-value">{place.openingHours}</div>
                      </div>
                    )}
                    {place.closedOn && (
                      <div className="place-details-details-item">
                        <div className="place-details-details-label">Closed On</div>
                        <div className="place-details-details-value">{place.closedOn}</div>
                      </div>
                    )}
                    {place.duration && (
                      <div className="place-details-details-item">
                        <div className="place-details-details-label">Recommended Duration</div>
                        <div className="place-details-details-value">{place.duration}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (30%) - Info Card */}
            <div className="place-details-right-column">
              <InfoCard place={place} />
            </div>
          </div>
        </div>

        {/* Nearby Attractions - Full Width Below */}
        <div className="place-details-container">
          <NearbyPlaces currentPlace={place} state={place.state} limit={4} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PlaceDetails;
