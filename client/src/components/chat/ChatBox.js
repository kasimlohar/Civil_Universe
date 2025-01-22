import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import LoadingSpinner from '../common/LoadingSpinner';

const ChatBox = ({ receiverId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const messagesEndRef = useRef(null);
  const { user } = useSelector(state => state.auth);
  const [isLoading, setIsLoading] = useState(true);

  // Socket connection and message handling logic
  // ...existing code...

  return (
    <div className="flex flex-col h-[500px] bg-white rounded-lg shadow-lg">
      {/* Chat header */}
      // ...existing code...

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <p>{msg.sender}: {msg.text}</p>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="border-t p-4">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 p-2 border rounded"
            placeholder="Type your message..."
          />
          <button 
            type="submit"
            className="bg-primary text-white px-4 py-2 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBox;
