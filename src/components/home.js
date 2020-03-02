import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Navbar from './navbar';
import TaiwanBuoysLogo from './../images/lighthouseFinalLightDark.png';
import Donkeys from './../images/donkeys.jpg';
import Fongbindle from './../images/Fongbindle.jpg';
import Chengs from './../images/chengGong.jpg';
import Jinzun from './../images/JinzunBeach.jpg';

const { styles } = require('./../style');




function Home() {
    return (
      <div style={styles.background}>
      <Navbar/>
        <Grid container direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
          <p></p>
            <img alt="Taiwan Buoys Logo with a lighthouse" src={TaiwanBuoysLogo} style={{marginLeft: "auto", marginRight: "auto", display: "block", width: "50%"}} />
          <p></p>
          <h1  align="center" style={styles.fontOrange}>
            Gallery
          </h1>
        <Paper style={styles.paper}>
          <Carousel showArrows={true} showStatus={false}>
                <div>
                   <img alt="Some dude ripping hard" src={Donkeys} />
                </div>
                <div>
                    <img alt="Legendary scenery" src={Jinzun} />
                </div>
                <div>
                    <img alt="Epic Surf" src={Chengs} />
                </div>
                <div>
                    <img alt="Some dude ripping hard" src={Fongbindle}/>
                </div>
            </Carousel>
          </Paper>
        </Grid>
        <p></p>
      <Navbar/>
      </div>
    )
}

export default Home;
