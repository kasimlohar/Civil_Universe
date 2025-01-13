import { useState } from 'react';
import axiosInstance from '../utils/axiosInstance';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (config) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axiosInstance(config);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { request, loading, error };
};
