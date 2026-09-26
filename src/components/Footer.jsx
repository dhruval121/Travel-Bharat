import { useNavigate } from 'react-router-dom';
import { MapPin, Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = ['Home', 'About Us', 'Gallery', 'Contact'];
  const categories = ['Adventure', 'Beach', 'City', 'Entertainment', 'Heritage', 'Nature', 'Wildlife'];
  const regions = ['North', 'South', 'East', 'West', 'North East', 'Central', 'Union Territories'];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <div className="footer-logo">
              <MapPin size={28} />
              <span>TravelBharat</span>
            </div>
            <p className="footer-description">
              Your comprehensive guide to exploring the incredible diversity of India, state by state, region by region.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><Youtube size={20} /></a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link} onClick={() => navigate(`/${link.toLowerCase().replace(' ', '-')}`)}>
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Categories</h3>
            <ul className="footer-links">
              {categories.map((category) => (
                <li key={category} onClick={() => navigate(`/category/${category.toLowerCase()}`)}>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Regions</h3>
            <ul className="footer-links">
              {regions.map((region) => (
                <li key={region} onClick={() => navigate(`/region/${region.toLowerCase().replace(' ', '-')}`)}>
                  {region}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={18} />
                <span>thetravelbharat@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <span>+91 9512097576</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TravelBharat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
