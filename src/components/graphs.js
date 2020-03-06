import React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
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
  const [graphSize, setGraphSize] = useState(400);

  useEffect(() => {
    if(isMobileDevice){
      console.log("MOBILE");
      setGraphSize(250);
    }
  }, []);

  const isMobileDevice = () => {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      return (true);
    }
  }

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
      <Grid style={styles.background}>
        <Navbar/>
          <Grid  direction='column' justify='center' alignItems='center'>
              <div align="center">
              <h1 style={styles.fontOrange}>
                Graphs
              </h1>
              </div>
              <Grid>
              <Paper style={styles.paper}>
              <Grid>
                <Paper style={styles.mapPaper}>
                  <ClickableMap handleLocation={handleMapLocation} style={{height:"200px"}}/>
                </Paper>
                </Grid>
                <h2 align="center" style={styles.fontLightGreen}>
                  Buoy Data
                </h2>
                <SelectBuoy setPlace={handleBuoySelection}/>
                <h3 style={styles.fontLightGreen}>
                  {place}
                </h3>
                <Buoys place={place} graphSize={graphSize}/>
                </Paper>
                </Grid>
                <p></p>
                <Grid>
                <Paper style={styles.paper}>
                <h2 align="center" style={styles.fontLightGreen}>
                  Forecast Data
                </h2>
                <SelectSurfSpot setSpot={handleSpotSelection}/>
                <h3 style={styles.fontLightGreen}>
                  {surfspot}
                </h3>
                <Forecast place={surfspot} graphSize={graphSize} />
                <p></p>
                <Tide place={surfspot}/>
                <p></p>
                </Paper>
                </Grid>
                <p></p>
                <Grid>
                <Paper style={styles.paper}>
                  <WindyIframe/>
                </Paper>
                </Grid>
          </Grid>
        <p></p>
        <Navbar/>
      </Grid>
    )
}

export default GraphsPage;
