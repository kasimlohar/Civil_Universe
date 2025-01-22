const Business = require('../models/Business');

// Get all businesses
exports.getAllBusinesses = async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching businesses' });
  }
};

// Get featured businesses
exports.getFeaturedBusinesses = async (req, res) => {
  try {
    const featuredBusinesses = await Business.find({ rating: { $gte: 4.0 } });
    res.json(featuredBusinesses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching featured businesses' });
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

exports.getBusinesses = async (req, res) => {
  try {
    const { category, location, featured } = req.query;
    const query = {};
    
    if (category) query.categories = category;
    if (location) query.location = new RegExp(location, 'i');
    if (featured) query.featured = featured === 'true';

    const businesses = await Business.find(query);
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ...more controller methods...
