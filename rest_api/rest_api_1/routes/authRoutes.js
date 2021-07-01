const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/generateToken', authController.generateToken);
router.get('/authenticateToken', authController.authenticateToken);

module.exports = router;