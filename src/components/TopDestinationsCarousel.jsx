import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { getTopDestinations } from '../services/api';
import '../styles/topDestinationsCarousel.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/**
 * TopDestinationsCarousel Component
 * Displays a static carousel of top destinations
 * Destinations are fixed and maintain the same order on every page load
 */
const TopDestinationsCarousel = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchTopDestinations = async () => {
      const topDestinations = await getTopDestinations();
      setDestinations(topDestinations);
    };

    fetchTopDestinations();
  }, []);

  const handleCardClick = (destinationId) => {
    navigate(`/place/${destinationId}`);
  };

  const handleViewAll = () => {
    navigate('/destinations');
  };

  return (
    <section className="top-destinations-carousel">
      <div className="carousel-container">
        <h2 className="carousel-title">Top Destinations</h2>
        <p className="carousel-subtitle">Discover the most popular places across India</p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="swiper-container"
        >
          {destinations.map((destination) => (
            <SwiperSlide key={destination._id}>
              <div
                className="destination-card"
                onClick={() => handleCardClick(destination._id)}
              >
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${destination.images && destination.images.length > 0
                      ? destination.images[0]
                      : '/placeholder-image.jpg'})`
                  }}
                />
                <div className="card-content">
                  <div className="card-location">
                    <MapPin size={16} />
                    <span>{destination.state}</span>
                  </div>
                  <h3 className="card-title">{destination.name}</h3>
                  <p className="card-description">{destination.description}</p>
                  <div className="category-badge">{destination.category}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="carousel-footer">
          <button 
            className="view-all-btn" 
            onClick={handleViewAll}
          >
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDestinationsCarousel;