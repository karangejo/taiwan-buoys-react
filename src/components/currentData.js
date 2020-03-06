import React from 'react';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {toKnots} from './../utils/utils';
import moon from './../utils/moonPhases';

import nm from './../utils/lunarPhasesImages/new-moon.png'
import fm from './../utils/lunarPhasesImages/full-moon.png'
import fqm from './../utils/lunarPhasesImages/first-quarter-moon.png'
import lqm from './../utils/lunarPhasesImages/last-quarter-moon.png'
import wncm from './../utils/lunarPhasesImages/waning-crescent-moon.png'
import wxcm from './../utils/lunarPhasesImages/waxing-crescent-moon.png'
import wngm from './../utils/lunarPhasesImages/waning-gibbous-moon.png'
import wxgm from './../utils/lunarPhasesImages/waxing-gibbous-moon.png'

const { styles } = require('./../style');

const phasesObj = {
                    newMoon: nm,
                    fullMoon: fm,
                    firstQuarterMoon: fqm,
                    lastQuarterMoon: lqm,
                    waningCrescentMoon: wncm,
                    waxingCrescentMoon: wxcm,
                    waningGibbousMoon: wngm,
                    waxingGibbousMoon: wxgm
                  }


function CurrentData(props) {
  const getMoonPhase = () => {
    const today = new Date();
    const phase = moon.phase(today.getFullYear(), today.getMonth()+1, today.getDate());
    return(phase.name);
  };

    const dataView = () => {
        if(!props.data){
          return(
              <div>
              </div>
          );
        } else {
          console.log(moon);
          return(
            <Grid>
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
                      Moon Phase: {getMoonPhase()} <br/>
                      <img alt="current moon phase" src={phasesObj[getMoonPhase()]} style={{marginLeft: "auto", marginRight: "auto", display: "block", width: "15%"}} />
                    </p>
              </Grid>
            </Paper>
            </Grid>

          )
        }
    }

    return (
      dataView()
    )
}

export default CurrentData;
