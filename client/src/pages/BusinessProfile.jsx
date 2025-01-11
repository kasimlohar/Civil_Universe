import React, { useState } from 'react';
import ReviewForm from '../components/ReviewForm';
import Card from '../components/Card';

const BusinessProfile = ({ name, description, services, contactInfo }) => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (data) => {
    setReviews([...reviews, data]);
  };

  return (
    <div className="business-profile">
      <Card title={name}>
        <p>{description}</p>
      </Card>
      <Card title="Services">
        <ul>
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </Card>
      <Card title="Contact Info">
        <p>{contactInfo}</p>
      </Card>
      <Card title="Reviews">
        <ReviewForm onSubmit={handleReviewSubmit} />
        <div className="reviews">
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <p>Rating: {review.rating}</p>
              <p>{review.review}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default BusinessProfile;
