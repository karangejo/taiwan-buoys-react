import React from 'react';
import { Area, Line, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const { styles } = require('./../style');



// must set props data and place
function BuoyWaveGraph(props) {

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
                Direction: {currentData.WaveDir}
              </p>
              <p className="label" style={styles.fontLightGreen}>
                Swell: {currentData.WaveHeight} m
              </p>
              <p className="label" style={styles.fontLightGreen}>
                Period: {currentData.WavePeriod} s
              </p>
              <p className="label" style={styles.fontLightGreen}>
                Tide: {currentData.Tide} m
              </p>
              <p className="intro" style={styles.fontLightGreen}>
                {moment(currentData.DateTime).format('MM/DD (ddd) HH:mm')}
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

         <XAxis  dataKey="DateTime"
            tickFormatter = {(datetime) => moment(datetime).format('ddd')}
         />

         <YAxis dataKey="WaveHeight"
            yAxisId='wh'
            unit="m"
         />
         <YAxis dataKey="WavePeriod"
            yAxisId='wp'
            unit="s"
         />
         <Tooltip content={waveTooltip}/>
         <Legend />
         <Line yAxisId="wp" dot={false} type="monotone" dataKey="WavePeriod" stroke="#f39422"/>
         <Area yAxisId="wh" type="monotone" dataKey="WaveHeight" stroke="#f39422" fillOpacity={1} fill="url(#colorUv)"/>
      </ComposedChart>
    )
}

export default BuoyWaveGraph;
