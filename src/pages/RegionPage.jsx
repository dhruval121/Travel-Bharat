import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StateCard from '../components/StateCard';
import { getRegionBySlug, getStatesByRegion } from '../data/regions';
import { statesData } from '../data/statesData';
import '../styles/sections.css';

const RegionPage = () => {
  const { slug } = useParams();
  const region = slug ? getRegionBySlug(slug) : null;
  const [states] = useState(() => {
    if (!region) return [];
    return getStatesByRegion(slug, statesData);
  });

  if (!region) {
    return (
      <div>
        <Navbar />
        <section className="section section-alt">
          <div className="container">
            <div className="error-container">
              <AlertCircle size={48} />
              <h1 className="section-title">Region Not Found</h1>
              <p className="error-text">Sorry, the region you're looking for doesn't exist.</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      {/* Region Hero Section */}
      <section className="region-hero">
        <img
          src={region.image}
          alt={region.name}
          className="region-hero-img"
        />
        <div className="region-hero-overlay"></div>
        <div className="region-hero-content">
          <h1>{region.name}</h1>
          <p>{region.description}</p>
        </div>
      </section>

      {/* Region About Section */}
      <section className="region-about-section">
        <div className="container">
          <div className="region-about-content">
            <h2>About {region.name}</h2>
            <p className="region-full-description">{region.fullDescription}</p>
            <div className="region-info-stats">
              <div className="stat-box">
                <span className="stat-number">{states.length}</span>
                <span className="stat-label">States & UTs</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">∞</span>
                <span className="stat-label">Experiences</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">100%</span>
                <span className="stat-label">Unforgettable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* States Grid Section */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">States in {region.name}</h2>
          <p className="section-subtitle">Explore the diverse states and union territories</p>

          {states.length > 0 ? (
            <div className="states-grid">
              {states.map((state) => (
                <StateCard key={state.slug} state={state} />
              ))}
            </div>
          ) : (
            <div className="error-container">
              <p className="no-results">No states found in this region</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegionPage;
