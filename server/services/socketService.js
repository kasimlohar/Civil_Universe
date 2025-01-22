const socketIO = require('socket.io');
const jwt = require('jsonwebtoken');

const initializeSocket = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: process.env.CLIENT_URL,
      credentials: true
    }
  });

  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error('Authentication error'));
    // Token verification and user attachment
    // ...existing code...
  });

  io.on('connection', (socket) => {
    console.log('User connected:', socket.userId);
    
    socket.on('join-chat', (chatId) => {
      socket.join(chatId);
    });

    socket.on('message', async (data) => {
      // Message handling logic
      // ...existing code...
    });
  });

  return io;
};

module.exports = initializeSocket;
