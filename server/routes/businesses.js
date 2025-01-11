const express = require('express');
const router = express.Router();
const businessController = require('../controllers/businessController');
const auth = require('../middleware/auth');

// Get all businesses
router.get('/', businessController.getAllBusinesses);

// Get featured businesses
router.get('/featured', businessController.getFeaturedBusinesses);

// Create a new business (protected route)
router.post('/', auth, businessController.createBusiness);

module.exports = router;
