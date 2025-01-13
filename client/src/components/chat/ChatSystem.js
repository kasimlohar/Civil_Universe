import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { useSelector } from 'react-redux';
import axiosInstance from '../../utils/axiosInstance';
import ChatMessage from './ChatMessage';

const ChatSystem = ({ businessId, customerId }) => {
  const socket = useRef();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const { user } = useSelector(state => state.auth);

  useEffect(() => {
    socket.current = io(process.env.REACT_APP_SOCKET_URL);
    socket.current.on('message', handleNewMessage);
    socket.current.emit('join-chat', { businessId, customerId });
    return () => socket.current.disconnect();
  }, [businessId, customerId]);

  const handleNewMessage = (message) => {
    setMessages(prev => [...prev, message]);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    try {
      await axiosInstance.post('/messages', {
        businessId,
        customerId,
        content: newMessage,
        senderId: user.id
      });

      socket.current.emit('send-message', {
        businessId,
        customerId,
        content: newMessage,
        senderId: user.id
      });

      setNewMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-system">
      <div className="messages">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} isSent={message.senderId === user.id} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatSystem;
