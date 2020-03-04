import React from 'react';
import { Area, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {degToCompass, toKnots} from './../utils/utils';

const { styles } = require('./../style');


function ForecastWindGraph(props) {
  const [data, setData] = useState([]);
  const [place, setPlace] = useState([]);
  const [show, setShow] = useState(false);


  useEffect(() => {
                    setData(props.data);
                    setPlace(props.place);
                    setShow(true);
                  }, [data,place,show,props.place,props.data]);



    const windTooltip = ({active, payload, label}) => {
        if(active){
          const currentData = payload[0].payload
          return(
            <div className="custom-tooltip">
            <Paper style={styles.graphTooltipBackground}>
              <Grid container direction='column' justify='center' alignItems='center'>
                <Box p={3}>
                  <p className="label" style={styles.fontLightGreen}>
                    Direction: {currentData.windDirection} degrees {degToCompass(currentData.windDirection)}
                  </p>
                  <p className="label" style={styles.fontLightGreen}>
                    Speed: {currentData.windSpeed} m/s {toKnots(currentData.windSpeed)} kts
                  </p>
                  <p className="intro" style={styles.fontLightGreen}>
                    {moment(currentData.time).format('MM/DD (ddd) HH:mm')}
                  </p>
                </Box>
              </Grid>
            </Paper>
            </div>
          )
        }
    }




    return (
      <ComposedChart width={600} height={400} data={data}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
         <stop offset="5%" stopColor="#f39422" stopOpacity={0.9}/>
         <stop offset="95%" stopColor="#f39422" stopOpacity={0}/>
        </linearGradient>
      </defs>
          <CartesianGrid stroke="#ccc" />
          <XAxis  dataKey="time"
             tickFormatter = {(datetime) => moment(datetime).format('ddd')}
          />
          <YAxis dataKey="windSpeed"
             yAxisId='ws'
             unit="m/s"
          />

          <Tooltip content={windTooltip}/>
          <Legend/>
          <Area yAxisId="ws" type="monotone" dataKey="windSpeed" stroke="#f39422" fillOpacity={1} fill="url(#colorUv)"/>
      </ComposedChart>
    )
}

export default ForecastWindGraph;
