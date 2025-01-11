import React, { useState, useEffect } from 'react';

const BusinessList = () => {
  const [businesses, setBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [businessesPerPage] = useState(10);

  useEffect(() => {
    // Fetch the list of businesses from an API or a static file
    const fetchBusinesses = async () => {
      try {
        const response = await fetch('/path/to/businesses/api');
        const data = await response.json();
        console.log('Fetched businesses:', data); // Debugging log
        setBusinesses(data);
      } catch (error) {
        console.error('Error fetching businesses:', error); // Debugging log
      }
    };

    fetchBusinesses();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBusinesses = businesses.filter(business =>
    business.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastBusiness = currentPage * businessesPerPage;
  const indexOfFirstBusiness = indexOfLastBusiness - businessesPerPage;
  const currentBusinesses = filteredBusinesses.slice(indexOfFirstBusiness, indexOfLastBusiness);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Business Listings</h1>
      <input
        type="text"
        placeholder="Search businesses..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {currentBusinesses.map(business => (
          <li key={business.id}>
            <h2>{business.name}</h2>
            <p>{business.location}</p>
            <p>Rating: {business.rating}</p>
            <p>Contact: {business.contact}</p>
            <p>Categories: {business.categories.join(', ')}</p>
            <a href={business.portfolio} target="_blank" rel="noopener noreferrer">View Portfolio</a>
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: Math.ceil(filteredBusinesses.length / businessesPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BusinessList;
