import React, { useState, useEffect } from 'react';
import BusinessCard from './BusinessCard';
import axiosInstance from '../utils/axiosInstance';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [featuredBusinesses, setFeaturedBusinesses] = useState([]);

  useEffect(() => {
    const fetchFeaturedBusinesses = async () => {
      try {
        const response = await axiosInstance.get('/featured-businesses');
        setFeaturedBusinesses(response.data);
      } catch (error) {
        console.error('Error fetching featured businesses:', error);
      }
    };

    fetchFeaturedBusinesses();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-3xl font-bold">Business Directory</h1>
      </header>

      {/* Search Bar */}
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="Search for businesses..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-3/4 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Featured Businesses */}
      <section className="mt-10 p-4">
        <h2 className="text-2xl font-semibold mb-4">Featured Businesses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredBusinesses.map(business => (
            <BusinessCard
              key={business.id}
              name={business.name}
              location={business.location}
              rating={business.rating}
              contact={business.contact}
              categories={business.categories}
              portfolio={business.portfolio}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
