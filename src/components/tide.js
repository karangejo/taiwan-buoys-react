import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TideGraph from './tideGraph';

const { styles } = require('./../style');

function Tide(props) {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);


  useEffect(() => {
      axios.get('http://localhost:3001/tide/'+props.place)
            .then((response) => {
              console.log(response.data[0].data[0]);
              setData(response.data[0].data[0].extremes);
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
            Tide
          </h2>
          <TideGraph place={props.place} data={data}/>
        </div>
      );
    }

    return (
      <div>
        {show && showAreaCharts()}
      </div>
    )
}

export default Tide;
