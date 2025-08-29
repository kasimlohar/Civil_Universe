const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Create a new booking
router.post('/', bookingController.createBooking);

// Get all bookings
router.get('/', bookingController.getBookings);

// Get available slots for a date
router.get('/available-slots', bookingController.getAvailableSlots);

// Get bookings for a specific business
router.get('/business/:businessId', bookingController.getBusinessBookings);

// Get bookings in date range for a business
router.get('/business/:businessId/range', bookingController.getBookingsInRange);

// Update booking status
router.put('/:id/status', bookingController.updateBookingStatus);

module.exports = router;