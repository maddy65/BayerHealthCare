const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/healthcare_db';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));

module.exports = mongoose;
