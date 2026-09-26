import { useNavigate } from 'react-router-dom';
import { regions } from '../data/regions';
import RegionCard from './RegionCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../styles/sections.css';

const ExploreByRegion = () => {
  const navigate = useNavigate();

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Explore by Region</h2>
        <p className="section-subtitle">Journey through India's diverse landscapes</p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {regions.map((region) => (
            <SwiperSlide key={region.slug}>
              <RegionCard region={region} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ExploreByRegion;
