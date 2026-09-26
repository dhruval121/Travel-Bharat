import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { getPlacesByState } from '../../services/api';
import '../../styles/nearbyPlaces.css';

const NearbyPlaces = ({ currentPlace, state, limit = 4 }) => {
  const [nearbyPlaces, setNearbyPlaces] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNearbyPlaces = async () => {
      if (!state) {
        setNearbyPlaces([]);
        return;
      }

      // Fetch places from the same state
      const places = await getPlacesByState(state);

      // Filter out the current place and limit results
      const filtered = places
        .filter((place) => place._id !== currentPlace?._id)
        .slice(0, limit);

      setNearbyPlaces(filtered);
    };

    fetchNearbyPlaces();
  }, [state, currentPlace, limit]);

  const handlePlaceClick = (placeId) => {
    navigate(`/place/${placeId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!state || nearbyPlaces.length === 0) {
    return null;
  }

  return (
    <section className="place-details-nearby-section">
      <div>
        <h2 className="place-details-nearby-title">Nearby Attractions</h2>
        <p className="place-details-nearby-subtitle">Explore other wonderful places in {state}</p>
      </div>

      <div className="nearby-places-scroll">
        {nearbyPlaces.map((place) => (
          <div
            key={place._id}
            className="nearby-place-card"
            onClick={() => handlePlaceClick(place._id)}
          >
            {/* Image */}
            <div className="nearby-place-image">
              <img
                src={place.image || place.images?.[0] || ''}
                alt={place.name}
              />
              <div className="nearby-place-overlay"></div>
            </div>

            {/* Content */}
            <div className="nearby-place-content">
              {/* Location */}
              <div className="nearby-place-location">
                <MapPin size={14} />
                <span>{place.state}</span>
              </div>

              {/* Title */}
              <h3 className="nearby-place-title">
                {place.name}
              </h3>

              {/* Category */}
              {place.category && (
                <span className="nearby-place-category">
                  {place.category}
                </span>
              )}

              {/* Description */}
              <p className="nearby-place-description">
                {place.description}
              </p>

              {/* Button */}
              <div className="nearby-place-button">
                Explore <ArrowRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NearbyPlaces;
