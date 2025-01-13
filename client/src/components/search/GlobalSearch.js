import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import debounce from 'lodash/debounce';
import axiosInstance from '../../utils/axiosInstance';

const GlobalSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const debouncedSearch = debounce(async (searchTerm) => {
    if (!searchTerm) return setResults([]);
    try {
      const response = await axiosInstance.get(`/search?q=${searchTerm}`);
      setResults(response.data);
    } catch (error) {
      console.error('Search failed:', error);
    }
  }, 300);

  // Component logic and JSX
  // ...existing code...
};

export default GlobalSearch;
