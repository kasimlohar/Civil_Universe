import React, { useState, useEffect, useCallback } from 'react';
import Rating from '../common/Rating'; // Change this line to import default
import axiosInstance from '../../utils/axiosInstance';

const ReviewManagementSystem = ({ businessId }) => {
  const [reviews, setReviews] = useState([]);
  const [stats, setStats] = useState({
    average: 0,
    total: 0,
    distribution: {}
  });

  const fetchStats = useCallback(async () => {
    try {
      const response = await axiosInstance.get(`/reviews/${businessId}/stats`);
      setStats(response.data);
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  }, [businessId]);

  const fetchReviews = useCallback(async () => {
    try {
      const response = await axiosInstance.get(`/reviews/${businessId}`);
      setReviews(response.data);
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
    }
  }, [businessId]);

  useEffect(() => {
    fetchReviews();
    fetchStats();
  }, [fetchReviews, fetchStats]);

  return (
    <div className="space-y-6">
      {/* Stats Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Review Statistics</h2>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-gray-600">Average Rating</p>
            <div className="flex items-center">
              <Rating value={stats.average} readOnly />
              <span className="ml-2">{stats.average.toFixed(1)}</span>
            </div>
          </div>
          <div>
            <p className="text-gray-600">Total Reviews</p>
            <p className="text-2xl font-bold">{stats.total}</p>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold p-6 border-b">Customer Reviews</h2>
        <div className="divide-y">
          {reviews.map(review => (
            <div key={review._id} className="p-6">
              <div className="flex justify-between">
                <div>
                  <Rating value={review.rating} readOnly />
                  <p className="mt-2">{review.comment}</p>
                </div>
                <span className="text-gray-500 text-sm">
                  {new Date(review.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewManagementSystem;
