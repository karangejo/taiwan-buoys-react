import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';


const { styles } = require('./../style');


// when using this function you must set props of buoyLocation to get the location requested in parent
export default function SelectBuoy(props) {
  const [buoyLocation, setBuoyLocation] = React.useState('Taitung');
  const [open, setOpen] = React.useState(false);


  const handleChange = event => {
    const location = event.target.value;
    setBuoyLocation(location);
    props.setPlace(location);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
    <FormControl size="large" fullWidth={true} margin='normal'>
      <InputLabel id="demo-controlled-open-select-label" style={styles.fontLightGreen}>Select Buoy</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={buoyLocation}
        onChange={handleChange}
        style={styles.fontLightGreen}
      >
        <MenuItem value={'Taitung'} style={styles.menuItemStyle}>Taitung</MenuItem>
        <MenuItem value={'Yilan'} style={styles.menuItemStyle}>Yilan</MenuItem>
        <MenuItem value={'SuAo'} style={styles.menuItemStyle}>SuAo</MenuItem>
        <MenuItem value={'XiaoLiuQiu'} style={styles.menuItemStyle}>XiaoLiuQiu</MenuItem>
        <MenuItem value={'HuaLien'} style={styles.menuItemStyle}>Hualien</MenuItem>
      </Select>
    </FormControl>
    </Grid>
  );
}
