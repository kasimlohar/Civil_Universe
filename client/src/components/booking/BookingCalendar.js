import React, { useState, useEffect, useCallback } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isToday, isSameMonth, addMonths, subMonths } from 'date-fns';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axiosInstance from '../../utils/axiosInstance';
import LoadingSpinner from '../common/LoadingSpinner';
import Toast from '../common/Toast';

const BookingCalendar = ({ businessId }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);

  const fetchMonthBookings = useCallback(async () => {
    try {
      const start = startOfMonth(currentDate);
      const end = endOfMonth(currentDate);
      const response = await axiosInstance.get(
        `/bookings/business/${businessId}/range`,
        { params: { start, end } }
      );
      setBookings(response.data);
    } catch (error) {
      setToast({
        type: 'error',
        message: 'Failed to fetch bookings'
      });
    } finally {
      setIsLoading(false);
    }
  }, [currentDate, businessId]);

  useEffect(() => {
    if (selectedDate) {
      setAvailableSlots([]); // Reset slots when date changes
    }
    fetchMonthBookings();
  }, [fetchMonthBookings, selectedDate]);

  const getDaysInMonth = () => {
    return eachDayOfInterval({
      start: startOfMonth(currentDate),
      end: endOfMonth(currentDate)
    });
  };

  const handleDateClick = (date) => {
    if (isSameMonth(date, currentDate)) {
      handleDateSelect(date);
    }
  };

  const handleDateSelect = async (date) => {
    try {
      const response = await axiosInstance.get(`/bookings/available-slots`, {
        params: { date: format(date, 'yyyy-MM-dd') }
      });
      setAvailableSlots(response.data);
      setSelectedDate(date);
    } catch (error) {
      console.error('Failed to fetch available slots:', error);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between mb-4">
        <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
          <FaChevronLeft />
        </button>
        <span>{format(currentDate, 'MMMM yyyy')}</span>
        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
          <FaChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {/* Calendar header */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold p-2">
            {day}
          </div>
        ))}
        
        {/* Calendar days */}
        {getDaysInMonth().map(date => (
          <div
            key={date.toString()}
            onClick={() => handleDateClick(date)}
            className={`
              p-2 text-center cursor-pointer rounded-lg
              ${isToday(date) ? 'bg-primary text-white' : ''}
              ${selectedDate && format(date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
                ? 'bg-secondary text-white'
                : ''}
              ${!isSameMonth(date, currentDate) ? 'text-gray-300' : ''}
              hover:bg-gray-100
            `}
          >
            <span>{format(date, 'd')}</span>
            {/* Booking indicators */}
            {bookings.some(booking => 
              format(new Date(booking.date), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
            ) && (
              <div className="w-1 h-1 bg-primary rounded-full mx-auto mt-1"></div>
            )}
          </div>
        ))}
      </div>

      {availableSlots.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Available Slots</h3>
          <div className="grid grid-cols-3 gap-2">
            {availableSlots.map((slot, index) => (
              <button
                key={index}
                className="p-2 text-sm bg-gray-100 rounded hover:bg-primary hover:text-white"
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default BookingCalendar;
