import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const { styles } = require('./../style');




function Navbar() {
  const history = useHistory();

  function handleClick(e,value) {
    switch(value){
      case 0:
        history.push("/");
        break;
      case 1:
        history.push("/graphs");
        break;
      case 2:
        history.push("/about");
        break;
      default:
        history.push("/");
    }
  }

  return (
    <div>
    <Grid container direction='column' justify='center' alignItems='center' style={{width: "100%"}} >
    <Paper style={{width: "100%"}}>
      <BottomNavigation
      style={styles.navbar}
      onChange={handleClick}
      showLabels
      >
      <BottomNavigationAction label="Home" icon={<HomeIcon/>} style={styles.fontLightGreen}/>
      <BottomNavigationAction label="Graphs" icon={<AccountTreeIcon/>} style={styles.fontLightGreen}/>
      <BottomNavigationAction label="About" icon={<BrightnessAutoIcon/>} style={styles.fontLightGreen}/>
    </BottomNavigation>
    </Paper>
    </Grid>
    </div>
  );
};

export default Navbar;
