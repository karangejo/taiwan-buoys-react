import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
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
        {show && showAreaCharts()}
      </div>
    )
}

export default Forecast;
