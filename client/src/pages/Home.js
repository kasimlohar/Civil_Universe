import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaSearch, FaBuilding } from 'react-icons/fa';
import RotatingTagline from '../components/RotatingTagline';
import SearchBar from '../components/search/SearchBar';
import FeaturedBusinesses from '../components/FeaturedBusinesses';
import TestimonialsHowItWorks from '../components/TestimonialsHowItWorks';

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
          {/* Centered Search Bar below tagline */}
          <div className="w-full flex flex-col items-center mt-6">
            <SearchBar />
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
              <Link
                to="/services"
                className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary transition-colors text-center flex items-center justify-center"
              >
                <FaSearch className="mr-2" />
                Find Services Now
              </Link>
              <Link
                to="/register-business"
                className="bg-white text-primary px-6 py-3 rounded-lg font-semibold shadow hover:bg-primary hover:text-white transition-colors text-center flex items-center justify-center"
              >
                <FaBuilding className="mr-2" />
                List Your Business
              </Link>
            </div>
          </div>
        </div>
      </div>

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
      {/* Testimonials Section */}
      <TestimonialsHowItWorks />
    </div>
  );
};

export default Home;
