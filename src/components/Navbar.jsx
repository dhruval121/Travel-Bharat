import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Menu, X, ChevronDown } from 'lucide-react';
import MegaMenu from './MegaMenu';
import SearchBar from './SearchBar';
import '../styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false);
  const [mobilePlansOpen, setMobilePlansOpen] = useState(false);

  const plans = ['Adventure', 'Art', 'Beach', 'City', 'Culture', 'Entertainment', 'Event', 'Festival', 'Heritage', 'Museum', 'Nature', 'Shopping', 'Spiritual', 'Wildlife'];

  const mobileRegions = [
    { name: 'North', slug: 'north-india' },
    { name: 'South', slug: 'south-india' },
    { name: 'East', slug: 'east-india' },
    { name: 'West', slug: 'west-india' },
    { name: 'North East', slug: 'north-east-india' },
    { name: 'Central', slug: 'central-india' },
    { name: 'UT', slug: 'union-territories' }
  ];

  // Close mobile menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.navbar-container') && !event.target.closest('.mobile-menu')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleOverlayClick = (e) => {
    // Close menu only if clicking on the overlay background, not on the menu itself
    if (e.target.classList.contains('mobile-menu-overlay')) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate('/')}>
          <MapPin size={28} />
          <span>TravelBharat</span>
        </div>

        <ul className="navbar-menu">
          <li className="navbar-item" onClick={() => navigate('/')}>
            <span className="navbar-link">Home</span>
          </li>

          <li className="navbar-item dropdown mega-dropdown-container">
            <span className="navbar-link">
              Destinations <span className="dropdown-arrow">▼</span>
            </span>
            <div className="mega-dropdown">
              <MegaMenu />
            </div>
          </li>

          <li className="navbar-item dropdown">
            <span className="navbar-link">
              Plans <span className="dropdown-arrow">▼</span>
            </span>
            <ul className="dropdown-menu plans-dropdown-menu">
              {plans.map((plan) => (
                <li key={plan} onClick={() => navigate(`/category/${plan.toLowerCase()}`)}>
                  {plan}
                </li>
              ))}
            </ul>
          </li>

          <li className="navbar-item" onClick={() => navigate('/gallery')}>
            <span className="navbar-link">Gallery</span>
          </li>

          <li className="navbar-item" onClick={() => navigate('/about')}>
            <span className="navbar-link">About Us</span>
          </li>
        </ul>

        <SearchBar />

        <button className="contact-btn" onClick={() => navigate('/contact')}>
          Contact
        </button>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={handleMobileMenuToggle}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={handleOverlayClick}>
          <div className="mobile-menu">
            <div className="mobile-menu-item" onClick={() => handleMobileLinkClick('/')}>
              Home
            </div>

            {/* Mobile Destinations Dropdown */}
            <div className="mobile-menu-dropdown">
              <div
                className="mobile-dropdown-header"
                onClick={() => setMobileDestinationsOpen(!mobileDestinationsOpen)}
              >
                Destinations
                <ChevronDown
                  size={16}
                  className={`mobile-dropdown-arrow ${mobileDestinationsOpen ? 'rotated' : ''}`}
                />
              </div>
              {mobileDestinationsOpen && (
                <div className="mobile-dropdown-content">
                  {mobileRegions.map((region) => (
                    <div
                      key={region.slug}
                      className="mobile-menu-item mobile-submenu-item"
                      onClick={() => handleMobileLinkClick(`/region/${region.slug}`)}
                    >
                      {region.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Plans Dropdown */}
            <div className="mobile-menu-dropdown">
              <div
                className="mobile-dropdown-header"
                onClick={() => setMobilePlansOpen(!mobilePlansOpen)}
              >
                Plans
                <ChevronDown
                  size={16}
                  className={`mobile-dropdown-arrow ${mobilePlansOpen ? 'rotated' : ''}`}
                />
              </div>
              {mobilePlansOpen && (
                <div className="mobile-dropdown-content">
                  {plans.map((plan) => (
                    <div
                      key={plan}
                      className="mobile-menu-item mobile-submenu-item"
                      onClick={() => handleMobileLinkClick(`/category/${plan.toLowerCase()}`)}
                    >
                      {plan}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mobile-menu-item" onClick={() => handleMobileLinkClick('/gallery')}>
              Gallery
            </div>
            <div className="mobile-menu-item" onClick={() => handleMobileLinkClick('/about')}>
              About Us
            </div>
            <div className="mobile-menu-item contact-mobile-btn" onClick={() => handleMobileLinkClick('/contact')}>
              Contact
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
