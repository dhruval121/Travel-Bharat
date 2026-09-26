import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StateCard from '../components/StateCard';
import { statesData } from '../data/statesData';
import '../styles/sections.css';

const DestinationsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">Explore Indian States</h2>
          <p className="section-subtitle">Discover the diverse beauty, culture, and heritage across all states of India</p>

          <div className="states-grid">
            {statesData && statesData.length > 0 ? (
              statesData.map((state) => (
                <StateCard key={state.slug} state={state} />
              ))
            ) : (
              <p className="no-results">No states found</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default DestinationsPage;
