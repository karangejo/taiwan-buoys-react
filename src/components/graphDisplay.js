import React from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { Paper } from '@material-ui/core';




function Graphs(props) {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);


    useEffect(() => {
                      axios.get('http://localhost:3001/'+props.place)
                            .then((response) => {
                              console.log(response.data);
                              setData(response.data);
                              setShow(true);
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                      }, []);

    const waveTooltip = ({active, payload, label}) => {
        if(active){
          const currentData = payload[0].payload
          return(
            <div className="custom-tooltip">
            <Paper>
              <p className="label">
                {currentData.WaveDir}
              </p>
              <p className="label">
                {currentData.Tide}
              </p>
              <p className="label">
                {currentData.WaveHeight}
              </p>
              <p className="label">
                {currentData.WavePeriod}
              </p>
              <p className="label">
                {currentData.Tide}
              </p>
              <p className="intro">
                {currentData.DateTime}
              </p>
            </Paper>
            </div>
          )
        }
    }

    const showWave = () => {

      return(
        <LineChart width={600} height={400} data={data}>

           <CartesianGrid stroke="#ccc" />

           <XAxis  dataKey="DateTime"
              tickFormatter = {(datetime) => moment(datetime).format('DD:HH')}
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
           <Legend/>
           <Line yAxisId="wh" type="monotone" dataKey="WaveHeight" stroke="#8884d8"/>
           <Line yAxisId="wp" type="monotone" dataKey="WavePeriod" stroke="#777777"/>
        </LineChart>
      )
    }

    const windTooltip = ({active, payload, label}) => {
        if(active){
          const currentData = payload[0].payload
          return(
            <div className="custom-tooltip">
            <Paper>
              <p className="label">
                {currentData.WindDir}
              </p>
              <p className="label">
                {currentData.WindSpeed}
              </p>
              <p className="intro">
                {currentData.DateTime}
              </p>
            </Paper>
            </div>
          )
        }
    }

    const showWind = () => {

      return(
        <LineChart width={600} height={400} data={data}>

           <CartesianGrid stroke="#ccc" />
           <XAxis  dataKey="DateTime"
              tickFormatter = {(datetime) => moment(datetime).format('DD:HH')}
           />
           <YAxis dataKey="WindSpeed"
              yAxisId='ws'
              unit="m/s"
           />

           <Tooltip content={windTooltip}/>
           <Legend/>
           <Line yAxisId="ws" type="monotone" dataKey="WindSpeed" stroke="#8884d8"/>
        </LineChart>
      )
    }

    return (
      <div>
            {show && showWave()}
            {show && showWind()}
      </div>
    )
}

export default Graphs;
