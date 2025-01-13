import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axiosInstance from '../../utils/axiosInstance';
import Toast from '../common/Toast';

const PaymentCheckout = ({ amount, onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)
      });

      const { data } = await axiosInstance.post('/payments/process', {
        paymentMethodId: paymentMethod.id,
        amount
      });

      onSuccess(data);
    } catch (err) {
      setError(err.message);
      onError(err);
    } finally {
      setProcessing(false);
    }
  };

  // Component JSX
  // ...existing code...
};

export default PaymentCheckout;
