import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import PlaceCard from '../components/PlaceCard';
import Footer from '../components/Footer';
import { getPlacesByState } from '../services/api';
import { getStateBySlug } from '../data/statesData';
import '../styles/sections.css';

const StateAllPlaces = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const state = slug ? getStateBySlug(slug) : null;
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const data = await getPlacesByState(slug);
      setPlaces(data || []);
    };

    if (slug) {
      fetchPlaces();
    }
  }, [slug]);

  return (
    <div>
      <Navbar />
      <section className="section section-alt">
        <div className="container">
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)}
            className="back-button"
            aria-label="Go back"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>

          <h2 className="section-title">
            All Places in {state?.state || 'State'}
          </h2>
          <p className="section-subtitle">
            Explore {places.length} amazing destinations
          </p>

          {places.length === 0 && (
            <div className="no-results-container">
              <p className="no-results">
                No places found in {state?.state}
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

export default StateAllPlaces;
