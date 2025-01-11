import React from 'react';
import { Link } from 'react-router-dom';
// Fix: Change fa6 to fa
import { FaSearch, FaBuilding, FaUserPlus } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-primary/90 to-primary">
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Construction site"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Find Trusted Civil Services
          </h1>
          
          {/* Search Bar */}
          <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl p-2">
            <div className="flex">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search for services, businesses, or locations..."
                  className="w-full px-4 py-3 text-gray-700 rounded-l focus:outline-none"
                />
              </div>
              <button className="bg-secondary hover:bg-primary transition-colors px-6 py-3 rounded-r flex items-center">
                <FaSearch className="mr-2" />
                Search
              </button>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-4 mt-8">
            <Link to="/business-listings" className="bg-secondary hover:bg-primary transition-colors px-6 py-3 rounded-lg flex items-center">
              <FaBuilding className="mr-2" />
              Find Services Now
            </Link>
            <Link to="/register-business" className="bg-white text-primary hover:bg-primary hover:text-white transition-colors px-6 py-3 rounded-lg flex items-center">
              <FaUserPlus className="mr-2" />
              List Your Business
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Listings Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Featured Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured business cards will be mapped here */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial cards */}
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-background p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={`/images/avatar-${index}.jpg`}
                    alt={`Client ${index}`}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-primary">Client Name</h3>
                    <p className="text-muted-green text-sm">Project Type</p>
                  </div>
                </div>
                <p className="text-charcoal">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Steps */}
            {[
              { title: 'Search', description: 'Find the right service for your needs' },
              { title: 'Compare', description: 'Compare ratings and reviews' },
              { title: 'Book', description: 'Schedule your service instantly' }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-charcoal">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
