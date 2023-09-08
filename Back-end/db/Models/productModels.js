const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  text: String,
  rating: Number,
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  price: String,
  quantityAvailable: String,

  category : String , 

  reviews: [reviewSchema],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
