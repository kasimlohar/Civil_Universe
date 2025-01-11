import React, { useState } from 'react';

const BusinessListings = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFilter = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div>
            <h1>Business Listings Page</h1>
            <p>Explore our comprehensive directory of civil-related businesses. Find contractors, architects, interior designers, material suppliers, and more.</p>
            <input
                type="text"
                placeholder="Search businesses..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <select value={filter} onChange={handleFilter}>
                <option value="">All Categories</option>
                <option value="contractors">Contractors</option>
                <option value="architects">Architects</option>
                <option value="interior-designers">Interior Designers</option>
                <option value="material-suppliers">Material Suppliers</option>
                <option value="fabricators">Fabricators</option>
            </select>
            <ul>
                <li>Contractors</li>
                <li>Architects</li>
                <li>Interior Designers</li>
                <li>Material Suppliers</li>
                <li>Fabricators</li>
            </ul>
        </div>
    );
};

export default BusinessListings;
