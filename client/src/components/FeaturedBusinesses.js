import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import BusinessCard from './BusinessCard';
import LoadingSpinner from './common/LoadingSpinner';

const FeaturedBusinesses = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedBusinesses = async () => {
      try {
        console.log('Fetching featured businesses...'); // Debug log
        const response = await axiosInstance.get('/businesses/featured');
        console.log('API Response:', response); // Debug log
        setBusinesses(response.data);
      } catch (error) {
        console.error('Error details:', error.response || error); // Enhanced error logging
        setError('Failed to load featured businesses');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBusinesses();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!businesses.length) return <div className="text-gray-500 text-center">No featured businesses available</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {businesses.map(business => (
        <BusinessCard key={business._id} business={business} />
      ))}
    </div>
  );
};

export default FeaturedBusinesses;
