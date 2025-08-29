import React from 'react';
import { useRazorpay } from 'react-razorpay';
import RazorpayPaymentForm from './RazorpayPaymentForm';

const PaymentProcessor = ({ amount, bookingId, onSuccess, onError }) => {
  const { error, isLoading, Razorpay } = useRazorpay();

  if (isLoading) {
    return <div>Loading payment system...</div>;
  }

  if (error) {
    return <div>Error loading payment system: {error}</div>;
  }

  return (
    <RazorpayPaymentForm 
      amount={amount} 
      bookingId={bookingId} 
      onSuccess={onSuccess} 
      onError={onError} 
      Razorpay={Razorpay}
    />
  );
};

export default PaymentProcessor;
