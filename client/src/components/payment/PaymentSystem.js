import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import LoadingSpinner from '../common/LoadingSpinner';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentSystem = ({ amount, description, onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <Elements stripe={stripePromise}>
        <PaymentForm 
          amount={amount}
          description={description}
          onSuccess={onSuccess}
          onError={onError}
          setLoading={setLoading}
        />
      </Elements>
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default PaymentSystem;
