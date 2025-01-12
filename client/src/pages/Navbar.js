import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, isAuthenticated } = useSelector(state => state.user);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
                <Link to="/" className="flex items-center justify-center">
                <img 
                  src="/logo.svg" 
                  alt="Civil Universe Logo" 
                  className="h-16 w-auto mr-2 p-3"
                />
                </Link>

                {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <Link to="/business-listings" className="hover:text-secondary transition-colors">Businesses</Link>
            <Link to="/services" className="hover:text-secondary transition-colors">Services</Link>
            <Link to="/about" className="hover:text-secondary transition-colors">About</Link>
            <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
          </div>

          {/* Auth Buttons/User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center space-x-2 hover:text-secondary transition-colors"
                >
                  <img
                    src={user?.avatar || 'https://via.placeholder.com/32'}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{user?.name || 'User'}</span>
                </button>
                
                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-charcoal hover:bg-background transition-colors"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/bookings"
                      className="block px-4 py-2 text-charcoal hover:bg-background transition-colors"
                    >
                      My Bookings
                    </Link>
                    <button
                      onClick={() => {/* Add logout logic */}}
                      className="block w-full text-left px-4 py-2 text-charcoal hover:bg-background transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-secondary transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-secondary hover:bg-secondary/90 px-4 py-2 rounded-lg transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
              <Link to="/business-listings" className="hover:text-secondary transition-colors">Businesses</Link>
              <Link to="/services" className="hover:text-secondary transition-colors">Services</Link>
              <Link to="/about" className="hover:text-secondary transition-colors">About</Link>
              <Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link>
              {!isAuthenticated && (
                <div className="space-y-2">
                  <Link
                    to="/login"
                    className="block hover:text-secondary transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block bg-secondary hover:bg-secondary/90 px-4 py-2 rounded-lg transition-colors text-center"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
