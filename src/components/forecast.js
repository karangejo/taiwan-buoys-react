import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CircleLoader from "react-spinners/CircleLoader";
import ForecastWaveGraph from './forecastWaveGraph';
import ForecastWindGraph from './forecastWindGraph';

const { styles } = require('./../style');

function Forecast(props) {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);


  useEffect(() => {
      axios.get('http://localhost:3001/forecast/'+props.place)
            .then((response) => {
              console.log(response.data);
              setData(response.data[0].data);
              setShow(true);
            })
            .catch((error) => {
              console.log(error);
            });
        }, [show, props.place]);


    const showAreaCharts = () => {
      return(
        <div>
        <h2 align="center" style={styles.fontOrange}>
          Wave
        </h2>
        <ForecastWaveGraph place={props.place} data={data}/>
        <h2 align="center" style={styles.fontOrange}>
          Wind
        </h2>
        <ForecastWindGraph place={props.place} data={data}/>
        </div>
      );
    }

    const spinnerOrMain = () => {
      if(!show){
        return(
          <div>
            <CircleLoader
              size={150}
              //size={"150px"} this also works
              color={"#f39422"}
              loading={!show}
            />
          </div>
        );
      } else {
        return(
          <div>
                {show && showAreaCharts()}
          </div>
        )
      }
    }


    return (
      <div>
        {spinnerOrMain()}
      </div>
    )
}

export default Forecast;
