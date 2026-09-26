export const regions = [
  {
    id: 1,
    name: "North India",
    slug: "north-india",
    image: "https://images.unsplash.com/photo-1616368309964-3a686de13b4d",
    description: "Explore the majestic Himalayas, historic monuments, and vibrant culture",
    fullDescription: "Experience the grandeur of North India with stunning mountain ranges, historical monuments, and rich cultural heritage. From the snow-capped peaks of Himachal Pradesh to the deserts of Rajasthan, discover diverse landscapes and traditions.",
    states: [
      "uttar-pradesh",
      "rajasthan",
      "haryana",
      "delhi",
      "himachal-pradesh",
      "punjab"
    ]
  },
  {
    id: 2,
    name: "South India",
    slug: "south-india",
    image: "https://plus.unsplash.com/premium_photo-1697730334419-fba83fe143b7?q=80&w=687",
    description: "Discover ancient temples, tropical beaches, and rich heritage",
    fullDescription: "Immerse yourself in the spiritual and cultural richness of South India. With ancient temples, pristine beaches, lush plantations, and unique Dravidian architecture, South India offers a perfect blend of tradition and natural beauty.",
    states: [
      "tamil-nadu",
      "kerala",
      "karnataka",
      "andhra-pradesh",
      "telangana"
    ]
  },
  {
    id: 3,
    name: "East India",
    slug: "east-india",
    image: "https://plus.unsplash.com/premium_photo-1661880922509-7db62ae56442?q=80&w=687",
    description: "Experience tea gardens, tribal culture, and scenic beauty",
    fullDescription: "Discover the mystique of East India with picturesque tea estates, tribal heritage, historic sites, and stunning natural landscapes. From the plains of West Bengal to the forests of Jharkhand.",
    states: [
      "west-bengal",
      "odisha",
      "jharkhand",
      "bihar"
    ]
  },
  {
    id: 4,
    name: "West India",
    slug: "west-india",
    image: "https://plus.unsplash.com/premium_photo-1754251324535-2029b7d0c58c",
    description: "Enjoy beaches, deserts, and vibrant city life",
    fullDescription: "Experience the diverse charm of West India with golden beaches, vast deserts, vibrant cities, and rich maritime history. From the backwaters of Goa to the bustling streets of Mumbai.",
    states: [
      "maharashtra",
      "gujarat",
      "goa"
    ]
  },
  {
    id: 5,
    name: "North East India",
    slug: "north-east-india",
    image: "https://cdn.pixabay.com/photo/2021/06/14/18/57/manipur-6336729_1280.jpg",
    description: "Venture into untouched natural beauty and unique traditions",
    fullDescription: "Explore the pristine and mystical North East India with breathtaking landscapes, unique tribal cultures, and lesser-known destinations. Experience biodiversity hotspots and warm hospitality.",
    states: [
      "assam",
      "arunachal-pradesh",
      "manipur",
      "meghalaya",
      "mizoram",
      "nagaland",
      "sikkim",
      "tripura"
    ]
  },
  {
    id: 6,
    name: "Central India",
    slug: "central-india",
    image: "https://images.unsplash.com/photo-1704473034581-22f5b9990b85",
    description: "Explore wildlife sanctuaries and historical landmarks",
    fullDescription: "Discover the heart of India with rich wildlife, ancient monuments, tribal heritage, and wilderness experiences. Home to some of India's best national parks and historical treasures.",
    states: [
      "madhya-pradesh",
      "chhattisgarh"
    ]
  },
  {
    id: 7,
    name: "Union Territories",
    slug: "union-territories",
    image: "https://images.unsplash.com/photo-1575999502951-4ab25b5ca889?q=80&w=1074",
    description: "Explore India's unique Union Territory islands and cities",
    fullDescription: "Discover the diverse Union Territories of India featuring island paradises, coastal beauty, and unique administrative regions. Experience pristine beaches, vibrant cultures, and distinctive island life across Andaman, Lakshadweep, Puducherry, and more.",
    states: [
      "andaman-and-nicobar-islands",
      "chandigarh",
      "delhi",
      "dadra-and-nagar-haveli",
      "daman-and-diu",
      "jammu-and-kashmir",
      "lakshadweep",
      "puducherry",
      "ladakh"
    ]
  }
];

/**
 * Get a region by slug
 * @param {string} slug - Region slug
 * @returns {Object|null} Region object or null if not found
 */
export const getRegionBySlug = (slug) => {
  return regions.find(region => region.slug === slug) || null;
};

/**
 * Get all states in a region
 * @param {string} regionSlug - Region slug
 * @param {Array} statesData - States data array
 * @returns {Array} Filtered states
 */
export const getStatesByRegion = (regionSlug, statesData) => {
  const region = getRegionBySlug(regionSlug);
  if (!region) return [];
  
  return statesData.filter(state => 
    region.states.includes(state.slug)
  );
};
