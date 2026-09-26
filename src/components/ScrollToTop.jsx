import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * 
 * Automatically scrolls to the top of the page when the route changes.
 * This component should be placed inside the Router and before Routes.
 * 
 * Usage:
 * <Router>
 *   <ScrollToTop />
 *   <Routes>...</Routes>
 * </Router>
 */

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top smoothly when pathname changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  // This component doesn't render anything
  return null;
}
