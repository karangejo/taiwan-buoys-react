import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CurrentData from './currentData'
import BuoyWaveGraph from './buoyWaveGraph';
import BuoyWindGraph from './buoyWindGraph';






function Buoys(props) {

    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);


    useEffect(() => {
                      axios.get('http://localhost:3001/'+props.place)
                            .then((response) => {
                              console.log(response.data);
                              setData(response.data.reverse());
                              setShow(true);
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                      }, [show,props.place]);


    const showAreaCharts = () => {
      return(
        <div>
        <BuoyWaveGraph place={props.place} data={data}/>
        <BuoyWindGraph place={props.place} data={data}/>
        </div>
      );
    }

    return (
      <div>
            <CurrentData data={data[0]}/>
            {show && showAreaCharts()}
      </div>
    )
}

export default Buoys;
