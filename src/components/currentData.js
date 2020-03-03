import React from 'react';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {toKnots} from './../utils/utils';

const { styles } = require('./../style');

function CurrentData(props) {

    const dataView = () => {
        if(!props.data){
          return(
              <div>
              </div>
          );
        } else {
          //console.log(props);
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
