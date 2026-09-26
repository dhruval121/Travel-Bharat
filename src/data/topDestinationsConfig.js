/**
 * Top Destinations Configuration
 * Static list of top destinations to display
 * Order is maintained as specified for consistent UI
 */

export const TOP_DESTINATIONS_LIST = [
  "Taj Mahal",
  "Jaipur",
  "Kerala",
  "Varanasi",
  "Goa",
  "Ladakh",
  "Mysore Palace",
  "Amritsar",
  "Rishikesh",
  "Jodhpur"
];

/**
 * Filter and sort places to match top destinations list
 * Maintains the order specified in TOP_DESTINATIONS_LIST
 * 
 * @param {Array} allPlaces - All places from API or local data
 * @returns {Array} - Filtered and sorted top destinations
 */
export const getTopDestinations = (allPlaces) => {
  if (!allPlaces || allPlaces.length === 0) {
    return [];
  }

  // Create a map for quick lookup
  const placesMap = new Map();
  allPlaces.forEach(place => {
    placesMap.set(place.name, place);
  });

  // Filter and maintain the order from TOP_DESTINATIONS_LIST
  const topDestinations = TOP_DESTINATIONS_LIST
    .map(destinationName => placesMap.get(destinationName))
    .filter(place => place !== undefined); // Remove unmapped destinations

  return topDestinations;
};

/**
 * Get available top destinations with fallback message
 * Returns only destinations that exist in the places data
 * 
 * @param {Array} allPlaces - All places from API or local data
 * @returns {Object} - { destinations, count, missing }
 */
export const getTopDestinationsInfo = (allPlaces) => {
  const topDestinations = getTopDestinations(allPlaces);
  const foundNames = new Set(topDestinations.map(p => p.name));
  const missing = TOP_DESTINATIONS_LIST.filter(name => !foundNames.has(name));

  return {
    destinations: topDestinations,
    count: topDestinations.length,
    missing,
    isComplete: missing.length === 0
  };
};
