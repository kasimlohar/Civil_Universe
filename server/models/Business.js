const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  location: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  imageUrl: String,
  featured: {
    type: Boolean,
    default: false
  },
  categories: [String],
  services: [String],
  reviews: {
    type: Number,
    default: 0
  },
  completedProjects: {
    type: Number,
    default: 0
  },
  establishedYear: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Business', businessSchema);
