import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AppsIcon from '@material-ui/icons/Apps';
import TimelineIcon from '@material-ui/icons/Timeline';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { useHistory } from "react-router-dom";

const { styles } = require('./../style');

const theme = createMuiTheme({
  typography: {
    fontFamily: "Iceland",
    color: "#e8f9e9",
    fontSize: "1vw"
  },
});

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
      <ThemeProvider theme={theme}>
      <BottomNavigation
      style={styles.navbar}
      onChange={handleClick}
      showLabels
      >
      <BottomNavigationAction label="Home" icon={<AppsIcon style={styles.navIcons}/>} style={styles.navText}/>
      <BottomNavigationAction label="Graphs" icon={<TimelineIcon style={styles.navIcons}/>} style={styles.navText}/>
      <BottomNavigationAction label="About" icon={<HelpOutlineIcon style={styles.navIcons}/>} style={styles.navText}/>
    </BottomNavigation>
    </ThemeProvider>
    </Paper>
    </Grid>
    </div>
  );
};

export default Navbar;
