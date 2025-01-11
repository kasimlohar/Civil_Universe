import React from 'react';
import PropTypes from 'prop-types';

const BusinessCard = ({ name, location, rating }) => {
  return (
    <div className="business-card">
      <h2>{name}</h2>
      <p>{location}</p>
      <p>Rating: {rating}</p>
    </div>
  );
};

BusinessCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default BusinessCard;
