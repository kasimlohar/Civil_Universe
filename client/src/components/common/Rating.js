import React from 'react';
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, onChange, readOnly = false, size = 'md' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className={`${sizes[size]} text-yellow-400`} />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalf key={i} className={`${sizes[size]} text-yellow-400`} />);
      } else {
        stars.push(<FaRegStar key={i} className={`${sizes[size]} text-yellow-400`} />);
      }
    }
    return stars;
  };

  return (
    <div className={`flex ${!readOnly ? 'cursor-pointer' : ''}`}>
      {renderStars()}
    </div>
  );
};

export default Rating;
