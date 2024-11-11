
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);
