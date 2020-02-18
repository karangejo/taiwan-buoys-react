import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from "react-router-dom";



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
      <BottomNavigation
      onChange={handleClick}
      showLabels
    >
      <BottomNavigationAction label="Home"/>
      <BottomNavigationAction label="Graphs" />
      <BottomNavigationAction label="About" />
    </BottomNavigation>

    </div>
  );
};

export default Navbar;
