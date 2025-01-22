const Review = require('../models/Review');
const Business = require('../models/Business');

exports.createReview = async (req, res) => {
  try {
    const review = new Review({
      ...req.body,
      userId: req.user.id
    });
    await review.save();

    // Update business rating
    await Business.findByIdAndUpdate(req.body.businessId, {
      $inc: { reviews: 1 }
    });

    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ...more controller methods...
