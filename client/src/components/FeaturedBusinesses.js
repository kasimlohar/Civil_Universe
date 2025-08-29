// FeaturedBusinesses.js
import React, { useState, useEffect } from 'react';
import axiosInstance from '../utils/axiosInstance';
import BusinessList from './BusinessList';
import Toast from './common/Toast';

const FeaturedBusinesses = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedBusinesses = async () => {
      try {
        const response = await axiosInstance.get('/businesses/featured');
        setBusinesses(response.data);
      } catch (err) {
        setError('Failed to load featured businesses');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBusinesses();
  }, []);

  if (error) return <Toast type="error" message={error} />;

  return (
    <BusinessList businesses={businesses} loading={loading} error={error} />
  );
};

export default FeaturedBusinesses;
