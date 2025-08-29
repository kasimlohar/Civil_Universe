import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto -mt-8 px-4 relative z-10">
      <div className="flex bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="flex-1 flex items-center">
          <input
            type="text"
            placeholder="Search for services, businesses, or location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-4 focus:outline-none text-gray-900"
          />
        </div>
        <button
          type="submit"
          className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary transition-colors text-center flex items-center justify-center m-2"
        >
          <FaSearch className="mr-2" />
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
