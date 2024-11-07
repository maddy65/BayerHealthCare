/*const express = require('express');
const app = express();
const mongoose = require('./src/config/dbConfig'); 
const healthInfoRoutes = require('./src/routes/Healthinfo'); 
const appControler = require

app.use(express.json()); 
app.use('/api/healthInfo', healthInfoRoutes); 


app.get('/', (req, res) => res.send('HealthCare Service is running!'));


const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));*/




const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const healthInfoRoutes = require('./src/routes/healthInfo');  

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/healthcare_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

app.use(bodyParser.json());

// Use the health info routes
app.use('/api/health-info', healthInfoRoutes);

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});
