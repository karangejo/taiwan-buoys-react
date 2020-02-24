import React from 'react';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';





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
            <Paper>
                <Grid container direction='column' justify='center' alignItems='center'>
                    <h4>
                      Current Buoy Readings
                    </h4>
                    <p>
                      Date Time: {props.data.DateTime} <br/>
                      Wave Height: {props.data.WaveHeight} m <br/>
                      Wave period: {props.data.WavePeriod} s <br/>
                      Wave Direction: {props.data.WaveDir} <br/>
                      Wind Speed: {props.data.WindSpeed} m/s <br/>
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
