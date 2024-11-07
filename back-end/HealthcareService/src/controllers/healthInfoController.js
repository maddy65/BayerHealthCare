const HealthInfo = require('../models/HealthInfo');

exports.getLatestHealthInfo = (req, res) => {
  HealthInfo.find()
    .sort({ createdAt: -1 }) 
    .limit(5)  
    .then(latestHealthInfo => {
      res.status(200).json(latestHealthInfo);
    })
    .catch(error => {
      res.status(500).json({ message: 'Error fetching latest health info', error });
    });
};
