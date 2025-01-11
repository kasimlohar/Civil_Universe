import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const BusinessCard = ({ name, location, rating, contact, categories, portfolio, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-primary">{name}</h2>
        <div className="flex items-center mb-2">
          <FaMapMarkerAlt className="text-muted-green mr-2" />
          <p className="text-charcoal">{location}</p>
        </div>
        <div className="flex items-center mb-2">
          <FaStar className="text-golden mr-2" />
          <p className="text-charcoal">{rating} / 5.0</p>
        </div>
        <div className="flex items-center mb-2">
          <FaPhone className="text-muted-green mr-2" />
          <p className="text-charcoal">{contact}</p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {categories.map((category, index) => (
          <span key={index} className="inline-block bg-background rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2 mb-2">
            {category}
          </span>
        ))}
      </div>
      <div className="px-6 pb-4">
        <Link 
          to={`/booking?business=${name}`}
          className="block text-center bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default BusinessCard;
