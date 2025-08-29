const express = require('express');
const router = express.Router();
const { auth, checkRole } = require('../middleware/auth');
const businessController = require('../controllers/businessController');

// Get all businesses with enhanced search, filtering, and pagination
router.get('/', businessController.getBusinesses);

// Get featured businesses
router.get('/featured', businessController.getFeaturedBusinesses);

// Search businesses (dedicated search endpoint)
router.get('/search', businessController.searchBusinesses);

// Get business categories
router.get('/categories', businessController.getCategories);

// Get business statistics
router.get('/stats', businessController.getBusinessStats);

// Get businesses by location
router.get('/location/:location', businessController.getBusinessesByLocation);

// Get business by ID
router.get('/:id', businessController.getBusinessById);

// Create a new business
router.post('/', auth, checkRole(['admin', 'business']), businessController.createBusiness);

// Update a business
router.put('/:id', auth, checkRole(['admin', 'business']), businessController.updateBusiness);

// Delete a business
router.delete('/:id', auth, checkRole(['admin']), businessController.deleteBusiness);

module.exports = router;
