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

// Get business by ID
exports.getBusinessById = async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.json(business);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching business' });
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
    res.status(500).json({ message: error.message });
  }
};

