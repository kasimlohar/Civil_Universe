import React from 'react';
import { FaCalendar, FaClock, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const BookingsList = () => {
  const bookings = [
    {
      id: 1,
      businessName: 'ABC Construction',
      service: 'Construction Consultation',
      date: '2024-02-15',
      time: '10:00 AM',
      status: 'upcoming',
      location: 'New York',
      contact: '(123) 456-7890'
    },
    // Add more bookings
  ];

  const getStatusColor = (status) => {
    const colors = {
      upcoming: 'bg-blue-100 text-blue-800',
      completed: 'bg-green-100 text-green-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-4">
      {bookings.map(booking => (
        <div key={booking.id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-xl font-semibold text-primary">{booking.businessName}</h4>
              <p className="text-muted-green">{booking.service}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center text-charcoal">
              <FaCalendar className="mr-2 text-secondary" />
              {new Date(booking.date).toLocaleDateString()}
            </div>
            <div className="flex items-center text-charcoal">
              <FaClock className="mr-2 text-secondary" />
              {booking.time}
            </div>
            <div className="flex items-center text-charcoal">
              <FaMapMarkerAlt className="mr-2 text-secondary" />
              {booking.location}
            </div>
            <div className="flex items-center text-charcoal">
              <FaPhone className="mr-2 text-secondary" />
              {booking.contact}
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="px-4 py-2 bg-secondary text-white rounded hover:bg-primary transition-colors">
              Reschedule
            </button>
            <button className="px-4 py-2 border border-warm-gray text-charcoal rounded hover:bg-background transition-colors">
              Cancel
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingsList;
