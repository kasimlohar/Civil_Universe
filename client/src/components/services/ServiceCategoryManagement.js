import React, { useState } from 'react';
import { BUSINESS_CATEGORIES } from '../../config/constants';

const ServiceCategoryManagement = ({ selectedCategories, onCategoryChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = BUSINESS_CATEGORIES.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search categories..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <div className="grid grid-cols-2 gap-2">
        {filteredCategories.map(category => (
          <label key={category} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
              className="form-checkbox text-primary"
            />
            <span>{category}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategoryManagement;
