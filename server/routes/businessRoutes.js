const express = require('express');
const router = express.Router();
const { auth, checkRole } = require('../middleware/auth');
const businessController = require('../controllers/businessController');

// Get all businesses (this was missing)
router.get('/', businessController.getBusinesses);

// Get featured businesses
router.get('/featured', businessController.getFeaturedBusinesses);

// Get business by ID
router.get('/:id', businessController.getBusinessById);

// Create a new business
router.post('/', auth, checkRole(['admin', 'business']), businessController.createBusiness);

// Update a business
router.put('/:id', auth, checkRole(['admin', 'business']), businessController.updateBusiness);

// Delete a business
router.delete('/:id', auth, checkRole(['admin']), businessController.deleteBusiness);

module.exports = router;
