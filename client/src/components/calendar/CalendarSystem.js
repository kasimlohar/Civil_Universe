import React, { useState, useEffect } from 'react';
import { format, startOfWeek, addDays, isToday, isSameDay } from 'date-fns';
import axiosInstance from '../../utils/axiosInstance';

const CalendarSystem = ({ businessId }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const weekDays = [...Array(7)].map((_, i) => {
    const day = addDays(startOfWeek(currentDate), i);
    return {
      date: day,
      isToday: isToday(day),
      events: events.filter(event => isSameDay(new Date(event.date), day))
    };
  });

  // Calendar logic and JSX
  // ...existing code...
};

export default CalendarSystem;
