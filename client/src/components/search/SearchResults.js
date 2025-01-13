import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import BusinessCard from '../BusinessCard';
import LoadingSpinner from '../common/LoadingSpinner';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchResults();
  }, [searchParams, page]);

  const fetchResults = async () => {
    try {
      const response = await axiosInstance.get('/search', {
        params: {
          ...Object.fromEntries(searchParams),
          page
        }
      });
      setResults(prev => page === 1 ? response.data.results : [...prev, ...response.data.results]);
      setHasMore(response.data.hasMore);
    } catch (error) {
      console.error('Search failed:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && page === 1) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Results display and infinite scroll logic */}
      // ...existing code...
    </div>
  );
};

export default SearchResults;
