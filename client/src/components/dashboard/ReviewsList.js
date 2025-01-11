import React from 'react';
import { FaStar, FaEdit, FaTrash, FaBuilding } from 'react-icons/fa';

const ReviewsList = () => {
  const reviews = [
    {
      id: 1,
      businessName: 'ABC Construction',
      rating: 4,
      date: '2024-01-15',
      content: 'Great service and professional team. Would highly recommend.',
      serviceType: 'Construction Consultation',
      businessImage: 'https://via.placeholder.com/50'
    },
    // Add more reviews here
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'text-golden' : 'text-warm-gray'}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {reviews.map(review => (
        <div key={review.id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-4">
              <img
                src={review.businessImage}
                alt={review.businessName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-primary flex items-center">
                  <FaBuilding className="mr-2" />
                  {review.businessName}
                </h4>
                <p className="text-sm text-muted-green">{review.serviceType}</p>
                <div className="flex items-center space-x-1 mt-1">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 text-secondary hover:text-primary transition-colors">
                <FaEdit />
              </button>
              <button className="p-2 text-red-500 hover:text-red-600 transition-colors">
                <FaTrash />
              </button>
            </div>
          </div>
          
          <p className="mt-4 text-charcoal">{review.content}</p>
          
          <div className="mt-4 text-sm text-muted-green">
            Reviewed on {new Date(review.date).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
