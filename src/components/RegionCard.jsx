import { useNavigate } from 'react-router-dom';
import '../styles/sections.css';

const RegionCard = ({ region }) => {
  const navigate = useNavigate();

  const handleRegionClick = () => {
    navigate(`/region/${region.slug}`);
  };

  return (
    <div
      className="region-card-hero"
      onClick={handleRegionClick}
      style={{ backgroundImage: `url(${region.image})` }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleRegionClick();
        }
      }}
    >
      <div className="region-card-overlay"></div>
      <div className="region-card-content">
        <h3 className="region-card-title">{region.name}</h3>
        <p className="region-card-description">{region.description}</p>
        <button className="region-card-btn">Explore Region</button>
      </div>
    </div>
  );
};

export default RegionCard;
