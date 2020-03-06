import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function GetData(props) {

    const [buoyData, setBuoyData] = useState([]);
    const [forecastData, setForecastData] = useState([]);
    const [tidetData, setTideData] = useState([]);



    useEffect(() => {

                      axios.get('http://localhost:3001/buoy/'+props.place)
                            .then((response) => {
                              console.log(response.data);
                              setBuoyData(response.data[0].data.reverse());
                              props.setBuoyData(response.data[0].data.reverse());
                            })
                            .catch((error) => {
                              console.log(error);
                            });

                      axios.get('http://localhost:3001/forecast/'+props.place)
                            .then((response) => {
                              console.log(response.data);
                              setForecastData(response.data[0].data);
                              props.setForecastData(response.data[0].data);

                            })
                            .catch((error) => {
                              console.log(error);
                            });

                     axios.get('http://localhost:3001/tide/'+props.place)
                           .then((response) => {
                             console.log(response.data[0].data);
                             setTideData(response.data[0].data);
                             props.setTideData(response.data[0].data);
                           })
                           .catch((error) => {
                             console.log(error);
                           });


                      }, [props.place,props.setTideData, props.setForecastData, props.setBuoyData]);



    return (
      <div>
      </div>
    )
}

export default GetData;
