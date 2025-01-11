import React from 'react';
import { useForm } from 'react-hook-form';

const ReviewForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Rating</label>
        <select {...register('rating', { required: 'Rating is required' })}>
          <option value="">Select rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {errors.rating && <p>{errors.rating.message}</p>}
      </div>
      <div>
        <label>Review</label>
        <textarea
          {...register('review', { required: 'Review is required' })}
        />
        {errors.review && <p>{errors.review.message}</p>}
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
