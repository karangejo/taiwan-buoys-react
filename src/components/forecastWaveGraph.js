import React from 'react';
import { Area, Line, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


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
            <Paper style={{backgroundColor:'rgba(105, 168, 230, 0.74)'}}>
              <Grid container direction='column' justify='center' alignItems='center'>
                <Box p={3}>
                  <p className="label">
                    Direction: {currentData.swellDirection} degrees
                  </p>
                  <p className="label">
                    Swell: {currentData.swellHeight} m
                  </p>
                  <p className="label">
                    Period: {currentData.swellPeriod} s
                  </p>
                  <p className="intro">
                    {moment(currentData.time).format('MM/DD HH:mm')}
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
             <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
             <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
         <CartesianGrid stroke="#ccc" />

         <XAxis  dataKey="time"
         tickFormatter = {(datetime) => moment(datetime).format('DD:HH')}
         />

         <YAxis dataKey="swellHeight"
            yAxisId='wh'
            unit="m"
         />
         <YAxis dataKey="swellPeriod"
            yAxisId='wp'
            unit="s"
         />

         <Tooltip content={waveTooltip}/>
         <Legend/>
         <Line yAxisId="wp" type="monotone" dataKey="swellPeriod" stroke="#777777"/>
         <Area yAxisId="wh" type="monotone" dataKey="swellHeight" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)"/>
      </ComposedChart>
    )
}

export default ForecastWaveGraph;
