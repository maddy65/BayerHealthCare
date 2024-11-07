import React, { useState } from "react";
import { Grid, Paper, TextField, Button, Typography, Link } from '@material-ui/core';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const paperStyle={padding :20,height:'55vh',width:280, margin:"20px auto"}
    const headColors={color: '#0099D7'}
    const btnstyle={margin:'8px 0', backgroundColor: '#8BC53F', color: "#fff"}
    const mrSpace={margin: '10px 0'}

function Login() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const handleNameChange = e => {
    setName(e.target.value);
    if (e.target.validity.valid) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

  return (
    <Grid sx={style}>
            <Paper elevation={10} style={paperStyle} className="login-card">
                <Grid align='center' class="logo">
                    <img src="https://www.bayer.com/themes/custom/bayer_cpa/logo.svg" width="80" alt="Bayer Healthcare Logo" />
                    <h1 style={headColors}>Login</h1>
                </Grid>
                <TextField
                  required
                  onChange={handleNameChange}
                  error={nameError}
                  helperText={
                    nameError ? "Please enter Email" : ""
                  }
                  inputProps={{
                    pattern: "[A-Za-z0-9]",
                  }}
                  value={name}
                  style={mrSpace}
                  label='Email'
                  placeholder='Enter username'
                  variant="outlined"
                  fullWidth
                />
                <TextField style={mrSpace} label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required/>
                <Button type='submit' variant="outlined outlinedSuccess" style={btnstyle} fullWidth>Login</Button>
                <Typography >
                     <Link href="#" style={headColors}>Forgot password ?</Link>
                </Typography>
                <Typography > New User?
                     <Link href="#"style={headColors} >Register here</Link>
                </Typography>
            </Paper>
        </Grid>
  );
}
export default Login;