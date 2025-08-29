import React, { useState, useEffect } from 'react';
import ReviewForm from '../components/ReviewForm';
import BookingForm from '../components/BookingForm';
import Card from '../components/Card';
import axiosInstance from '../utils/axiosInstance';

const BusinessProfile = ({ match }) => {
  const [business, setBusiness] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const response = await axiosInstance.get(`/businesses/${match.params.id}`);
        setBusiness(response.data);
      } catch (error) {
        console.error('Error fetching business:', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axiosInstance.get(`/businesses/${match.params.id}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchBusiness();
    fetchReviews();
  }, [match.params.id]);

  const handleReviewSubmit = async (data) => {
    try {
      const response = await axiosInstance.post(`/businesses/${match.params.id}/reviews`, data);
      setReviews([...reviews, response.data]);
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  const handleBookingSubmit = async (data) => {
    try {
      await axiosInstance.post(`/businesses/${match.params.id}/bookings`, data);
      console.log('Booking submitted:', data);
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };

  if (!business) {
    return <div>Loading...</div>;
  }

  return (
    <div className="business-profile">
      <Card title={business.name}>
        <p>{business.description}</p>
      </Card>
      <Card title="Services">
        <ul>
          {business.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </Card>
      <Card title="Contact Info">
        <p>{business.contactInfo}</p>
      </Card>
      <Card title="Book a Service">
        <BookingForm onSubmit={handleBookingSubmit} />
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
