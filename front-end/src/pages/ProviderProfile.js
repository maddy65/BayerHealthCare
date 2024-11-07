import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#0099D7',
}));

const container = {
  display: 'flex',
  minHeight: '100vh'
};
const sidebar = {
  width: '200px',
  backgroundColor: '#0099D7',
  padding: '20px'
};
function Profile() {
  return (
    <div class="container" style={container}>
      <div class="sidebar" style={sidebar}>
        <h2 style={{color: 'white'}}>Bayer Health</h2>
        <ul style={{ listStyleType: "none", padding: '0'}}>
            <li><a href="#"style={{ fontWeight: 'bold'}} >Dashboard</a></li>
            <li><a href="#">Patient List</a></li>
            <li><a href="#">Appointments</a></li>
            <li><a href="#">Messages</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
      </div>
      <div class="main-content">
            <div class="header">
                <h1>Welcome, Dr. Smith</h1>
            </div>
            <div class="card">
                <h2>Today's Appointments</h2>
                <table>
                    <tbody><tr>
                        <th>Time</th>
                        <th>Patient Name</th>
                        <th>Reason</th>
                    </tr>
                    <tr>
                        <td>9:00 AM</td>
                        <td>John Doe</td>
                        <td>Annual Check-up</td>
                    </tr>
                    <tr>
                        <td>10:30 AM</td>
                        <td>Jane Smith</td>
                        <td>Follow-up</td>
                    </tr>
                </tbody></table>
            </div>
            <div class="card">
                <h2>Recent Patients</h2>
                <table>
                    <tbody><tr>
                        <th>Name</th>
                        <th>Last Visit</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Alice Johnson</td>
                        <td>2023-06-01</td>
                        <td><button class="btn">View Profile</button></td>
                    </tr>
                    <tr>
                        <td>Bob Williams</td>
                        <td>2023-05-28</td>
                        <td><button class="btn">View Profile</button></td>
                    </tr>
                </tbody></table>
            </div>
        </div>
    </div>
  );
}
export default Profile;