import { Link, useLocation } from 'react-router-dom';
import { statesData } from '../data/statesData';
import { createSlug } from '../utils/slugUtils';
import '../styles/megaMenu.css';

const MegaMenu = () => {
  const location = useLocation();
  
  // Extract slug from URL (e.g., /state/andhra-pradesh → andhra-pradesh)
  const currentSlug = location.pathname.startsWith('/state/')
    ? location.pathname.replace('/state/', '')
    : null;

  const regions = {
    'North': [
      'Himachal Pradesh',
      'Uttarakhand',
      'Uttar Pradesh',
      'Haryana',
      'Punjab',
      'Rajasthan'
    ],
    'North-East': [
      'Arunachal Pradesh',
      'Assam',
      'Manipur',
      'Meghalaya',
      'Mizoram',
      'Nagaland',
      'Tripura',
      'Sikkim'
    ],
    'East': [
      'Bihar',
      'Jharkhand',
      'Odisha',
      'West Bengal'
    ],
    'South': [
      'Andhra Pradesh',
      'Karnataka',
      'Kerala',
      'Tamil Nadu',
      'Telangana'
    ],
    'West': [
      'Goa',
      'Gujarat',
      'Maharashtra'
    ],
    'Central': [
      'Madhya Pradesh',
      'Chhattisgarh'
    ],
    'Union Territories': [
      'Andaman and Nicobar Islands',
      'Chandigarh',
      'Delhi',
      'Dadra and Nagar Haveli',
      'Daman and Diu',
      'Jammu & Kashmir',
      'Lakshadweep',
      'Puducherry',
      'Ladakh'
    ]
  };

  /**
   * Get state slug - first try to find in statesData for accuracy,
   * fallback to createSlug utility for any names not in data
   */
  const getStateSlug = (stateName) => {
    const state = statesData.find(s => s.state === stateName);
    return state ? state.slug : createSlug(stateName);
  };

  return (
    <div className="mega-menu">
      {Object.entries(regions).map(([region, states]) => (
        <div key={region} className="mega-column">
          <h3 className="region-title">{region}</h3>
          <ul className="state-list">
            {states.map((state) => {
              const stateSlug = getStateSlug(state);
              const isActive = currentSlug === stateSlug;
              
              return (
                <li key={state}>
                  <Link
                    to={`/state/${stateSlug}`}
                    className={`state-link ${isActive ? 'active' : ''}`}
                  >
                    {state}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;