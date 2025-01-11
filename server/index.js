const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const businessesRoutes = require('./routes/businesses');
const usersRoutes = require('./routes/users');

// Load environment variables
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/businesses', businessesRoutes);
app.use('/api/users', usersRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Civil Universe API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
