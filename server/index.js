const express = require('express');
const http = require('http');
const connectDB = require('./config/database');
const initializeSocket = require('./services/socketService');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = initializeSocket(server);

// Middleware
app.use(express.json());
app.use(require('./routes'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes - Fix the route prefix
app.use('/api/businesses', businessRoutes); // Update this line

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

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
