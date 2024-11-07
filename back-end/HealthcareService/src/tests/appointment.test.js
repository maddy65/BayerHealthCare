// /test/appointment.test.js
const request = require('supertest');
const app = require('../app');  // Assuming app.js is exported in your main app file
const mongoose = require('mongoose');
const Appointment = require('../src/models/Appointment');

describe('Appointment API', () => {
  before((done) => {
    // Connect to test database before running tests
    mongoose.connect('mongodb://localhost:27017/healthcare_db_test', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => done())
      .catch(err => done(err));
  });

  beforeEach((done) => {
    // Clean up the database before each test
    Appointment.deleteMany({}, () => done());
  });

  after((done) => {
    // Disconnect from the database after all tests are done
    mongoose.connection.close();
    done();
  });

  // Test creating an appointment
  it('should create a new appointment', (done) => {
    const appointment = {
      patientName: 'John Doe',
      patientId: '123',
      doctorName: 'Dr. Smith',
      doctorId: '456',
      appointmentDate: '2024-11-15T10:00:00Z',
    };

    request(app)
      .post('/api/appointments')
      .send(appointment)
      .expect(201)
      .expect((res) => {
        res.body.message.should.equal('Appointment created successfully');
        res.body.appointment.patientName.should.equal(appointment.patientName);
        res.body.appointment.doctorName.should.equal(appointment.doctorName);
      })
      .end(done);
  });

  // Test getting recent appointment
  it('should return the most recent appointment for a doctor', (done) => {
    const appointment1 = new Appointment({
      patientName: 'John Doe',
      patientId: '123',
      doctorName: 'Dr. Smith',
      doctorId: '456',
      appointmentDate: '2024-11-10T10:00:00Z',
    });

    const appointment2 = new Appointment({
      patientName: 'Jane Doe',
      patientId: '124',
      doctorName: 'Dr. Smith',
      doctorId: '456',
      appointmentDate: '2024-11-15T10:00:00Z',
    });

    Promise.all([appointment1.save(), appointment2.save()])
      .then(() => {
        request(app)
          .get('/api/appointments/recent?doctorName=Dr. Smith')
          .expect(200)
          .expect((res) => {
            res.body[0].appointmentDate.should.equal('2024-11-15T10:00:00Z');
            res.body[0].patientName.should.equal('Jane Doe');
          })
          .end(done);
      });
  });

  // Test getting upcoming appointments
  it('should return upcoming appointments', (done) => {
    const appointment = new Appointment({
      patientName: 'John Doe',
      patientId: '123',
      doctorName: 'Dr. Smith',
      doctorId: '456',
      appointmentDate: new Date(Date.now() + 10000),  // set appointment in the future
    });

    appointment.save().then(() => {
      request(app)
        .get('/api/appointments/upcoming')
        .expect(200)
        .expect((res) => {
          res.body.length.should.equal(1);
          res.body[0].patientName.should.equal('John Doe');
        })
        .end(done);
    });
  });

  // Test getting appointments by patient
  it('should return all appointments for a specific patient', (done) => {
    const appointment = new Appointment({
      patientName: 'John Doe',
      patientId: '123',
      doctorName: 'Dr. Smith',
      doctorId: '456',
      appointmentDate: '2024-11-15T10:00:00Z',
    });

    appointment.save().then(() => {
      request(app)
        .get('/api/appointments/by-patient/123')
        .expect(200)
        .expect((res) => {
          res.body.length.should.equal(1);
          res.body[0].patientName.should.equal('John Doe');
        })
        .end(done);
    });
  });

});
