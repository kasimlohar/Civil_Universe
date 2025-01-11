const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const businessesRoutes = require('./routes/businesses');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/businesses', businessesRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Civil Universe API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
