import { Users, Shield, Compass, DollarSign, Phone, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/aboutPage.css';

const AboutPage = () => {
  const whyChooseUsItems = [
    {
      id: 1,
      icon: Heart,
      title: 'Authentic Experiences',
      description: 'Connect with local cultures and genuine travel experiences across India.'
    },
    {
      id: 2,
      icon: Shield,
      title: 'Safety & Comfort',
      description: 'Your safety and comfort are our top priorities with verified partners.'
    },
    {
      id: 3,
      icon: Compass,
      title: 'Tailored Trips',
      description: 'Personalized travel plans designed for your unique interests and preferences.'
    },
    {
      id: 4,
      icon: Users,
      title: 'Expert Guides',
      description: 'Knowledgeable local guides to enhance your travel experience.'
    },
    {
      id: 5,
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden costs - clear and upfront pricing for all experiences.'
    },
    {
      id: 6,
      icon: Phone,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for any assistance you need.'
    }
  ];

  const guides = [
    {
      id: 1,
      name: 'Ramesh S',
      role: 'Lead Explorer',
      description: "With a deep love for India's hidden gems and a commitment to responsible tourism, Ramesh guides our guests through incredible journeys, ensuring every tour reflects our dedication to quality and safety.",
      image: '#'
    },
    {
      id: 2,
      name: 'Rajeshwar T',
      role: 'Cultural Specialist',
      description: "Ram shares the magic of this incredible country with the world. His storytelling brings to life the history and culture, creating journeys that resonate with the soul.",
      image: '#'
    },
    {
      id: 3,
      name: 'Priyanka P',
      role: 'Adventure Coordinator',
      description: 'Priya ensures every adventure is seamless and exciting. From trekking routes to local experiences, she curates trips that are both thrilling and safe for everyone.',
      image: '#'
    }
  ];

  return (
    <div className="about-page">
      <Navbar />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1 className="about-hero-title">About Travel Bharat</h1>
          <p className="about-hero-tagline">Exploring the soul of India, one journey at a time</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-story">
            <h2 className="section-heading">Our Story</h2>
            <p className="section-text">
              Travel Bharat was founded with a simple yet powerful mission: to help travelers discover the true essence of India. 
              We believe that travel is more than just visiting destinations—it's about connecting with people, cultures, and experiences 
              that transform who we are.
            </p>
            <p className="section-text">
              Started by a team of passionate travel enthusiasts, we've dedicated ourselves to curating authentic experiences that showcase 
              India's diverse heritage, stunning landscapes, and vibrant cultures. From the snow-capped Himalayas to the serene beaches 
              of Kerala, from the bustling markets of Delhi to the spiritual valleys of Varanasi—we bring you closer to the real India.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="about-section about-section-alt">
        <div className="about-container">
          <div className="mission-content">
            <h2 className="section-heading">Our Mission</h2>
            <p className="mission-statement">
              To connect travelers with authentic, meaningful experiences across India while promoting sustainable tourism 
              and supporting local communities.
            </p>
            <div className="mission-points">
              <div className="mission-point">
                <span className="mission-dot"></span>
                <span>Promote cultural understanding and exchange between travelers and locals</span>
              </div>
              <div className="mission-point">
                <span className="mission-dot"></span>
                <span>Ensure sustainable and responsible travel practices</span>
              </div>
              <div className="mission-point">
                <span className="mission-dot"></span>
                <span>Empower local communities through ethical tourism</span>
              </div>
              <div className="mission-point">
                <span className="mission-dot"></span>
                <span>Provide transparent, high-quality travel experiences</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="section-heading section-heading-center">Why Choose Travel Bharat</h2>
          <p className="section-subtitle">Experience India like never before with our curated offerings</p>

          <div className="why-choose-grid">
            {whyChooseUsItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div key={item.id} className="why-card">
                  <div className="why-card-icon">
                    <IconComponent size={32} />
                  </div>
                  <h3 className="why-card-title">{item.title}</h3>
                  <p className="why-card-description">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Guides Section */}
      <section className="about-section about-section-alt">
        <div className="about-container">
          <h2 className="section-heading section-heading-center">Meet Our Expert Guides</h2>
          <p className="section-subtitle">Passionate professionals dedicated to your unforgettable journey</p>

          <div className="guides-grid">
            {guides.map((guide) => (
              <div key={guide.id} className="guide-card">
                <div 
                  className="guide-image"
                  style={{ backgroundImage: `url(${guide.image})` }}
                ></div>
                <div className="guide-content">
                  <h3 className="guide-name">{guide.name}</h3>
                  <p className="guide-role">{guide.role}</p>
                  <p className="guide-description">{guide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Ready to Explore India?</h2>
          <p>Start your journey with Travel Bharat today and discover the magic of India</p>
          <button className="cta-button" onClick={'/categories'}>Begin Your Adventure</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
