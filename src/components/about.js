import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Navbar from './navbar';

function About() {
    return (
      <div>
      <Navbar/>
      <Grid container direction='column' justify='center' alignItems='center'>
        <h1>
          About
        </h1>
        <Paper >
        <Grid container direction='column' justify='center' alignItems='center'>
          <Box p={3}>
          <p>
            Taiwan buoys is commited to bringing you the best and latest data sources and forecasts.
          </p>
          <p>
            Surfers, windsurfers, kitesurfers and really anyone that goes out in the ocean can benefit from this data.
          </p>
          <p>
            Taiwan buoys is a one man team please show your support.
          </p>
          <p>
            Taiwan buoys was written with react, nodejs, R and material-ui.
          </p>
          <p>
            Big thanks to the open source communities that developed these tools.
          </p>
          <p>
            All the code for this site can be found on GitHub.
          </p>
          </Box>
          </Grid>
          </Paper>
      </Grid>
      </div>
    )
}

export default About;
