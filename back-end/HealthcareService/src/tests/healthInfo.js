const request = require('supertest');
const app = require('../app');  // Import your Express app
const chai = require('chai');
const expect = chai.expect;

describe('GET /api/healthInfo/latest', () => {
  it('should return the latest health info', async () => {
    const res = await request(app).get('/api/healthInfo/latest');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('heading');
    expect(res.body).to.have.property('shortSummary');
    expect(res.body).to.have.property('longSummary');
  });

  it('should return 404 if no health info found', async () => {
    const res = await request(app).get('/api/healthInfo/latest');
    expect(res.status).to.equal(404);
  });
});
