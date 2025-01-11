const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  contact: { type: String, required: true },
  categories: { type: [String], required: true },
  portfolio: { type: String, required: true },
});

module.exports = mongoose.model('Business', BusinessSchema);
