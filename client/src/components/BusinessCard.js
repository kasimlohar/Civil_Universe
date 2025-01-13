import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const BusinessCard = ({ business }) => {
  const {
    id,
    name,
    description,
    rating,
    reviewCount,
    location,
    contact,
    imageUrl,
    categories
  } = business;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={imageUrl || '/images/business-placeholder.jpg'}
        alt={name}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary mb-2">{name}</h3>
        
        <div className="flex items-center mb-2">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-gray-700">{rating}</span>
          <span className="text-gray-500 text-sm ml-1">({reviewCount} reviews)</span>
        </div>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

        <div className="flex items-center text-gray-500 text-sm mb-2">
          <FaMapMarkerAlt className="mr-1" />
          <span>{location}</span>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-3">
          <FaPhone className="mr-1" />
          <span>{contact}</span>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {category}
            </span>
          ))}
        </div>

        <Link
          to={`/business/${id}`}
          className="block w-full text-center py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BusinessCard;
