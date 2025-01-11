import React from 'react';
import PropTypes from 'prop-types';

const BusinessCard = ({ name, location, rating, contact, categories, portfolio }) => {
  return (
    <div className="business-card">
      <h2>{name}</h2>
      <p>{location}</p>
      <p>Rating: {rating}</p>
      <p>Contact: {contact}</p>
      <p>Categories: {categories.join(', ')}</p>
      <a href={portfolio} target="_blank" rel="noopener noreferrer">View Portfolio</a>
    </div>
  );
};

BusinessCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  contact: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  portfolio: PropTypes.string.isRequired,
};

export default BusinessCard;
