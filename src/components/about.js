import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Navbar from './navbar';
import Compass from './../images/compassDegreesSmall.jpg';

const { styles } = require('./../style');


function About() {
    return (
      <Grid style={styles.background}>
      <Navbar/>
      <Grid direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
        <h1 align="center" style={styles.fontOrange}>
          About
        </h1>
        <Paper style={styles.paper}>
        <Grid container direction='column' justify='center' alignItems='center'>
          <Box p={3}>
          <p style={styles.fontLightGreen}>
            Taiwan buoys is commited to bringing you the best and latest data sources and forecasts.
            Surfers, windsurfers, kitesurfers and really anyone that goes out in the ocean can benefit from this data.
          </p>
          <p style={styles.fontLightGreen}>
            Taiwan buoys is a one man team please show your support.
            Taiwan buoys was written with react, nodejs, R and material-ui.
            Big thanks to the open source communities that developed these tools.
            All the code for this site can be found on GitHub.
          </p>
          </Box>
          </Grid>
          </Paper>

          <h1 align="center" style={styles.fontOrange}>
            FAQ
          </h1>
          <Paper style={styles.paper}>
          <Grid container direction='column' justify='center' alignItems='center'>
            <Box p={3}>
            <p align="center" style={styles.fontLightGreen}>
              Q: What do the degrees mean in the swell direction and wind direction forecast?
            </p>
            <p align="center" style={styles.fontLightGreen}>
              A: The following image show the corresponding direction for each of the degrees. Degrees allow for a finer degree of detail than just direction names.
            </p>

              <img alt="Degrees and Directions Compass" src={Compass} style={{marginLeft: "auto", marginRight: "auto", display: "block", width: "50%"}}/>

            <p align="center" style={styles.fontLightGreen}>
              Q: What is the difference between Buoy Data and Forecast Data?
            </p>
            <p align="center" style={styles.fontLightGreen}>
              A: Buoy Data is past data observed from the past 3 days.
              So it can give you an idea of how it has been recently and can be used as a comparison to the forecast data.
              Forecast Data is data projected into the future. Taiwanbuoys uses NOAA forecast for the forecast data.
            </p>
            </Box>
          </Grid>
          </Paper>

      </Grid>
      <p></p>
      <Navbar/>
      </Grid>
    )
}

export default About;
