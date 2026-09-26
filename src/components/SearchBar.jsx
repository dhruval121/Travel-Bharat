import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { getAllPlaces } from '../services/api';
import '../styles/searchBar.css';

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [allPlaces, setAllPlaces] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchRef = useRef(null);
  const debounceTimer = useRef(null);

  // Fetch all places on component mount
  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const places = await getAllPlaces();
        setAllPlaces(places || []);
      } catch (error) {
        console.error('Error fetching places:', error);
        setAllPlaces([]);
      }
    };

    fetchPlaces();
  }, []);

  // Debounced search function
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    if (!searchQuery.trim()) {
      setSearchResults([]);
      setIsOpen(false);
      return;
    }

    debounceTimer.current = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [searchQuery]);

  // Perform search against all places
  const performSearch = (query) => {
    setIsLoading(true);
    const lowerQuery = query.toLowerCase().trim();

    const filtered = allPlaces.filter((place) => {
      const name = place.name?.toLowerCase() || '';
      const state = place.state?.toLowerCase() || '';
      const category = place.category?.toLowerCase() || '';
      const region = place.region?.toLowerCase() || '';

      return (
        name.includes(lowerQuery) ||
        state.includes(lowerQuery) ||
        category.includes(lowerQuery) ||
        region.includes(lowerQuery)
      );
    });

    setSearchResults(filtered.slice(0, 8)); // Limit to 8 results
    setIsOpen(true);
    setIsLoading(false);
    setHighlightedIndex(-1);
  };

  // Handle search input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const handleClear = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsOpen(false);
  };

  // Handle result click
  const handleResultClick = (placeId) => {
    navigate(`/place/${placeId}`);
    setSearchQuery('');
    setSearchResults([]);
    setIsOpen(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen || searchResults.length === 0) {
      if (e.key === 'Enter' && searchQuery.trim()) {
        setIsOpen(true);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < searchResults.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : searchResults.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleResultClick(searchResults[highlightedIndex]._id);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Highlight search term in text
  const highlightMatch = (text, query) => {
    if (!text || !query) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <span key={index} className="search-highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="search-bar-wrapper" ref={searchRef}>
      <div className="search-bar-container">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          className="search-bar-input"
          placeholder="Search places, states, categories..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => searchQuery && setIsOpen(true)}
        />
        {searchQuery && (
          <button
            className="search-clear-btn"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && (
        <div className="search-results-dropdown">
          {isLoading && (
            <div className="search-loading">
              <div className="search-spinner"></div>
              <p>Searching...</p>
            </div>
          )}

          {!isLoading && searchResults.length > 0 && (
            <div className="search-results-list">
              {searchResults.map((place, index) => (
                <div
                  key={place._id}
                  className={`search-result-item ${
                    index === highlightedIndex ? 'highlighted' : ''
                  }`}
                  onClick={() => handleResultClick(place._id)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                >
                  
                  {/* Place Info */}
                  <div className="search-result-info">
                    <div className="search-result-name">
                      {highlightMatch(place.name, searchQuery)}
                    </div>
                    <div className="search-result-meta">
                      <span className="search-result-state">
                        {highlightMatch(place.state, searchQuery)}
                      </span>
                      {place.category && (
                        <span className="search-result-category">
                          {highlightMatch(place.category, searchQuery)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="search-result-arrow">→</div>
                </div>
              ))}
            </div>
          )}

          {!isLoading && searchResults.length === 0 && searchQuery && (
            <div className="search-no-results">
              <p>No places found</p>
              <p className="search-no-results-sub">
                Try searching for a different place, state, or category
              </p>
            </div>
          )}

          {!isLoading && searchResults.length === 0 && !searchQuery && (
            <div className="search-empty-state">
              <p>Start typing to search...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
