// /src/models/Appointment.js
const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  patientId: {
    type: String,  // or ObjectId if you store patient info in a separate collection
    required: true
  },
  doctorName: {
    type: String,
    required: true
  },
  doctorId: {
    type: String,  
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  }
}, { timestamps: true });

const Appointment = mongoose.model('Appointment', AppointmentSchema);

module.exports = Appointment;
