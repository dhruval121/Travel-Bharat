import { Award, Shield, Compass, Map } from 'lucide-react';
import '../styles/sections.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award size={40} />,
      title: 'Curated Destinations',
      description: 'Handpicked locations showcasing the best of India'
    },
    {
      icon: <Shield size={40} />,
      title: 'Verified Information',
      description: 'Accurate and up-to-date travel details'
    },
    {
      icon: <Compass size={40} />,
      title: 'Easy Navigation',
      description: 'Intuitive platform for seamless exploration'
    },
    {
      icon: <Map size={40} />,
      title: 'Region-Wise Exploration',
      description: 'Discover India state by state, region by region'
    }
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <h2 className="section-title">Why Choose TravelBharat</h2>
        <p className="section-subtitle">Your trusted companion for exploring India</p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
