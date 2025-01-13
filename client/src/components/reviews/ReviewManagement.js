import React, { useState, useEffect } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { FaStar } from 'react-icons/fa';
import Toast from '../common/Toast';

const ReviewManagement = ({ businessId }) => {
  const [reviews, setReviews] = useState([]);
  const [response, setResponse] = useState('');
  const [selectedReview, setSelectedReview] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, [businessId]);

  const fetchReviews = async () => {
    try {
      const response = await axiosInstance.get(`/reviews/business/${businessId}`);
      setReviews(response.data);
    } catch (error) {
      setToast({
        type: 'error',
        message: 'Failed to fetch reviews'
      });
    }
  };

  const handleResponse = async (reviewId) => {
    try {
      await axiosInstance.post(`/reviews/${reviewId}/response`, {
        response: response
      });
      fetchReviews();
      setResponse('');
      setSelectedReview(null);
      setToast({
        type: 'success',
        message: 'Response added successfully'
      });
    } catch (error) {
      setToast({
        type: 'error',
        message: 'Failed to add response'
      });
    }
  };

  return (
    <div className="space-y-4">
      {reviews.map(review => (
        <div key={review.id} className="bg-white rounded-lg shadow p-4">
          <div className="flex justify-between mb-2">
            <div>
              <h3 className="font-semibold">{review.userName}</h3>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={index < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                  />
                ))}
              </div>
            </div>
            <span className="text-gray-500 text-sm">
              {new Date(review.date).toLocaleDateString()}
            </span>
          </div>
          
          <p className="text-gray-700 mb-4">{review.comment}</p>

          {review.response ? (
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-sm font-semibold">Your Response:</p>
              <p className="text-gray-600">{review.response}</p>
            </div>
          ) : (
            selectedReview === review.id && (
              <div className="mt-2">
                <textarea
                  value={response}
                  onChange={(e) => setResponse(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Write your response..."
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleResponse(review.id)}
                    className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
                  >
                    Submit Response
                  </button>
                  <button
                    onClick={() => setSelectedReview(null)}
                    className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )
          )}

          {!review.response && selectedReview !== review.id && (
            <button
              onClick={() => setSelectedReview(review.id)}
              className="text-primary hover:text-primary/80"
            >
              Add Response
            </button>
          )}
        </div>
      ))}

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default ReviewManagement;
