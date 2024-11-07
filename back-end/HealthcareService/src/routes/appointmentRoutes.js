// /src/routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const {
  createAppointment,
  getRecentAppointments,
  getUpcomingAppointments,
  getAppointmentsByPatient
} = require('../controllers/appointmentController');

router.post('/', createAppointment);

// Get recent appointment with a specific doctor
router.get('/recent', getRecentAppointments);

// Get upcoming appointments (after the current date)
router.get('/upcoming', getUpcomingAppointments);

// Get all appointments for a specific patient
router.get('/by-patient/:patientId', getAppointmentsByPatient);

module.exports = router;
