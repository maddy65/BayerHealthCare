const express = require('express');
const router = express.Router();
const { getLatestHealthInfo } = require('../controllers/healthInfoController');

router.get('/latest', getLatestHealthInfo);

module.exports = router;
