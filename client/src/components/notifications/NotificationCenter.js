import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaBell } from 'react-icons/fa';
import { clearNotifications } from '../../slices/uiSlice';

const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notifications = useSelector(state => state.ui.notifications);
  const dispatch = useDispatch();

  // Component logic
  // ...existing code...
};

export default NotificationCenter;
