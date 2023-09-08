const express = require('express');
const productController = require('../Controllers/productControllers'); 

const router = express.Router();


router.post('/products', productController.createProduct); 
router.get('/products', productController.getProducts); 
router.get('/products/:id', productController.getProductById); 
router.put('/products/:id', productController.updateProduct); 
router.delete('/products/:id', productController.deleteProduct); 
router.get('/products/reviews', productController.getProductsByReviews); 
router.get('/products/name/:name', productController.getProductByName); 

router.get('/products/category/:category' , productController.getProductsByCategory)
module.exports = router;
