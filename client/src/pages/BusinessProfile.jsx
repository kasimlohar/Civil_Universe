import React, { useState } from 'react';
import ReviewForm from '../components/ReviewForm';

const BusinessProfile = ({ name, description, services, contactInfo }) => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (data) => {
    setReviews([...reviews, data]);
  };

  return (
    <div className="business-profile">
      <h1>{name}</h1>
      <p>{description}</p>
      <h2>Services</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <h2>Contact Info</h2>
      <p>{contactInfo}</p>
      <h2>Reviews</h2>
      <ReviewForm onSubmit={handleReviewSubmit} />
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>Rating: {review.rating}</p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessProfile;
