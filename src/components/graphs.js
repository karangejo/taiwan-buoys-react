import React from 'react';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {ResponsiveContainer} from 'recharts';

import Navbar from './navbar';
import Graphs from './graphDisplay';
import WindyIframe from './windyIframe';
import Forecast from './forecast';
import SelectBuoy from './selectBuoy';
import SelectSurfSpot from './selectSurfSpot';





function GraphsPage() {

  const [place, setPlace] = useState("Yilan");
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
          <h2>
            Buoy Data
          </h2>
          <SelectBuoy setPlace={handleBuoySelection}/>
          <h3>
            {place}
          </h3>
          <Graphs place={place}/>
          <h2>
            Forecast Data
          </h2>
          <SelectSurfSpot setSpot={handleSpotSelection}/>
          <h3>
            {surfspot}
          </h3>
          <Forecast place={surfspot}/>
          <WindyIframe/>
      </Grid>
      </ResponsiveContainer>
      </div>
    )
}

export default GraphsPage;
