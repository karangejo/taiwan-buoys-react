import React from 'react';
import { Area, Line, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {degToCompass} from './../utils/utils';


const { styles } = require('./../style');


function ForecastWaveGraph(props) {
  const [data, setData] = useState([]);
  const [place, setPlace] = useState([]);
  const [show, setShow] = useState(false);


  useEffect(() => {
                    setData(props.data);
                    setPlace(props.place);
                    setShow(true);
                  }, [data,place,show,props.place,props.data]);



    const waveTooltip = ({active, payload, label}) => {
        if(active){
          const currentData = payload[0].payload
          return(
            <div className="custom-tooltip">
            <Paper style={styles.graphTooltipBackground}>
              <Grid container direction='column' justify='center' alignItems='center'>
                <Box p={3}>
                  <p className="label" style={styles.fontLightGreen}>
                    Direction: {currentData.swellDirection} degrees {degToCompass(currentData.swellDirection)}
                  </p>
                  <p className="label" style={styles.fontLightGreen}>
                    Swell: {currentData.swellHeight} m
                  </p>
                  <p className="label" style={styles.fontLightGreen}>
                    Period: {currentData.swellPeriod} s
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
      <Grid>
      <ResponsiveContainer width="100%" height={props.graphSize}>
      <ComposedChart width={600} height={props.graphSize} data={data}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
         <stop offset="5%" stopColor="#f39422" stopOpacity={0.9}/>
         <stop offset="95%" stopColor="#f39422" stopOpacity={0}/>
        </linearGradient>
      </defs>
         <CartesianGrid stroke="#ccc" />

         <XAxis  dataKey="time"
         tickFormatter = {(datetime) => moment(datetime).format('ddd')}
         height={15}
         style={styles.fontGraph}
         />

         <YAxis dataKey="swellHeight"
            yAxisId='wh'
            unit="m"
            width={25}
            style={styles.fontGraph}
         />
         <YAxis dataKey="swellPeriod"
            yAxisId='wp'
            orientation="right"
            unit="s"
            width={25}
            style={styles.fontGraph}
         />

         <Tooltip content={waveTooltip}/>
         <Legend/>
         <Line yAxisId="wp" type="monotone" dot={false} dataKey="swellPeriod" strokeWidth={2} stroke="#dc143c"/>
         <Area yAxisId="wh" type="monotone" dataKey="swellHeight" strokeWidth={2} stroke="#f39422" fillOpacity={1} fill="url(#colorUv)"/>
      </ComposedChart>
      </ResponsiveContainer>
      </Grid>
    )
}

export default ForecastWaveGraph;
