import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import axiosInstance from '../../utils/axiosInstance';

const EnhancedChatSystem = ({ receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef();
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    socketRef.current = io(process.env.REACT_APP_SOCKET_URL);
    
    socketRef.current.on('connect', () => setIsConnected(true));
    socketRef.current.on('message', handleNewMessage);
    socketRef.current.on('disconnect', () => setIsConnected(false));

    return () => socketRef.current.disconnect();
  }, []);

  // Rest of chat implementation
  // ...existing code...
};

export default EnhancedChatSystem;
