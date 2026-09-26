import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CategoryCard from '../components/CategoryCard';
import { getAllCategoriesData } from '../data/categories';
import '../styles/sections.css';

const CategoriesPage = () => {
  const navigate = useNavigate();
  const allCategories = getAllCategoriesData();

  return (
    <div>
      <Navbar />
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">All Categories</h2>
          <p className="section-subtitle">Explore all travel categories and find your perfect adventure</p>

          <div className="category-grid">
            {allCategories.length > 0 ? (
              allCategories.map((category) => (
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
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
