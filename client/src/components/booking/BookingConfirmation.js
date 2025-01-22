import React from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentSystem from '../payment/PaymentSystem';

const BookingConfirmation = ({ booking, onConfirm, onCancel }) => {
  const navigate = useNavigate();

  const handlePaymentSuccess = async (paymentDetails) => {
    try {
      await onConfirm(paymentDetails);
      navigate('/dashboard');
    } catch (error) {
      console.error('Payment confirmation failed:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Confirm Your Booking</h2>
      
      {/* Booking Summary */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h3 className="font-medium mb-4">Booking Details</h3>
        {/* Summary details */}
        // ...existing code...
      </div>

      {/* Payment Section */}
      <PaymentSystem
        amount={booking.amount}
        description={`Booking for ${booking.serviceName}`}
        onSuccess={handlePaymentSuccess}
        onError={(error) => console.error('Payment failed:', error)}
      />
    </div>
  );
};

export default BookingConfirmation;
