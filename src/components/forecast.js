import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import moment from 'moment';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ForecastWaveGraph from './forecastWaveGraph';
import ForecastWindGraph from './forecastWindGraph';



function Forecast(props) {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);


  useEffect(() => {
      axios.get('http://localhost:3001/'+props.place+'Forecast')
            .then((response) => {
              console.log(response.data);
              setData(response.data);
              setShow(true);
            })
            .catch((error) => {
              console.log(error);
            });
        }, [show, props.place]);


    const waveTooltip = ({active, payload, label}) => {
        if(active){
          const currentData = payload[0].payload
          return(
            <div className="custom-tooltip">
            <Paper>
              <Grid container direction='column' justify='center' alignItems='center'>
              <Box p={3}>
              <p className="label">
                {currentData.swellDirection} degrees
              </p>
              <p className="label">
                {currentData.swellHeight} m
              </p>
              <p className="label">
                {currentData.swellPeriod} s
              </p>
              <p className="intro">
                {currentData.time}
              </p>
              </Box>
              </Grid>
            </Paper>
            </div>
          )
        }
    }

    const waveGraph = () => {
      return(
        <LineChart width={600} height={400} data={data}>

           <CartesianGrid stroke="#ccc" />

           <XAxis  dataKey="time"
           tickFormatter = {(datetime) => moment(datetime).format('DD:HH')}
           />

           <YAxis dataKey="swellHeight"
              yAxisId='h'
              unit="m"
           />
           <YAxis dataKey="swellPeriod"
              yAxisId='p'
              unit="s"
           />

           <Tooltip content={waveTooltip}/>
           <Legend/>
           <Line  yAxisId="h" type="monotone" dataKey="swellHeight" stroke="#8884d8"/>
           <Line  yAxisId="p" type="monotone" dataKey="swellPeriod" stroke="#8884d8"/>
        </LineChart>
      )}


    const windTooltip = ({active, payload, label}) => {
        if(active){
          const currentData = payload[0].payload
          return(
            <div className="custom-tooltip">
            <Paper>
            <Grid container direction='column' justify='center' alignItems='center'>
            <Box p={3}>
              <p className="label">
                {currentData.windDirection} degrees
              </p>
              <p className="label">
                {currentData.windSpeed} m/s
              </p>
              <p className="intro">
                {currentData.time}
              </p>
              </Box>
              </Grid>
            </Paper>
            </div>
          )
        }
    }

    const windGraph = () => {

      return(
        <LineChart width={600} height={400} data={data}>

           <CartesianGrid stroke="#ccc" />
           <XAxis  dataKey="time"
              tickFormatter = {(datetime) => moment(datetime).format('DD:HH')}
           />
           <YAxis dataKey="windSpeed"
              yAxisId='ws'
              unit="m/s"
           />

           <Tooltip content={windTooltip}/>
           <Legend/>
           <Line yAxisId="ws" type="monotone" dataKey="windSpeed" stroke="#8884d8"/>
        </LineChart>
      )
    }

    const showAreaCharts = () => {
      return(
        <div>
        <ForecastWaveGraph place={props.place} data={data}/>
        <ForecastWindGraph place={props.place} data={data}/>
        </div>
      );
    }

    return (
      <div>
        {show  && waveGraph()}
        {show  && windGraph()}
        {show && showAreaCharts()}
      </div>
    )
}

export default Forecast;
