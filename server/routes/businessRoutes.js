const express = require('express');
const router = express.Router();
const { auth, checkRole } = require('../middleware/auth');
const businessController = require('../controllers/businessController');

router.get('/featured', businessController.getFeaturedBusinesses);
router.get('/:id', businessController.getBusinessById);
router.post('/', auth, checkRole(['admin', 'business']), businessController.createBusiness);
router.put('/:id', auth, checkRole(['admin', 'business']), businessController.updateBusiness);
router.delete('/:id', auth, checkRole(['admin']), businessController.deleteBusiness);

module.exports = router;
