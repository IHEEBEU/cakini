const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  image: String,
  phoneNumber: String,
  city: String,
  using : String,
  reviewedProducts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
