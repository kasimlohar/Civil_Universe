import React from 'react';
import BusinessCard from '../components/BusinessCard';

const Home = () => {
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
          className="w-3/4 p-2 border border-gray-300 rounded-md"
        />
      </div>

      {/* Featured Businesses */}
      <section className="mt-10 p-4">
        <h2 className="text-2xl font-semibold mb-4">Featured Businesses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BusinessCard name="Business Name 1" location="Location 1" rating={4.5} />
          <BusinessCard name="Business Name 2" location="Location 2" rating={4.0} />
          <BusinessCard name="Business Name 3" location="Location 3" rating={3.5} />
          {/* Add more business cards as needed */}
        </div>
      </section>
    </div>
  );
};

export default Home;
