import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaRegClock, FaTools } from 'react-icons/fa';

const Booking = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const businessName = queryParams.get('business');
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', 
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const services = [
    { id: 1, name: 'Construction Consultation', price: '$100', duration: '1 hour' },
    { id: 2, name: 'Site Inspection', price: '$150', duration: '2 hours' },
    { id: 3, name: 'Design Review', price: '$200', duration: '1.5 hours' },
    { id: 4, name: 'Project Planning', price: '$300', duration: '3 hours' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">
            Book an Appointment {businessName ? `with ${businessName}` : ''}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Calendar and Time Selection */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                minDate={new Date()}
                className="w-full mb-6"
              />
              
              <h3 className="text-lg font-medium mb-3">Available Time Slots</h3>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-2 text-sm rounded ${
                      selectedTime === time
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Selection and Booking Form */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold mb-4">Select Service</h2>
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.name)}
                    className={`p-4 border rounded-lg mb-3 cursor-pointer transition-colors ${
                      selectedService === service.name
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{service.name}</h3>
                      <span className="text-blue-600 font-semibold">{service.price}</span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600 flex items-center space-x-4">
                      <span className="flex items-center">
                        <FaRegClock className="mr-1" /> {service.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Booking Summary */}
              {selectedDate && selectedTime && selectedService && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
                  <div className="space-y-3">
                    <p className="flex items-center text-gray-700">
                      <FaRegClock className="mr-2" />
                      {selectedDate.toDateString()} at {selectedTime}
                    </p>
                    <p className="flex items-center text-gray-700">
                      <FaTools className="mr-2" />
                      {selectedService}
                    </p>
                    <button 
                      className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                      onClick={() => {
                        // Add booking confirmation logic here
                        console.log('Booking confirmed:', {
                          date: selectedDate,
                          time: selectedTime,
                          service: selectedService
                        });
                      }}
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
