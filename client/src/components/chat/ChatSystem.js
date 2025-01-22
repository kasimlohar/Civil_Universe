import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import axiosInstance from '../../utils/axiosInstance';

const ChatSystem = () => {
  const socket = useRef();
  const [messages, setMessages] = useState([]);
  const [conversations, setConversations] = useState([]);
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    socket.current = io(process.env.REACT_APP_SOCKET_URL);
    socket.current.emit('join', user.id);

    return () => {
      socket.current.disconnect();
    };
  }, [user.id]);

  // Chat implementation
  // ...existing code...
};

export default ChatSystem;
