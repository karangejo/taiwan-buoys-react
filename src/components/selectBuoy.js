import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


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
    <FormControl size="small" fullWidth={true} margin='normal'>
      <InputLabel id="demo-controlled-open-select-label">Select Buoy</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={buoyLocation}
        onChange={handleChange}
      >
        <MenuItem value={'Taitung'}>Taitung</MenuItem>
        <MenuItem value={'Yilan'}>Yilan</MenuItem>
        <MenuItem value={'SuAo'}>SuAo</MenuItem>
        <MenuItem value={'XiaoLiuQiu'}>XiaoLiuQiu</MenuItem>
        <MenuItem value={'HuaLien'}>Hualien</MenuItem>
      </Select>
    </FormControl>
  );
}
