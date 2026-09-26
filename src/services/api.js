import { allPlaces } from '../data/places';
import { statesData, getStateByName } from '../data/statesData';
import { getTopDestinations as filterTopDestinations, TOP_DESTINATIONS_LIST } from '../data/topDestinationsConfig';

/**
 * Helper function to add unique IDs to places using slug-based naming
 * @param {Array} places - Array of place objects
 * @returns {Array} Places with added _id field
 */
const placesWithIds = allPlaces.map((place, index) => ({
  ...place,
  _id: place.name.toLowerCase().replace(/\s+/g, '-') + '-' + index,
}));

/**
 * Get all places from static data
 * @returns {Promise<Array>} Array of place objects
 */
export const getAllPlaces = async () => {
  return Promise.resolve(placesWithIds);
};

/**
 * Get places filtered by region from static data
 * @param {string} region - Region name
 * @returns {Promise<Array>} Array of filtered place objects
 */
export const getPlacesByRegion = async (region) => {
  const filtered = placesWithIds.filter(
    place => place.region && place.region.toLowerCase() === region.toLowerCase()
  );
  return Promise.resolve(filtered);
};

/**
 * Get places filtered by category from static data
 * @param {string} category - Category name
 * @returns {Promise<Array>} Array of filtered place objects
 */
export const getPlacesByCategory = async (category) => {
  const filtered = placesWithIds.filter(
    place => place.category && place.category.toLowerCase() === category.toLowerCase()
  );
  return Promise.resolve(filtered);
};

/**
 * Get places filtered by category and state from static data
 * @param {string} category - Category name
 * @param {string} stateSlug - State slug (e.g., "tamil-nadu")
 * @returns {Promise<Array>} Array of filtered place objects
 */
export const getPlacesByCategoryAndState = async (category, stateSlug) => {
  const filtered = placesWithIds.filter(place => {
    const categoryMatch = place.category && place.category.toLowerCase() === category.toLowerCase();
    const stateMatch = place.stateSlug && place.stateSlug.toLowerCase() === stateSlug.toLowerCase();
    return categoryMatch && stateMatch;
  });
  return Promise.resolve(filtered);
};

/**
 * Get places filtered by state using slug from static data
 * @param {string} slug - State slug (e.g., "tamil-nadu")
 * @returns {Promise<Array>} Array of filtered place objects
 */
export const getPlacesByState = async (slug) => {
  const filtered = placesWithIds.filter(
    place => place.stateSlug && place.stateSlug.toLowerCase() === slug.toLowerCase()
  );
  return Promise.resolve(filtered);
};

/**
 * Get a single place by ID from static data
 * @param {string|number} id - Place ID
 * @returns {Promise<Object>} Place object
 */
export const getPlaceById = async (id) => {
  const place = placesWithIds.find(p => p._id === id || p.name.toLowerCase().replace(/\s+/g, '-') === id);
  if (!place) {
    return Promise.reject(new Error(`Place not found: ${id}`));
  }
  return Promise.resolve(place);
};

/**
 * Get random places from static data
 * @param {number} limit - Number of random places to fetch (default: 6)
 * @returns {Promise<Array>} Array of random place objects
 */
export const getRandomPlaces = async (limit = 6) => {
  const shuffled = [...placesWithIds].sort(() => Math.random() - 0.5);
  return Promise.resolve(shuffled.slice(0, Math.min(limit, shuffled.length)));
};

/**
 * Get unique categories from all places
 * @returns {Promise<Array>} Array of unique categories
 */
export const getCategories = async () => {
  const uniqueCategories = new Map();

  placesWithIds.forEach((place) => {
    if (place.category && !uniqueCategories.has(place.category)) {
      uniqueCategories.set(place.category, {
        name: place.category,
        slug: place.category.toLowerCase().replace(/\s+/g, '-'),
      });
    }
  });

  return Promise.resolve(Array.from(uniqueCategories.values()));
};

/**
 * Get state data by state name
 * @param {string} stateName - State name or ID
 * @returns {Promise<Object>} State data object
 */
export const getStateData = async (stateName) => {
  const state = getStateByName(stateName);
  if (!state) {
    return Promise.reject(new Error(`State not found: ${stateName}`));
  }
  return Promise.resolve(state);
};

/**
 * Get all states data
 * @returns {Promise<Array>} Array of state objects
 */
export const getAllStates = async () => {
  return Promise.resolve(statesData);
};

/**
 * Get top destinations in fixed order
 * Returns destinations from the TOP_DESTINATIONS_LIST in the specified order
 * Maintains consistency across page loads (no randomization)
 * @returns {Promise<Array>} Array of top destination place objects
 */
export const getTopDestinations = async () => {
  const topDestinations = filterTopDestinations(placesWithIds);

  if (topDestinations.length === 0) {
    console.warn('No top destinations found in static data. Expected:', TOP_DESTINATIONS_LIST);
  }

  return Promise.resolve(topDestinations);
};
