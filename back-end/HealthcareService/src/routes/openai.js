const express = require('express');
const router = express.Router();
const { getHealthTip } = require('../service/openai');

// Define the endpoint to fetch the health tip of the day
router.get('/health-tip', async (req, res) => {
  try {
    const healthTip = await getHealthTip();
    res.status(200).json({ healthTip });
  } catch (error) {
    res.status(500).json({ message: "Error fetching health tip", error: error.message });
  }
});

module.exports = router;
