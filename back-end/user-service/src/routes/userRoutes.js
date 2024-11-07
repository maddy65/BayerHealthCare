const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/register', userController.registerUser);
router.get('/recent-patient', userController.getRecentPatient);
router.get('/:userId', userController.getUserDetails);

module.exports = router;
