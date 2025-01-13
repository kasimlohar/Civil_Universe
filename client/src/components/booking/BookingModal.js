import React, { useState } from 'react';
import { FaTimes, FaCalendar, FaClock } from 'react-icons/fa';
import axiosInstance from '../../utils/axiosInstance';

const BookingModal = ({ service, business, onClose, onSuccess }) => {
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    notes: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axiosInstance.post('/bookings', {
        serviceId: service.id,
        businessId: business.id,
        ...bookingData
      });

      onSuccess(response.data);
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to create booking');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg max-w-md w-full mx-4">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Book Service</h2>
          <button onClick={onClose}>
            <FaTimes className="text-gray-500 hover:text-gray-700" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {error && (
            <div className="bg-red-100 text-red-600 p-3 rounded">
              {error}
            </div>
          )}

          <div>
            <h3 className="font-medium mb-2">{service.name}</h3>
            <p className="text-gray-600">{business.name}</p>
            <p className="text-primary font-medium">₹{service.price}</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <div className="relative">
              <FaCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="date"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                value={bookingData.date}
                onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Time</label>
            <div className="relative">
              <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="time"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                value={bookingData.time}
                onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Notes</label>
            <textarea
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
              value={bookingData.notes}
              onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Booking...' : 'Book Now'}
            </button>
          </div>
                  </form>
                </div>
              </div>
            
          );
        };
        
        export default BookingModal;
