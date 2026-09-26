import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import '../styles/sections.css';

const PlaceCard = ({ place }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/place/${place._id}`);
  };

  return (
    <div className="destination-card" onClick={handleClick} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}>
      <div className="card-image" style={{ backgroundImage: `url(${place.image || place.images?.[0] || ''})` }}>
        <div className="card-overlay"></div>
      </div>
      <div className="card-content">
        <div className="card-location">
          <MapPin size={16} />
          <span>{place.state}</span>
        </div>
        <h3 className="card-title">{place.name}</h3>
        {place.description && <p className="card-description">{place.description}</p>}
        <button className="card-btn" onClick={(e) => { e.stopPropagation(); navigate(`/place/${place._id}`); }}>
          Explore
        </button>
      </div>
    </div>
  );
};

export default PlaceCard;
