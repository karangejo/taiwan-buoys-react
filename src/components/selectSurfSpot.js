import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


// when using this function you must set props of setSpot to get the location requested in parent
export default function SelectSurfSpot(props) {
  const [spotLocation, setSpotLocation] = React.useState('DongHe');
  const [open, setOpen] = React.useState(false);


  const handleChange = event => {
    const location = event.target.value;
    setSpotLocation(location);
    props.setSpot(location);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <FormControl size="small" fullWidth={true} margin='normal'>
      <InputLabel id="demo-controlled-open-select-label">Select Buoy</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={spotLocation}
        onChange={handleChange}
      >
        <MenuItem value={'DongHe'}>DongHe</MenuItem>
        <MenuItem value={'FongBin'}>FongBin</MenuItem>
        <MenuItem value={'ChengGong'}>ChengGong</MenuItem>
        <MenuItem value={'Hualien'}>Hualien</MenuItem>
        <MenuItem value={'NanWan'}>NanWan</MenuItem>
        <MenuItem value={'JiaLeShui'}>JiaLeShui</MenuItem>
      </Select>
    </FormControl>
  );
}
