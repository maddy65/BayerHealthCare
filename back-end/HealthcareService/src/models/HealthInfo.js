const mongoose = require('mongoose');

const HealthInfoSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true
  },
  shortSummary: {
    type: String,
    required: true
  },
  longSummary: {
    type: String,
    required: true
  }
}, { timestamps: true });  

const HealthInfo = mongoose.model('HealthInfos', HealthInfoSchema);

module.exports = HealthInfo;
