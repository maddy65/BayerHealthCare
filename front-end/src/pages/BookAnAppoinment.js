import React, {useState} from 'react'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

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

    return (
        <div className="container">
            <h1>Book an Appointment</h1>
            <div className='appointment-content-wrapper'>
                <label for="doctor">Select Doctor</label>
                <div>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
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
                <label for="doctor">Select Date</label>
                <div>
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                            <DatePicker label="name" name="startDate" />
                        </DemoContainer>
                    </LocalizationProvider> */}
                </div>
            </div>
        </div>
    )
}

export default BookAnAppoinment