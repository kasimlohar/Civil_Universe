const Booking = require('../models/Booking');

// Mock booking data for when database is not connected
const mockBookings = [];
let bookingIdCounter = 1;

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { name, email, phone, date, time, service, message, businessId, businessName } = req.body;
    
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      // Mock booking creation
      const mockBooking = {
        _id: bookingIdCounter++,
        name,
        email,
        phone,
        date,
        time,
        service,
        message,
        businessId,
        businessName,
        status: 'pending',
        createdAt: new Date()
      };
      
      mockBookings.push(mockBooking);
      
      return res.status(201).json({
        message: 'Booking created successfully',
        booking: mockBooking
      });
    }
    
    const booking = new Booking({
      name,
      email,
      phone,
      date,
      time,
      service,
      message,
      businessId,
      businessName,
      status: 'pending'
    });
    
    await booking.save();
    res.status(201).json({
      message: 'Booking created successfully',
      booking
    });
  } catch (error) {
    console.log('Booking creation error:', error.message);
    res.status(400).json({ message: 'Error creating booking: ' + error.message });
  }
};

// Get all bookings
exports.getBookings = async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      return res.json(mockBookings);
    }
    
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings' });
  }
};

// Get bookings for a specific business
exports.getBusinessBookings = async (req, res) => {
  try {
    const { businessId } = req.params;
    
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      const businessBookings = mockBookings.filter(booking => booking.businessId === businessId);
      return res.json(businessBookings);
    }
    
    const bookings = await Booking.find({ businessId }).sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching business bookings' });
  }
};

// Get available slots for a date (mock implementation)
exports.getAvailableSlots = async (req, res) => {
  try {
    const { date } = req.query;
    
    // Mock available slots
    const allSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
    
    // For demo purposes, randomly remove some slots to simulate bookings
    const availableSlots = allSlots.filter(() => Math.random() > 0.3);
    
    res.json(availableSlots);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching available slots' });
  }
};

// Get bookings in date range
exports.getBookingsInRange = async (req, res) => {
  try {
    const { businessId } = req.params;
    const { start, end } = req.query;
    
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      // Filter mock bookings by date range and business
      const filteredBookings = mockBookings.filter(booking => {
        const bookingDate = new Date(booking.date);
        return booking.businessId === businessId && 
               bookingDate >= new Date(start) && 
               bookingDate <= new Date(end);
      });
      return res.json(filteredBookings);
    }
    
    const bookings = await Booking.find({
      businessId,
      date: {
        $gte: new Date(start),
        $lte: new Date(end)
      }
    });
    
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings in range' });
  }
};

// Update booking status
exports.updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      const bookingIndex = mockBookings.findIndex(booking => booking._id.toString() === id);
      if (bookingIndex === -1) {
        return res.status(404).json({ message: 'Booking not found' });
      }
      
      mockBookings[bookingIndex].status = status;
      return res.json({
        message: 'Booking status updated successfully',
        booking: mockBookings[bookingIndex]
      });
    }
    
    const booking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    
    res.json({
      message: 'Booking status updated successfully',
      booking
    });
  } catch (error) {
    res.status(400).json({ message: 'Error updating booking status' });
  }
};
