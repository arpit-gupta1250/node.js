const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.registerUser);
router.get('/user/:userId', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.put('/user/:userId/update', userController.updateUser);
router.delete('/user/:userId/delete', userController.deleteUserById);

module.exports = router;