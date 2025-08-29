// BusinessList.js
import React from 'react';
import BusinessCard from './BusinessCard';
import LoadingSpinner from './common/LoadingSpinner';
import Rating from './common/Rating';

const BusinessList = ({ businesses = [], loading = false, error = null }) => {
  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!businesses.length) return <div className="text-gray-500 text-center">No businesses found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {businesses.map(business => (
        <BusinessCard 
          key={business._id || business.id} 
          business={business}
          rating={<Rating value={business.rating} readOnly size="sm" />}
        />
      ))}
    </div>
  );
};

export default BusinessList;
