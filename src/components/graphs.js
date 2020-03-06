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
import ClickableMap from './clickableMap';
import Tide from './tide';



const { styles } = require('./../style');






function GraphsPage() {

  const [place, setPlace] = useState("Taitung");
  const [surfspot, setSurfSpot] = useState("Taitung");
  



  const handleBuoySelection = (place) => {
    setPlace(place);
  }

  const handleSpotSelection = (spot) => {
    setSurfSpot(spot);
  }

  const handleMapLocation = (place) => {
    setPlace(place);
    setSurfSpot(place)
  }





    return (
      <div style={styles.background}>
        <Navbar/>
        <ResponsiveContainer width="100%">
          <Grid container direction='column' justify='center' alignItems='center'>
              <h1 style={styles.fontOrange}>
                Graphs
              </h1>
              <Paper style={styles.paper}>
                <Paper style={styles.mapPaper}>
                  <ClickableMap handleLocation={handleMapLocation} style={{height:"200px"}}/>
                </Paper>
                <h2 align="center" style={styles.fontLightGreen}>
                  Buoy Data
                </h2>
                <SelectBuoy setPlace={handleBuoySelection}/>
                <h3 style={styles.fontLightGreen}>
                  {place}
                </h3>
                <Buoys place={place} />
                </Paper>
                <p></p>
                <Paper style={styles.paper}>
                <h2 align="center" style={styles.fontLightGreen}>
                  Forecast Data
                </h2>
                <SelectSurfSpot setSpot={handleSpotSelection}/>
                <h3 style={styles.fontLightGreen}>
                  {surfspot}
                </h3>
                <Forecast place={surfspot} />
                <p></p>
                <Tide place={surfspot}/>
                <p></p>
                </Paper>
                <p></p>
                <Paper style={styles.paper}>
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
