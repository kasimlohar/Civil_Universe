import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const BusinessCard = ({ business }) => {
  const { _id, name, description, rating, location, contact, imageUrl, categories } = business;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="relative h-48">
        <img 
          src={imageUrl || '/images/business-placeholder.jpg'} 
          alt={name}
          className="w-full h-full object-cover"
        />
        {business.featured && (
          <div className="absolute top-2 right-2 bg-secondary text-white px-3 py-1 rounded-full text-sm">
            Featured
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold text-primary mb-2">{name}</h3>
        
        <div className="flex items-center mb-2">
          <FaStar className="text-yellow-400 mr-1" />
          <span className="text-gray-700">{rating || 0}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center text-gray-500 text-sm mb-2">
          <FaMapMarkerAlt className="mr-2" />
          <span>{location}</span>
        </div>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <FaPhone className="mr-2" />
          <span>{contact}</span>
        </div>

        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                {category}
              </span>
            ))}
          </div>
        )}

        <Link 
          to={`/business/${_id}`}
          className="block w-full text-center bg-primary text-white py-2 rounded hover:bg-primary/90 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BusinessCard;
