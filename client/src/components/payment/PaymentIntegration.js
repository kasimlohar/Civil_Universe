import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axiosInstance from '../../utils/axiosInstance';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ amount, onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });

      const response = await axiosInstance.post('/payments/process', {
        paymentMethodId: paymentMethod.id,
        amount
      });

      onSuccess(response.data);
    } catch (error) {
      onError(error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="p-4 border rounded" />
      <button 
        type="submit" 
        disabled={!stripe || isProcessing}
        className="w-full bg-primary text-white py-2 rounded"
      >
        {isProcessing ? 'Processing...' : `Pay ₹${amount}`}
      </button>
    </form>
  );
};

// Main component wrapper with Stripe Elements
const PaymentIntegration = (props) => (
  <Elements stripe={stripePromise}>
    <PaymentForm {...props} />
  </Elements>
);

export default PaymentIntegration;
