const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('../routes/userRoutes');
const User = require('../models/User'); 

const app = express();
app.use(express.json());
app.use('/api/users', userRouter);

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/test_healthcare', { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.disconnect();
});

// Test case for user registration
describe('User Registration API', () => {
  it('should register a new user successfully', async () => {
    const newUser = {
      name: 'John Doe',
      role: 'patient',
      lastVisitedDate: '2024-10-01',
      email: 'john.doe@example.com',
      bloodGroup: 'O+'
    };

    const response = await request(app)
      .post('/api/users/register')
      .send(newUser)
      .expect(201);

    expect(response.body.message).toBe('User registered successfully');
    expect(response.body.user).toHaveProperty('_id');
    expect(response.body.user.name).toBe(newUser.name);
  });

  it('should return an error if the user already exists', async () => {
    const existingUser = {
      name: 'Jane Doe',
      role: 'doctor',
      lastVisitedDate: '2024-11-01',
      email: 'jane.doe@example.com',
      bloodGroup: 'A+'
    };

    await request(app)
      .post('/api/users/register')
      .send(existingUser)
      .expect(201);

    const response = await request(app)
      .post('/api/users/register')
      .send(existingUser)
      .expect(400);

    expect(response.body.message).toBe('User already exists');
  });
});

// Test case for getting a user by userId
describe('Get User Details API', () => {
  let userId;

  beforeAll(async () => {
    const user = new User({
      name: 'John Smith',
      role: 'patient',
      lastVisitedDate: '2024-10-01',
      email: 'john.smith@example.com',
      bloodGroup: 'B+'
    });
    const savedUser = await user.save();
    userId = savedUser._id;
  });

  it('should fetch user details by userId', async () => {
    const response = await request(app)
      .get(`/api/users/${userId}`)
      .expect(200);

    expect(response.body.name).toBe('John Smith');
    expect(response.body.role).toBe('patient');
    expect(response.body.email).toBe('john.smith@example.com');
    expect(response.body.bloodGroup).toBe('B+');
  });

  it('should return 404 if the user is not found', async () => {
    const invalidUserId = mongoose.Types.ObjectId(); 

    const response = await request(app)
      .get(`/api/users/${invalidUserId}`)
      .expect(404);

    expect(response.body.message).toBe('User not found');
  });
});

// Test case for getting recent patient based on doctor
describe('Get Recent Patient API', () => {
  let doctorId, patientId;

  beforeAll(async () => {
    const doctor = new User({
      name: 'Dr. John',
      role: 'doctor',
      lastVisitedDate: '2024-10-01',
      email: 'dr.john@example.com',
      bloodGroup: 'O+'
    });
    const savedDoctor = await doctor.save();
    doctorId = savedDoctor._id;

    const patient = new User({
      name: 'Patient X',
      role: 'patient',
      lastVisitedDate: '2024-10-02',
      email: 'patient.x@example.com',
      bloodGroup: 'A+'
    });
    const savedPatient = await patient.save();
    patientId = savedPatient._id;
  });

  it('should get the most recent patient for a given doctor', async () => {
    const response = await request(app)
      .get(`/api/users/recent-patient?doctorId=${doctorId}`)
      .expect(200);

    expect(response.body.message).toBe('Recent patient fetched successfully');
    expect(response.body.patient).toHaveProperty('_id');
    expect(response.body.patient.name).toBe('Patient X');
  });

  it('should return an empty response if no recent patient found', async () => {
    const invalidDoctorId = mongoose.Types.ObjectId(); 

    const response = await request(app)
      .get(`/api/users/recent-patient?doctorId=${invalidDoctorId}`)
      .expect(404);

    expect(response.body.message).toBe('No recent patient found for the given doctor');
  });
});
