import React, { useState } from 'react';
import { Rating } from '../common/Rating';
import axiosInstance from '../../utils/axiosInstance';

const FeedbackSystem = ({ businessId }) => {
  const [feedback, setFeedback] = useState({
    rating: 0,
    comment: '',
    images: []
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axiosInstance.post(`/feedback/${businessId}`, feedback);
      setToast({
        type: 'success',
        message: 'Feedback submitted successfully!'
      });
      setFeedback({ rating: 0, comment: '', images: [] });
    } catch (error) {
      setToast({
        type: 'error',
        message: error.message || 'Failed to submit feedback'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Rating</label>
          <Rating
            value={feedback.rating}
            onChange={(value) => setFeedback({ ...feedback, rating: value })}
            interactive
          />
        </div>

        <div>
          <label className="block mb-2">Comment</label>
          <textarea
            value={feedback.comment}
            onChange={(e) => setFeedback({ ...feedback, comment: e.target.value })}
            className="w-full p-2 border rounded"
            rows={4}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-2 rounded"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
        </button>
      </form>
    </div>
  );
};

export default FeedbackSystem;
