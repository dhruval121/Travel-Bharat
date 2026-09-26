import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/sections.css';

const CategoryCard = ({ category, showCount = false, count = 0 }) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div
      className="category-card"
      onClick={handleCategoryClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCategoryClick();
        }
      }}
      style={{
        '--category-color': category.color
      }}
    >
      <div className="category-card-icon-wrapper">
        <FontAwesomeIcon 
          icon={category.icon} 
          className="category-card-icon"
        />
      </div>
      <h3 className="category-card-name">{category.name}</h3>
      <p className="category-card-tagline">{category.tagline}</p>
      {showCount && (
        <span className="category-card-count">{count} places</span>
      )}
    </div>
  );
};

export default CategoryCard;
