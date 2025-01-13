import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import BusinessList from '../components/BusinessList';
import SearchBar from '../components/search/SearchBar';
import LoadingSpinner from '../components/common/LoadingSpinner';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [searchParams]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <SearchBar />
        <div className="mt-8">
          <BusinessList 
            filters={{
              query: searchParams.get('q'),
              location: searchParams.get('location')
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
