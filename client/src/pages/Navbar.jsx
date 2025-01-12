import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <nav className="navbar">
      <div className="flex items-center">
        <img 
          src="/logo.svg"
          alt="Civil Universe Logo"
          className="h-16 w-auto"
        />
      </div>
      <h2>Civil Universe</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/business-listings">Business Listings</Link></li>
        {isAuthenticated ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;