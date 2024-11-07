import React, {useState} from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@material-ui/core';

const BookAnAppoinment = () => {
    const doctorList = [
        {
            name: 'Dr. Smith - General Practitioner'
        },
        {
            name: 'Dr. Johnson - Cardiologist'
        },
        {
            name: 'Dr. Williams - Pediatrician'
        }
    ]

    const [selectedDoctor, setSelectedDoctor] = useState('');

    const handleChange = (event) => {
        setSelectedDoctor(event.target.value);
    };

    const btnstyle={margin:'8px 0', backgroundColor: '#8BC53F', color: "#fff"}
    const wrapperStyle={display: 'flex', padding: '20px'}
    const divStyle={width: '50%'}
    const contStyle={textAlign: 'center', padding: '20px', color: '#0099d7'}
    const labelColor = { color: '#0099d7'}
    return (
        <div className="container">
            <h1 style={contStyle}>Book an Appointment</h1>
            <div className='appointment-content-wrapper' style={wrapperStyle}>
                <div className='section1' style={divStyle}>
                    <label for="doctor" style={labelColor}>Select Doctor</label>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: '80%' }}>
                            <Select
                                value={selectedDoctor}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                            <MenuItem value="">
                                <em>Choose a doctor</em>
                            </MenuItem>
                            {doctorList.map(item => (
                                <MenuItem value={item.name}>{item.name}</MenuItem>    
                            ))}
                            </Select>
                        </FormControl>
                    </div>
                    <label for="date" style={labelColor}>Select Date</label>
                    <div>

                    </div>
                </div>  
                <div className='section2' style={divStyle}>
                    <label for="time_slots" style={labelColor}>Available Time Slots</label>
                    <div>

                    </div>
                    <label for="reason" style={labelColor}>Reason for Visit</label>
                    <div>

                    </div>
                    <label for="additional_notes" style={labelColor}>Additional Notes (Optional)</label>
                    <div>

                    </div>
                    <Button type='submit' variant="outlined outlinedSuccess" style={btnstyle} fullWidth>Confirm Booking</Button>
                </div>
            </div>
        </div>
    )
}

export default BookAnAppoinment