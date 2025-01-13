import React, { useState, useEffect, useCallback } from 'react';
import BusinessCard from './BusinessCard';
import LoadingSpinner from './common/LoadingSpinner';
import axiosInstance from '../utils/axiosInstance';

const BusinessListings = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    rating: 0,
    location: ''
  });

  const fetchBusinesses = useCallback(async () => {
    try {
      const response = await axiosInstance.get('/businesses', { params: filters });
      setBusinesses(response.data);
    } catch (error) {
      console.error('Error fetching businesses:', error);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchBusinesses();
  }, [fetchBusinesses]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map(business => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </div>
  );
};

export default BusinessListings;
