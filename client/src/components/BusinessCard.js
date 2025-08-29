import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const BusinessCard = ({ business }) => {
  const { _id, name, description, rating = 0, location, contact, imageUrl, categories } = business;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl || '/images/business-placeholder.jpg'} 
          alt={name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Featured Badge */}
        {business.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
            Featured
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Name */}
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{name}</h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`h-4 w-4 ${i < Math.round(rating) ? "text-yellow-400" : "text-gray-300"}`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">({rating.toFixed(1)})</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{description}</p>

        {/* Location */}
        <div className="flex items-center text-gray-500 text-sm mb-1">
          <FaMapMarkerAlt className="mr-2 text-primary" />
          <span className="truncate">{location}</span>
        </div>

        {/* Contact */}
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <FaPhone className="mr-2 text-primary" />
          <span>{contact}</span>
        </div>

        {/* Categories */}
        {categories?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category, index) => (
              <span 
                key={index} 
                className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        <Link 
          to={`/business/${_id}`}
          className="block w-full text-center bg-primary text-white py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BusinessCard;
