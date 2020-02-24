import React from 'react';
import { useState } from 'react';
import Grid from '@material-ui/core/Grid';

import Navbar from './navbar';
import Graphs from './graphDisplay';
import WindyIframe from './windyIframe';
import Forecast from './forecast';




function GraphsPage() {

  const [place, setPlace] = useState("Yilan");
  const [surfspot, setSurfSpot] = useState("DongHe");

    return (
      <div>
      <Navbar/>
      <Grid container direction='column' justify='center' alignItems='center'>
          <h1>
            Graphs
          </h1>
          <h2>
            Buoy Data
          </h2>
          <h3>
            {place}
          </h3>
          <Graphs place={place}/>
          <h2>
            Forecast Data
          </h2>
          <h3>
            {surfspot}
          </h3>
          <Forecast place={surfspot}/>
          <WindyIframe/>
      </Grid>
      </div>
    )
}

export default GraphsPage;
