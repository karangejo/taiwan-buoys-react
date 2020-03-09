import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Navbar from './navbar';
import TaiwanBuoysLogo from './../images/lighthouseLightTransparent.png';
import Donkeys from './../images/donkeys.jpg';
import Fongbindle from './../images/Fongbindle.jpg';
import Chengs from './../images/chengGong.jpg';
import Jinzun from './../images/JinzunBeach.jpg';

const { styles } = require('./../style');






function Home() {
    return (
      <Grid style={styles.background}>
      <Navbar/>
        <Grid  direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
          <p></p>
            <img alt="Taiwan Buoys Logo with a lighthouse" src={TaiwanBuoysLogo} style={{marginLeft: "auto", marginRight: "auto", display: "block", width: "50%"}} />
          <p></p>
          <h1  align="center" style={styles.fontOrange}>
            Gallery
          </h1>
        <Paper style={styles.paper}>
        <Grid>
          <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} interval={3000} showIndicators={false} autoPlay={true}>
                <div>
                   <img style={styles.responsive} alt="Some dude ripping hard" src={Donkeys} />
                </div>
                <div>
                    <img  style={styles.responsive} alt="Legendary scenery" src={Jinzun} />
                </div>
                <div>
                    <img style={styles.responsive} alt="Epic Surf" src={Chengs} />
                </div>
                <div>
                    <img style={styles.responsive} alt="Some dude ripping hard" src={Fongbindle}/>
                </div>
            </Carousel>
            </Grid>
          </Paper>
        </Grid>
        <p></p>
      <Navbar/>
      </Grid>
    )
}

export default Home;
