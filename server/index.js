const express = require('express');
const http = require('http');
const mongoose = require('mongoose'); // Add this line
const cors = require("cors");
const connectDB = require('./config/database');
const initializeSocket = require('./services/socketService');
const businessRoutes = require('./routes/businessRoutes'); // Add this line
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = initializeSocket(server);

// Middleware - CORS must come first
app.use(cors({
  origin: ["http://localhost:5000", "https://*.replit.dev"],   // allow React dev server from port 5000 and Replit domain
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Connect to MongoDB (conditionally)
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection error:', err));
} else {
  console.log('MongoDB connection skipped - MONGO_URI not provided. Database features will not work.');
}

// Routes
app.use('/api/businesses', businessRoutes);
app.use('/api/auth', require('./routes/users'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api', require('./routes')); // Now businessRoutes is defined

// Add a test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// Debug middleware to log all requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to the Civil Universe API');
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Something went wrong!' });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, 'localhost', () => console.log(`Server running on port ${PORT}`));
