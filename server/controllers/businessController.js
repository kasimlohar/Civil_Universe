const Business = require('../models/Business');

// Mock data for when database is not connected
const mockBusinesses = [
  {
    _id: '1',
    name: 'ABC Construction',
    description: 'Professional construction services with 20+ years of experience',
    location: 'New York, NY',
    rating: 4.5,
    contact: '(555) 123-4567',
    categories: ['Construction', 'Commercial'],
    website: 'https://abc-construction.com',
    imageUrl: '/images/business1.jpg',
    services: ['Building Construction', 'Renovation', 'Project Management'],
    featured: true
  },
  {
    _id: '2',
    name: 'Precision Architects',
    description: 'Award-winning architectural design firm specializing in modern buildings',
    location: 'Los Angeles, CA',
    rating: 4.8,
    contact: '(555) 987-6543',
    categories: ['Architecture', 'Design'],
    website: 'https://precision-architects.com',
    imageUrl: '/images/business2.jpg',
    services: ['Architectural Design', 'Interior Design', 'Planning'],
    featured: true
  },
  {
    _id: '3',
    name: 'Steel Works Fabrication',
    description: 'Custom steel fabrication for construction and industrial projects',
    location: 'Chicago, IL',
    rating: 4.3,
    contact: '(555) 456-7890',
    categories: ['Fabrication', 'Steel Work'],
    website: 'https://steelworks-fab.com',
    imageUrl: '/images/business3.jpg',
    services: ['Steel Fabrication', 'Welding', 'Custom Metalwork'],
    featured: false
  }
];

// Get all businesses
exports.getAllBusinesses = async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      return res.json(mockBusinesses);
    }
    
    const businesses = await Business.find();
    res.json(businesses);
  } catch (error) {
    // Fallback to mock data if database error
    console.log('Database error, using mock data:', error.message);
    res.json(mockBusinesses);
  }
};

// Get featured businesses
exports.getFeaturedBusinesses = async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      const featured = mockBusinesses.filter(business => business.featured);
      return res.json(featured);
    }
    
    const featuredBusinesses = await Business.find({ rating: { $gte: 4.0 } });
    res.json(featuredBusinesses);
  } catch (error) {
    // Fallback to mock data if database error
    console.log('Database error, using mock data:', error.message);
    const featured = mockBusinesses.filter(business => business.featured);
    res.json(featured);
  }
};

// Get business by ID
exports.getBusinessById = async (req, res) => {
  try {
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      const business = mockBusinesses.find(b => b._id === req.params.id);
      if (!business) {
        return res.status(404).json({ message: 'Business not found' });
      }
      return res.json(business);
    }
    
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.json(business);
  } catch (error) {
    // Fallback to mock data
    console.log('Database error, using mock data:', error.message);
    const business = mockBusinesses.find(b => b._id === req.params.id);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.json(business);
  }
};

// Create a new business
exports.createBusiness = async (req, res) => {
  try {
    const newBusiness = new Business(req.body);
    await newBusiness.save();
    res.status(201).json(newBusiness);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a business
exports.updateBusiness = async (req, res) => {
  try {
    const business = await Business.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    
    res.json(business);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a business
exports.deleteBusiness = async (req, res) => {
  try {
    const business = await Business.findByIdAndDelete(req.params.id);
    
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    
    res.json({ message: 'Business deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBusinesses = async (req, res) => {
  try {
    const { type, category, location, featured } = req.query;
    
    // Check if MongoDB is connected
    if (!process.env.MONGO_URI) {
      let filteredBusinesses = [...mockBusinesses];
      
      // Apply filters to mock data
      if (type && type !== 'all') {
        filteredBusinesses = filteredBusinesses.filter(business => 
          business.categories.some(cat => cat.toLowerCase().includes(type.toLowerCase()))
        );
      }
      if (category) {
        filteredBusinesses = filteredBusinesses.filter(business => 
          business.categories.some(cat => cat.toLowerCase().includes(category.toLowerCase()))
        );
      }
      if (location) {
        filteredBusinesses = filteredBusinesses.filter(business => 
          business.location.toLowerCase().includes(location.toLowerCase())
        );
      }
      if (featured) {
        filteredBusinesses = filteredBusinesses.filter(business => 
          business.featured === (featured === 'true')
        );
      }
      
      return res.json(filteredBusinesses);
    }

    const query = {};

    // If ?type=all → return everything
    if (type === 'all') {
      const businesses = await Business.find();
      return res.json(businesses);
    }

    // If ?type=someCategory → filter by category
    if (type) query.categories = type;

    // Optional filters
    if (category) query.categories = category;
    if (location) query.location = new RegExp(location, 'i');
    if (featured) query.featured = featured === 'true';

    const businesses = await Business.find(query);
    res.json(businesses);
  } catch (error) {
    // Fallback to mock data
    console.log('Database error, using mock data:', error.message);
    res.json(mockBusinesses);
  }
};

