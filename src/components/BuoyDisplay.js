import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CurrentData from './currentData'
import BuoyWaveGraph from './buoyWaveGraph';
import BuoyWindGraph from './buoyWindGraph';

const { styles } = require('./../style');





function Buoys(props) {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);


    useEffect(() => {
                      axios.get('http://localhost:3001/buoy/'+props.place)
                            .then((response) => {
                              console.log(response.data);
                              setData(response.data[0].data.reverse());
                              setShow(true);
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                      }, [show,props.place]);


    const showAreaCharts = () => {
      return(
        <div>
        <h2 align="center" style={styles.fontOrange}>
          Wave
        </h2>
        <BuoyWaveGraph place={props.place} data={data}/>
        <h2 align="center" style={styles.fontOrange}>
          Wind
        </h2>
        <BuoyWindGraph place={props.place} data={data}/>
        </div>
      );
    }

    return (
      <div>
            <CurrentData data={data[data.length - 1]}/>
            {show && showAreaCharts()}
      </div>
    )
}

export default Buoys;
