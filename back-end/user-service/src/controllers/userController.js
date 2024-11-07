const User = require('../models/User');

exports.registerUser = async (req, res) => {
  const { name, role, lastVisitedDate, email, bloodGroup } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, role, lastVisitedDate, email, bloodGroup });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

// Get the most recent patient visit for a doctor
exports.getRecentPatient = async (req, res) => {
  const { doctorId, doctorName, date } = req.query;

  if (!doctorId && !doctorName) {
    return res.status(400).json({ message: 'Doctor ID or Name is required' });
  }

  try {
    let filter = {};
    if (doctorId) {
      filter = { ...filter, role: 'patient', doctor: doctorId };
    }
    if (doctorName) {
      filter = { ...filter, role: 'patient', doctorName: doctorName };
    }

    if (date) {
      filter = { ...filter, lastVisitedDate: { $gte: new Date(date) } };  
    }

    const recentPatient = await User.find(filter).sort({ lastVisitedDate: -1 }).limit(1); 

    if (!recentPatient.length) {
      return res.status(404).json({ message: 'No recent patient found for the given doctor' });
    }

    res.status(200).json({ patient: recentPatient[0] });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving recent patient', error: error.message });
  }
};

// Get complete details of a user by userId
exports.getUserDetails = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user details', error: error.message });
  }
};
