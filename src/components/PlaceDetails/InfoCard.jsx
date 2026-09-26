import React from 'react';
import { MapPin, Clock, Tag, Star, Phone, MapPinIcon } from 'lucide-react';
import '../../styles/infoCard.css';

const InfoCard = ({ place }) => {
  return (
    <div className="info-card-sticky">
      <div className="info-card-wrapper">
        {/* Header */}
        <div className="info-card-header">
          <h2 className="info-card-title">{place.name}</h2>
          {place.rating && (
            <div className="info-card-rating">
              <Star size={16} fill="currentColor" />
              <span>{place.rating}/5</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="info-card-content">
          {/* Location */}
          {place.location && (
            <div className="info-card-item">
              <div className="info-card-item-icon" style={{ background: 'rgba(217, 119, 6, 0.2)' }}>
                <MapPin size={20} style={{ color: '#D97706' }} />
              </div>
              <div>
                <div className="info-card-item-label">Location</div>
                <div className="info-card-item-value">{place.location}</div>
              </div>
            </div>
          )}

          {/* State */}
          {place.state && (
            <div className="info-card-item">
              <div className="info-card-item-icon" style={{ background: 'rgba(217, 119, 6, 0.2)' }}>
                <MapPinIcon size={20} style={{ color: '#D97706' }} />
              </div>
              <div>
                <div className="info-card-item-label">State</div>
                <div className="info-card-item-value">{place.state}</div>
              </div>
            </div>
          )}

          {/* Best Time to Visit */}
          {place.bestTimeToVisit && (
            <div className="info-card-item">
              <div className="info-card-item-icon" style={{ background: 'rgba(217, 119, 6, 0.2)' }}>
                <Clock size={20} style={{ color: '#d97706' }} />
              </div>
              <div>
                <div className="info-card-item-label">Best Time</div>
                <div className="info-card-item-value">{place.bestTimeToVisit}</div>
              </div>
            </div>
          )}

          {/* Category */}
          {place.category && (
            <div className="info-card-item">
              <div className="info-card-item-icon" style={{ background: 'rgba(217, 119, 6, 0.2)' }}>
                <Tag size={20} style={{ color: '#d97706' }} />
              </div>
              <div>
                <div className="info-card-item-label">Category</div>
                <div className="info-card-item-value">{place.category}</div>
              </div>
            </div>
          )}

          {/* Region */}
          {place.region && (
            <div className="info-card-region">
              <div className="info-card-item-label">Region</div>
              <div className="info-card-item-value">{place.region}</div>
            </div>
          )}

          {/* Entry Fee */}
          {place.entryFee && (
            <div className="info-card-entry-fee">
              <div className="info-card-item-label">Entry Fee</div>
              <div className="info-card-fee-value">{place.entryFee}</div>
            </div>
          )}

          {/* Contact */}
          {place.phone && (
            <div className="info-card-contact">
              <Phone size={20} style={{ color: '#D97706' }} />
              <div>
                <div className="info-card-item-label" onClick={() => navigate('/contact')}>Contact</div>
                <a href={`tel:${place.phone}`} className="info-card-phone-link">
                  {place.phone}
                </a>
              </div>
            </div>
          )}

          {/* Map Link */}
          {place.locationLink && (
            <a
              href={place.locationLink}
              target="_blank"
              rel="noopener noreferrer"
              className="info-card-map-btn"
            >
              View on Map
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
