const Razorpay = require('razorpay');
const Booking = require('../models/Booking');
const crypto = require('crypto');

// Initialize Razorpay with your key_id and key_secret (conditionally)
let razorpay = null;
if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
  razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
}

exports.processPayment = async (req, res) => {
  try {
    if (!razorpay) {
      return res.status(503).json({ message: 'Payment service not configured. Please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET environment variables.' });
    }
    
    const { amount, bookingId } = req.body;
    
    // Create a Razorpay order
    const options = {
      amount: amount * 100, // amount in smallest currency unit (paise)
      currency: 'INR',
      receipt: `receipt_${bookingId || Date.now()}`,
      payment_capture: 1, // auto-capture
    };
    
    const order = await razorpay.orders.create(options);
    res.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new method to verify Razorpay payments
exports.verifyPayment = async (req, res) => {
  try {
    if (!razorpay) {
      return res.status(503).json({ message: 'Payment service not configured. Please set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET environment variables.' });
    }
    
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    
    // Verify the payment signature
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest('hex');
      
    if (expectedSignature === razorpay_signature) {
      // Payment is successful, update your database
      res.json({ success: true, message: 'Payment verified successfully' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid signature' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
