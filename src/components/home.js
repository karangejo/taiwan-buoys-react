import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core'
import WavesIcon from '@material-ui/icons/Waves';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import BarChartIcon from '@material-ui/icons/BarChart';
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

      <div  style={styles.background}>
      <Navbar />
        <Grid  direction='column' justify='center' alignItems='center' style={{padding: "20px 20px 20px 20px"}}>
          <img alt="Taiwan Buoys Logo with a lighthouse" src={TaiwanBuoysLogo} style={{marginLeft: "auto", marginRight: "auto", display: "block", width: "35%"}} />
          <Grid container direction='row' justify="center" alignItems="center"  spacing={3} style={{padding: "20px 20px 20px 20px"}}>
            <WavesIcon color="primary" style={styles.homeIcons}/>
            <Grid  item direction='column' justify="center" alignItems="center">
              <h2 style={styles.Intro} align="center">Surf, wind forecast and buoy data.</h2>
              <h2 style={styles.Intro} align="center">All in one place.</h2>
            </Grid>
            <BarChartIcon color="primary" style={styles.homeIcons}/>
          </Grid>
        <Paper style={styles.paper}>
        <Grid >
        <h1  align="center" style={styles.fontOrange}>
          Gallery
        </h1>
        <Paper style={styles.mapPaper}>
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
            </Paper>
            </Grid>
          </Paper>
        </Grid>
        <p></p>
      <Navbar/>
      </div>

    )
}

export default Home;
