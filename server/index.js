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
  origin: [
    "http://localhost:5000", 
    "https://*.replit.dev",
    /\.replit\.dev$/,  // Allow all replit.dev subdomains
    function(origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      
      // Allow replit.dev domains
      if (origin.includes('replit.dev')) {
        return callback(null, true);
      }
      
      callback(new Error('Not allowed by CORS'));
    }
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Debug middleware to log all requests (placed before routes)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

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

// Add a seed endpoint to populate database
app.post('/api/seed', async (req, res) => {
  try {
    if (!process.env.MONGO_URI) {
      return res.status(400).json({ message: 'Database not configured' });
    }

    const Business = require('./models/Business');
    
    const sampleBusinesses = [
      {
        name: "Premier Construction Co.",
        description: "Leading construction company specializing in residential and commercial projects.",
        rating: 4.8,
        location: "Mumbai, Maharashtra",
        contact: "+91 98765 43210",
        imageUrl: "/images/businesses/construction-1.jpg",
        featured: true,
        categories: ["Construction", "Project Management"],
        services: ["Building Construction", "Renovation"],
        reviews: 128,
        completedProjects: 234,
        establishedYear: 2002
      },
      {
        name: "Modern Architects & Associates",
        description: "Award-winning architectural firm delivering innovative design solutions.",
        rating: 4.9,
        location: "Bangalore, Karnataka",
        contact: "+91 98765 43211",
        imageUrl: "/images/businesses/architect-1.jpg",
        featured: true,
        categories: ["Architecture", "Interior Design"],
        services: ["Architectural Design", "3D Visualization"],
        reviews: 96,
        completedProjects: 156,
        establishedYear: 2010
      },
      {
        name: "Elite Fabricators",
        description: "Specialized in custom metal fabrication and structural steel work.",
        rating: 4.7,
        location: "Delhi NCR",
        contact: "+91 98765 43212",
        imageUrl: "/images/businesses/fabrication-1.jpg",
        featured: true,
        categories: ["Fabrication", "Steel Work"],
        services: ["Metal Fabrication", "Welding"],
        reviews: 84,
        completedProjects: 312,
        establishedYear: 2008
      },
      {
        name: "Skyline Engineers",
        description: "Structural engineering consultancy with expertise in high-rise buildings.",
        rating: 4.6,
        location: "Chennai, Tamil Nadu",
        contact: "+91 98765 43213",
        imageUrl: "/images/businesses/engineer-1.jpg",
        featured: false,
        categories: ["Engineering", "Consultation"],
        services: ["Structural Design", "Analysis", "Consultation"],
        reviews: 72,
        completedProjects: 189,
        establishedYear: 2015
      },
      {
        name: "Green Building Solutions",
        description: "Sustainable construction and green building certification specialists.",
        rating: 4.5,
        location: "Pune, Maharashtra",
        contact: "+91 98765 43214",
        imageUrl: "/images/businesses/green-1.jpg",
        featured: false,
        categories: ["Green Building", "Sustainability"],
        services: ["LEED Certification", "Sustainable Design", "Energy Audits"],
        reviews: 64,
        completedProjects: 145,
        establishedYear: 2012
      }
    ];

    // Clear existing businesses and add sample data
    await Business.deleteMany({});
    const result = await Business.insertMany(sampleBusinesses);
    
    res.json({ 
      message: 'Database seeded successfully', 
      count: result.length,
      businesses: result 
    });
  } catch (error) {
    console.error('Seed error:', error);
    res.status(500).json({ message: 'Failed to seed database', error: error.message });
  }
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
