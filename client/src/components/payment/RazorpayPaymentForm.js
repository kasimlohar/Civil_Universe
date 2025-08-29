import React, { useState } from 'react';
import axios from 'axios';

const RazorpayPaymentForm = ({ amount, bookingId, onSuccess, onError, Razorpay }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    try {
      setIsProcessing(true);
      
      // Create order on the server
      const response = await axios.post('/payments/process', {
        amount,
        bookingId
      });
      
      const { orderId, keyId } = response.data;
      
      // Configure Razorpay options
      const options = {
        key: keyId,
        amount: amount * 100, // in paise
        currency: 'INR',
        name: 'Civil Universe',
        description: 'Service Booking Payment',
        order_id: orderId,
        handler: async function (response) {
          try {
            // Verify payment on server
            const verifyResponse = await axios.post('/payments/verify', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature
            });
            
            if (verifyResponse.data.success) {
              onSuccess(response);
            } else {
              onError('Payment verification failed');
            }
          } catch (error) {
            onError(error.message || 'Payment verification failed');
          }
        },
        prefill: {
          name: '',
          email: '',
          contact: ''
        },
        theme: {
          color: '#3399cc'
        }
      };
      
      // Initialize Razorpay
      const razorpayInstance = new Razorpay(options);
      razorpayInstance.open();
      
    } catch (error) {
      onError(error.message || 'Failed to process payment');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="payment-form">
      <h3>Complete Your Payment</h3>
      <p>Amount: ₹{amount}</p>
      <button 
        onClick={handlePayment} 
        disabled={isProcessing}
        className="payment-button"
      >
        {isProcessing ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default RazorpayPaymentForm;