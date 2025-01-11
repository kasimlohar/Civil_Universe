import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaSearch, FaFilter, FaStar, FaMapMarkerAlt } from 'react-icons/fa'; // Changed from fa6 to fa
import BusinessCard from './BusinessCard';

const BusinessListings = () => {
  const { businesses, loading } = useSelector(state => state.business);
  const [filters, setFilters] = useState({
    category: 'all',
    location: '',
    rating: 0,
    priceRange: 'all'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'Construction', 'Renovation', 'Design', 'Consultation'];
  const priceRanges = ['All', '$', '$$', '$$$', '$$$$'];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Search and Filter Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">Business Listings</h1>
            <div className="flex gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-96">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search businesses..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-warm-gray focus:outline-none focus:border-primary"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
              >
                <FaFilter />
                Filters
              </button>
            </div>
          </div>

          {/* Filters Panel */}
          {isFilterOpen && (
            <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="w-full p-2 border border-warm-gray rounded-md"
                  >
                    {categories.map(category => (
                      <option key={category} value={category.toLowerCase()}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Enter location"
                      className="w-full pl-10 pr-4 py-2 border border-warm-gray rounded-md"
                      value={filters.location}
                      onChange={(e) => handleFilterChange('location', e.target.value)}
                    />
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Minimum Rating
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        onClick={() => handleFilterChange('rating', rating)}
                        className={`p-2 ${
                          filters.rating === rating
                            ? 'text-golden'
                            : 'text-warm-gray'
                        }`}
                      >
                        <FaStar />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="w-full p-2 border border-warm-gray rounded-md"
                  >
                    {priceRanges.map(range => (
                      <option key={range} value={range.toLowerCase()}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Business Cards Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businesses.map(business => (
              <BusinessCard key={business.id} {...business} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessListings;
