import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import '../styles/sections.css';

const StateCard = ({ state }) => {
  const navigate = useNavigate();

  const handleStateClick = () => {
    navigate(`/state/${state.slug}`);
  };

  return (
    <div
      className="state-card"
      onClick={handleStateClick}
      style={{ backgroundImage: `url(${state.heroImage})` }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleStateClick();
        }
      }}
    >
      <div className="state-card-overlay"></div>
      <div className="state-card-content">
        <div className="state-card-location">
          <MapPin size={18} />
          <span>India</span>
        </div>
        <h3 className="state-card-title">{state.state}</h3>
        <p className="state-card-description">{state.description}</p>
        <button className="state-card-btn">Explore</button>
      </div>
    </div>
  );
};

export default StateCard;
