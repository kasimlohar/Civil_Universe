import React from 'react';
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, total = 5, size = 'md', interactive = false, onChange }) => {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const renderStar = (position) => {
    const starValue = Math.floor(value);
    const hasHalfStar = value % 1 !== 0;
    
    if (position <= starValue) {
      return <FaStar className={`${sizes[size]} text-yellow-400`} />;
    } else if (hasHalfStar && position === starValue + 1) {
      return <FaStarHalf className={`${sizes[size]} text-yellow-400`} />;
    }
    return <FaRegStar className={`${sizes[size]} text-yellow-400`} />;
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(total)].map((_, index) => (
        <span
          key={index}
          onClick={() => interactive && onChange?.(index + 1)}
          className={interactive ? 'cursor-pointer' : ''}
        >
          {renderStar(index + 1)}
        </span>
      ))}
    </div>
  );
};

export default Rating;
