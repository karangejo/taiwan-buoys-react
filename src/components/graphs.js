import React from 'react';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {ResponsiveContainer} from 'recharts';
import { Paper } from '@material-ui/core';
import Navbar from './navbar';
import Buoys from './BuoyDisplay';
import WindyIframe from './windyIframe';
import Forecast from './forecast';
import SelectBuoy from './selectBuoy';
import SelectSurfSpot from './selectSurfSpot';





function GraphsPage() {

  const [place, setPlace] = useState("Taitung");
  const [surfspot, setSurfSpot] = useState("DongHe");

  const handleBuoySelection = (place) => {
    setPlace(place);
  }

  const handleSpotSelection = (spot) => {
    setSurfSpot(spot);
  }

    return (
      <div>
      <Navbar/>
      <ResponsiveContainer width="100%">
      <Grid container direction='column' justify='center' alignItems='center'>
          <h1>
            Graphs
          </h1>
          <Paper style={{padding: "20px 20px 20px 20px"}}>
          <h2 align="center">
            Buoy Data
          </h2>
          <SelectBuoy setPlace={handleBuoySelection}/>
          <h3>
            {place}
          </h3>
          <Buoys place={place}/>
          </Paper>
          <p></p>
          <Paper style={{padding: "20px 20px 20px 20px"}}>
          <h2 align="center">
            Forecast Data
          </h2>
          <SelectSurfSpot setSpot={handleSpotSelection}/>
          <h3>
            {surfspot}
          </h3>
          <Forecast place={surfspot}/>
          </Paper>
          <p></p>
          <Paper style={{padding: "20px 20px 20px 20px"}}>
          <WindyIframe/>
          </Paper>
      </Grid>
      </ResponsiveContainer>
      <p></p> 
      <Navbar/>
      </div>
    )
}

export default GraphsPage;
