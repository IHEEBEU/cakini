const express = require('express');
const userController = require('../Controllers/userControllers'); 

const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.get('/users/username/:username', userController.getUserByUsername);
router.get('/users/:userId/reviews', userController.getUserReviews);
router.post('/login', userController.loginUser);
module.exports = router;
