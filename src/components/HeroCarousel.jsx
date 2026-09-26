import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/hero.css';

const HeroCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://cdn.pixabay.com/photo/2019/03/12/20/19/india-4051753_1280.jpg',
      title: 'Discover Incredible India',
      subtitle: 'Explore Heritage, Nature & Adventure Across States'
    },
    {
      image: 'https://images.unsplash.com/photo-1713682995521-22ec819b50ac?q=80&w=2147',
      title: 'Experience Royal Heritage',
      subtitle: 'Immerse in the grandeur of palaces and forts'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1697730314165-2cd71dc3a6a4?q=80&w=1170',
      title: 'Serene Natural Beauty',
      subtitle: 'Find peace in pristine landscapes and backwaters'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2023/10/19/15/18/mountains-8326967_1280.jpg',
      title: 'Thrilling Adventures',
      subtitle: 'Conquer mountains, deserts, and untamed wilderness'
    },
    {
      image: 'https://images.unsplash.com/photo-1688257609244-3f2a893f19d6?q=80&w=938',
      title: 'Spiritual Journeys',
      subtitle: 'Connect with ancient traditions and sacred sites'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="hero-title">{slide.title}</h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <button className="hero-cta" onClick={() => navigate('/destinations')}>
              Start Exploring
            </button>
          </div>
        </div>
      ))}

      <button className="carousel-btn prev" onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>

      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
