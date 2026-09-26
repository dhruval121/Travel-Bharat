import Navbar from '../components/Navbar.jsx';
import HeroCarousel from '../components/HeroCarousel.jsx';
import TopDestinationsCarousel from '../components/TopDestinationsCarousel.jsx';
import TrendingCategories from '../components/TrendingCategories.jsx';
import ExploreByRegion from '../components/ExploreByRegion.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <TopDestinationsCarousel />
      <TrendingCategories />
      <ExploreByRegion />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default Home;
