import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaBookmark } from 'react-icons/fa';

const SavedServices = () => {
  const savedServices = [
    {
      id: 1,
      name: 'XYZ Contractors',
      image: 'https://via.placeholder.com/150',
      rating: 4.8,
      reviews: 124,
      category: 'Construction',
      description: 'Professional construction services with 15+ years of experience'
    },
    // Add more saved services
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {savedServices.map(service => (
        <div key={service.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="relative">
            <img 
              src={service.image} 
              alt={service.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-background transition-colors">
              <FaBookmark className="text-secondary" />
            </button>
          </div>
          
          <div className="p-4">
            <h4 className="text-lg font-semibold text-primary mb-2">{service.name}</h4>
            <div className="flex items-center mb-2">
              <FaStar className="text-golden mr-1" />
              <span className="text-charcoal">{service.rating}</span>
              <span className="text-muted-green ml-1">({service.reviews} reviews)</span>
            </div>
            <p className="text-charcoal mb-4">{service.description}</p>
            
            <div className="flex justify-between items-center">
              <span className="px-3 py-1 bg-background text-primary rounded-full text-sm">
                {service.category}
              </span>
              <Link
                to={`/business/${service.id}`}
                className="text-secondary hover:text-primary font-medium"
              >
                View Details →
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedServices;
