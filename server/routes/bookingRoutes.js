const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Create a new booking
router.post('/', bookingController.createBooking);

// Add other booking routes as needed
// Example:
// router.get('/user/:userId', bookingController.getUserBookings);
// router.get('/business/:businessId', bookingController.getBusinessBookings);
// router.patch('/:id', bookingController.updateBookingStatus);

module.exports = router;