import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBuilding, FaUserPlus } from 'react-icons/fa';
import RotatingTagline from '../components/RotatingTagline';
import BusinessList from '../components/BusinessList';
import SearchBar from '../components/search/SearchBar';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-primary/90 to-primary">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg2.jpg"
            alt="Construction site"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Featured Businesses */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Featured Businesses</h2>
          <BusinessList type="featured" />
        </div>
      </section>
    </div>
  );
};

export default Home;
