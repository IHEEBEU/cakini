const connectDatabase = require('../db/config.js');
const Product = require('./Models/productModels.js');
const User = require('./Models/userModels.js');

(async () => {
  try {
    await connectDatabase();
  
    const newUser = await User.create({
      username: 'john_doe',
      email: 'john@example.com',
      password: 'hashed_password',
      image: 'profile.jpg',
      phoneNumber: '123-456-7890',
      city: 'New York',
    });

    const newProduct = await Product.create({
      name: 'Product Name',
      description: 'This is the product description...',
      price: 29.99,
      image: 'product_image.jpg',
      quantityAvailable: 100,
    });

    const newReview = {
      user: newUser._id,
      text: 'This product is amazing!',
      rating: 5,
    };

    newProduct.reviews.push(newReview);
    await newProduct.save();

    newUser.reviewedProducts.push(newProduct._id);
    await newUser.save();

    console.log('User:', newUser);
    console.log('Product:', newProduct);
  } catch (error) {
    console.error('Error:', error);
  }
})();
