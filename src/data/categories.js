import {
  faMountain,
  faPalette,
  faUmbrellaBeach,
  faCity,
  faMasksTheater,
  faFilm,
  faCalendarDays,
  faChampagneGlasses,
  faLandmark,
  faBuildingColumns,
  faLeaf,
  faBagShopping,
  faPlaceOfWorship,
  faPaw
} from '@fortawesome/free-solid-svg-icons';

/**
 * All available categories in the application
 * Each category has metadata including icon, color, and description
 */
export const allCategories = [
  {
    id: 1,
    name: "Adventure",
    slug: "adventure",
    icon: faMountain,
    color: "#FF6B6B",
    tagline: "Thrilling outdoor experiences",
    description: "Experience adrenaline-pumping adventures from trekking to water sports."
  },
  {
    id: 2,
    name: "Art",
    slug: "art",
    icon: faPalette,
    color: "#4ECDC4",
    tagline: "Creative and cultural spaces",
    description: "Explore galleries, studios, and artistic expressions."
  },
  {
    id: 3,
    name: "Beach",
    slug: "beach",
    icon: faUmbrellaBeach,
    color: "#45B7D1",
    tagline: "Sandy shores and coastal bliss",
    description: "Relax on pristine beaches and enjoy coastal beauty."
  },
  {
    id: 4,
    name: "City",
    slug: "city",
    icon: faCity,
    color: "#96CEB4",
    tagline: "Urban exploration",
    description: "Discover vibrant city life and urban attractions."
  },
  {
    id: 5,
    name: "Culture",
    slug: "culture",
    icon: faMasksTheater,
    color: "#FFEAA7",
    tagline: "Traditional and cultural heritage",
    description: "Immerse in local traditions and cultural experiences."
  },
  {
    id: 6,
    name: "Entertainment",
    slug: "entertainment",
    icon: faFilm,
    color: "#DDA15E",
    tagline: "Fun and entertainment",
    description: "Enjoy theme parks, shows, and entertainment venues."
  },
  {
    id: 7,
    name: "Event",
    slug: "event",
    icon: faCalendarDays,
    color: "#BC6C25",
    tagline: "Special events and celebrations",
    description: "Attend festivals, concerts, and special events."
  },
  {
    id: 8,
    name: "Festival",
    slug: "festival",
    icon: faChampagneGlasses,
    color: "#C1121F",
    tagline: "Festive celebrations",
    description: "Experience colorful festivals and celebrations."
  },
  {
    id: 9,
    name: "Heritage",
    slug: "heritage",
    icon: faLandmark,
    color: "#9D4EDD",
    tagline: "Historical landmarks",
    description: "Explore monuments and historical significance."
  },
  {
    id: 10,
    name: "Museum",
    slug: "museum",
    icon: faBuildingColumns,
    color: "#3A86FF",
    tagline: "Museums and exhibitions",
    description: "Discover art, history, and science museums."
  },
  {
    id: 11,
    name: "Nature",
    slug: "nature",
    icon: faLeaf,
    color: "#06A77D",
    tagline: "Natural wonders",
    description: "Embrace nature with parks, gardens, and landscapes."
  },
  {
    id: 12,
    name: "Shopping",
    slug: "shopping",
    icon: faBagShopping,
    color: "#FF006E",
    tagline: "Shopping destinations",
    description: "Shop at markets, malls, and local stores."
  },
  {
    id: 13,
    name: "Spiritual",
    slug: "spiritual",
    icon: faPlaceOfWorship,
    color: "#FB5607",
    tagline: "Sacred and spiritual sites",
    description: "Visit temples, mosques, churches, and spiritual destinations."
  },
  {
    id: 14,
    name: "Wildlife",
    slug: "wildlife",
    icon: faPaw,
    color: "#8338EC",
    tagline: "Wildlife and nature reserves",
    description: "Discover wildlife sanctuaries and national parks."
  }
];

/**
 * Featured categories shown on homepage
 * These are the primary categories displayed in the main carousel
 */
export const featuredCategories = [
  "Beach",
  "Heritage",
  "Nature",
  "Wildlife"
];

/**
 * Get category by slug
 * @param {string} slug - Category slug (e.g., "adventure")
 * @returns {Object|null} Category object or null if not found
 */
export const getCategoryBySlug = (slug) => {
  return allCategories.find(cat => cat.slug === slug) || null;
};

/**
 * Get category by name
 * @param {string} name - Category name (e.g., "Adventure")
 * @returns {Object|null} Category object or null if not found
 */
export const getCategoryByName = (name) => {
  return allCategories.find(cat => cat.name.toLowerCase() === name.toLowerCase()) || null;
};

/**
 * Get all featured categories (for homepage)
 * @returns {Array} Featured category objects
 */
export const getFeaturedCategories = () => {
  return allCategories.filter(cat => 
    featuredCategories.includes(cat.name)
  );
};

/**
 * Get all categories (for categories page)
 * @returns {Array} All category objects
 */
export const getAllCategoriesData = () => {
  return allCategories;
};

/**
 * Get category count (mock data - can be replaced with API call)
 * @param {string} categoryName - Category name
 * @returns {number} Number of places in category
 */
export const getCategoryCount = (categoryName) => {
  // This should ideally come from API
  // For now, return a placeholder
  return Math.floor(Math.random() * 50) + 5;
};
