import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [searchLocation, setSearchLocation] = useState(''); // Changed from location to searchLocation
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}&location=${encodeURIComponent(searchLocation)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto -mt-8 px-4 relative z-10">
      <div className="flex bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex-1 flex border-r">
          <FaSearch className="text-gray-400 my-auto ml-4" />
          <input
            type="text"
            placeholder="Search for services..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-4 focus:outline-none"
          />
        </div>
        <div className="flex-1 flex">
          <FaMapMarkerAlt className="text-gray-400 my-auto ml-4" />
          <input
            type="text"
            placeholder="Location"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="w-full p-4 focus:outline-none"
          />
        </div>
        <button className="bg-primary text-white px-8 hover:bg-primary/90 transition-colors">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
