import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import PlaceCard from '../components/PlaceCard';
import Footer from '../components/Footer';
import { getPlacesByCategory } from '../services/api';
import { statesData } from '../data/statesData';
import { getCategoryByName } from '../data/categories';
import '../styles/sections.css';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [places, setPlaces] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [allPlaces, setAllPlaces] = useState([]);

  const category = getCategoryByName(categoryName);

  useEffect(() => {
    const fetchPlaces = async () => {
      const data = await getPlacesByCategory(categoryName);
      setAllPlaces(data || []);
      setPlaces(data || []);
    };

    if (categoryName) {
      fetchPlaces();
    }
  }, [categoryName]);

  // Filter places when state is selected
  useEffect(() => {
    if (selectedState) {
      const filteredPlaces = allPlaces.filter(place => 
        place.state && place.state.toLowerCase() === selectedState.toLowerCase()
      );
      setPlaces(filteredPlaces);
    } else {
      setPlaces(allPlaces);
    }
  }, [selectedState, allPlaces]);

  return (
    <div>
      <Navbar />
      <section className="section section-alt">
        <div className="container">
          <button 
            onClick={() => navigate(-1)}
            className="place-details-back-btn"
            aria-label="Go back"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <h2 className="section-title">
            {category ? category.name : 'Category'} Experiences
          </h2>
          <p className="section-subtitle">
            {category?.description || 'Explore amazing places in this category'}
          </p>

          {/* State Filter */}
          <div className="category-filter">
            <label htmlFor="state-select" className="filter-label">Filter by State:</label>
            <select 
              id="state-select"
              className="state-select"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="">All States</option>
              {statesData.map(state => (
                <option key={state.slug} value={state.state}>
                  {state.state}
                </option>
              ))}
            </select>
          </div>

          {places.length === 0 && (
            <div className="no-results-container">
              <p className="no-results">
                {selectedState 
                  ? `No ${categoryName} places found in ${selectedState}`
                  : `No ${categoryName} places found`
                }
              </p>
            </div>
          )}

          <div className="card-grid">
            {places.map((place) => (
              <PlaceCard key={place._id} place={place} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CategoryPage;
