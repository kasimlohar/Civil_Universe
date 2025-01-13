import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import BusinessCard from './BusinessCard';
import LoadingSpinner from './common/LoadingSpinner';

const BusinessList = ({ type = 'all', filters = {} }) => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusinesses = async () => {
      try {
        const response = await axiosInstance.get('/businesses', { 
          params: { 
            type,
            ...filters
          }
        });
        setBusinesses(response.data);
      } catch (err) {
        setError('Failed to fetch businesses');
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, [type, filters]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!businesses.length) return <div className="text-gray-500 text-center">No businesses found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {businesses.map(business => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
