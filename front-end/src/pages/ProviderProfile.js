import React from "react";
import { Grid } from '@material-ui/core';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#0099D7',
}));

const mystyle = {
  minHeight: '100vh'
};

function Profile() {
  return (
    <Grid container  spacing={2} style={mystyle}>
      <Grid item xs={2} >
        <Item style={mystyle}>
          <div>Bayer Health</div>
        </Item>
      </Grid>
      <Grid item xs={10}>
      Welcome, Profile Name
      </Grid>
  </Grid>
  );
}
export default Profile;