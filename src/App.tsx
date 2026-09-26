import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import RegionPage from './pages/RegionPage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import CategoriesPage from './pages/CategoriesPage.jsx';
import PlaceDetails from './pages/PlaceDetails.jsx';
import StatePage from './pages/StatePage.jsx';
import StateAllPlaces from './pages/StateAllPlaces.jsx';
import AllDestinations from './pages/AllDestinations.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<AllDestinations />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/region/:slug" element={<RegionPage />} />
        <Route path="/state/:slug" element={<StatePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/place/state/:slug" element={<StateAllPlaces />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
