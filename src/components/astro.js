import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const { styles } = require('./../style');

function Tide(props) {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);


  useEffect(() => {
      axios.get('http://localhost:3001/astro/'+props.place)
            .then((response) => {
              console.log(response.data)
              setData(response.data[0].data[0].days);
              setShow(true);
            })
            .catch((error) => {
              console.log(error);
            });
        }, [show, props.place]);


    const showAreaCharts = () => {
      return(
        <div>
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
