const Appointment = require('../models/Appointment');

// Create a new appointment
exports.createAppointment = (req, res) => {
  const { patientName, doctorName, appointmentDate } = req.body;

  const newAppointment = new Appointment({
    patientName,
    doctorName,
    appointmentDate
  });

  newAppointment
    .save()
    .then(appointment => {
      res.status(201).json({ message: 'Appointment created successfully', appointment });
    })
    .catch(err => {
      res.status(500).json({ message: 'Error creating appointment', error: err });
    });
};

// Get the most recent appointment with a specific doctor and date filter
exports.getRecentAppointments = (req, res) => {
  const { doctorName, date } = req.query; 

  const filter = { doctorName };
  if (date) filter.appointmentDate = { $gte: new Date(date) }; 

  Appointment.find(filter)
    .sort({ appointmentDate: -1 })  
    .limit(1)  
    .then(appointment => {
      res.status(200).json(appointment);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error fetching recent appointments', error: err });
    });
};

// Get all upcoming appointments (appointments after the current date)
exports.getUpcomingAppointments = (req, res) => {
  const currentDate = new Date();

  Appointment.find({ appointmentDate: { $gte: currentDate } })
    .sort({ appointmentDate: 1 })  // Sort by date, earliest first
    .then(appointments => {
      res.status(200).json(appointments);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error fetching upcoming appointments', error: err });
    });
};

// Get all appointments for a specific patient by patient ID
exports.getAppointmentsByPatient = (req, res) => {
  const patientId = req.params.patientId;

  Appointment.find({ patientId })
    .then(appointments => {
      res.status(200).json(appointments);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error fetching appointments for the patient', error: err });
    });
};
