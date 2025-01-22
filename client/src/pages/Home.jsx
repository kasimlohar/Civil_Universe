import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import RotatingTagline from '../components/RotatingTagline';
import SearchBar from '../components/search/SearchBar';
import FeaturedBusinesses from '../components/FeaturedBusinesses';

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
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white">
          <RotatingTagline />
        </div>
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Featured Businesses Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-primary">Featured Businesses</h2>
            <Link 
              to="/business-listings" 
              className="flex items-center text-secondary hover:text-primary transition-colors"
            >
              View All <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <FeaturedBusinesses />
        </div>
      </section>
    </div>
  );
};

export default Home;
