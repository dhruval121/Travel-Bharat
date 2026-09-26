import { useNavigate } from 'react-router-dom';
import CategoryCard from './CategoryCard';
import { getFeaturedCategories } from '../data/categories';
import '../styles/sections.css';

const TrendingCategories = () => {
  const navigate = useNavigate();
  const categories = getFeaturedCategories();

  const handleViewAllCategories = () => {
    navigate('/categories');
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-header-with-button">
          <div className="section-header">
            <h2>Trending Categories</h2>
            <p>Find your perfect travel experience</p>
          </div>
        </div>

        <div className="category-grid">
          {categories.length > 0 ? (
            categories.map((category) => (
            <CategoryCard 
            key={category.id} 
            category={category}
            showCount={false}
            />
            ))
          ) : (
          <p className="no-results">No categories found</p>
          )}
        </div>
        
        <div className="section-header-with-button">
          <button 
            className="section-header-btn"
            onClick={handleViewAllCategories}
          >
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrendingCategories;
