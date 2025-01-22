const express = require('express');
const router = express.Router();
const bookingRoutes = require('./bookingRoutes');
const paymentRoutes = require('./paymentRoutes');
const { auth } = require('../middleware/auth');

router.use('/bookings', auth, bookingRoutes);
router.use('/payments', auth, paymentRoutes);

module.exports = router;
