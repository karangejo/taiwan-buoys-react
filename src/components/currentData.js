import React from 'react';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {toKnots} from './../utils/utils';
import moon from './../utils/moonPhases';

const { styles } = require('./../style');

function CurrentData(props) {

    const getMoonPhase = () => {
      const today = new Date();
      const phase = moon.phase(today.getFullYear(), today.getMonth()+1, today.getDate());
      return(phase.name);
    }

    const dataView = () => {
        if(!props.data){
          return(
              <div>
              </div>
          );
        } else {
          console.log(moon);
          return(
            <Paper style={styles.currentDataStyle}>
                <Grid container direction='column' justify='center' alignItems='center'>
                    <h3 style={styles.fontLightGreen}>
                      Current Buoy Readings
                    </h3>
                    <p style={styles.fontLightGreen}>
                      Date Time: {props.data.DateTime} <br/>
                      Wave Height: {props.data.WaveHeight} m <br/>
                      Wave Period: {props.data.WavePeriod} s <br/>
                      Wave Direction: {props.data.WaveDir} <br/>
                      Wind Speed: {props.data.WindSpeed} m/s {toKnots(props.data.WindSpeed)} kts<br/>
                      Wind Direction: {props.data.WindDirection} <br/>
                      Tide: {props.data.Tide} m <br/>
                      Moon Phase: {getMoonPhase()}<br/>
                    </p>
              </Grid>
            </Paper>

          )
        }
    }

    return (
      dataView()
    )
}

export default CurrentData;
