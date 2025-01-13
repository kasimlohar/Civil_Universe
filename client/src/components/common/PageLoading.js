import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const PageLoading = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <LoadingSpinner size="lg" />
    </div>
  );
};

export default PageLoading;
