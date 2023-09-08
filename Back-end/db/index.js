const connectDatabase = require('../db/config.js');
const Product = require('./Models/productModels.js');
const User = require('./Models/userModels.js');

(async () => {
  try {
    await connectDatabase();
  
  } catch (error) {
    console.error('Error:', error);
  }
})();
