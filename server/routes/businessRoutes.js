const express = require('express');
const router = express.Router();
const Business = require('../models/Business');

// Get featured businesses - Move this route before the :id route
router.get('/featured', async (req, res) => {
  try {
    const featuredBusinesses = await Business.find({ featured: true });
    console.log('Found featured businesses:', featuredBusinesses); // Debug log
    res.json(featuredBusinesses);
  } catch (error) {
    console.error('Error in featured businesses route:', error);
    res.status(500).json({ message: error.message });
  }
});

// Get all businesses
router.get('/', async (req, res) => {
  try {
    const { type, category, location } = req.query;
    let query = {};

    if (type === 'featured') {
      query.featured = true;
    }
    if (category) {
      query.categories = category;
    }
    if (location) {
      query.location = new RegExp(location, 'i');
    }

    const businesses = await Business.find(query);
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get business by ID
router.get('/:id', async (req, res) => {
  try {
    const business = await Business.findById(req.params.id);
    if (!business) {
      return res.status(404).json({ message: 'Business not found' });
    }
    res.json(business);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
