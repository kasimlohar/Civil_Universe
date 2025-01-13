import React, { useState } from 'react';
import { FaFilter, FaTimes } from 'react-icons/fa';

const SearchFilters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    rating: '',
    location: '',
    sortBy: 'relevance'
  });

  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    'Construction',
    'Architecture',
    'Interior Design',
    'Plumbing',
    'Electrical',
    'Fabrication',
    'Civil Engineering',
    'Renovation'
  ];

  const priceRanges = [
    { label: 'Any', value: '' },
    { label: '₹0 - ₹10,000', value: '0-10000' },
    { label: '₹10,000 - ₹50,000', value: '10000-50000' },
    { label: '₹50,000+', value: '50000-plus' }
  ];

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = Object.keys(filters).reduce((acc, key) => {
      acc[key] = '';
      return acc;
    }, {});
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow"
      >
        <FaFilter />
        Filters
      </button>

      {isOpen && (
        <div className="absolute mt-2 p-4 bg-white rounded-lg shadow-lg w-72 z-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Filters</h3>
            <button
              onClick={clearFilters}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear all
            </button>
          </div>

          {/* Filter sections */}
          <div className="space-y-4">
            {/* Categories */}
            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category.toLowerCase()}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium mb-2">Price Range</label>
              <select
                value={filters.priceRange}
                onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                className="w-full p-2 border rounded"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-sm font-medium mb-2">Minimum Rating</label>
              <div className="flex gap-2">
                {[5, 4, 3, 2, 1].map(rating => (
                  <button
                    key={rating}
                    onClick={() => handleFilterChange('rating', rating)}
                    className={`px-3 py-1 border rounded ${
                      filters.rating === rating ? 'bg-primary text-white' : ''
                    }`}
                  >
                    {rating}★
                  </button>
                ))}
              </div>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium mb-2">Sort By</label>
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="relevance">Relevance</option>
                <option value="rating">Rating</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
