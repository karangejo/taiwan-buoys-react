import React from 'react';
import { useState, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';




const { styles } = require('./../style');


function TideGraph(props) {
  const [data, setData] = useState([]);
  const [place, setPlace] = useState([]);
  const [show, setShow] = useState(false);


  useEffect(() => {
                    setData(props.data);
                    setPlace(props.place);
                    setShow(true);
                  }, [data,place,show,props.place,props.data]);


  const columns = [
    {
      name: 'DateTime',
      selector: "Time",
      sortable: false,
      allowOverflow: false,
      wrap: true
    },
    {
      name: 'High Tide',
      selector: "HighTideheightm",
      sortable: false,
      allowOverflow: false,
      wrap: true
    },
    {
      name: 'Low Tide',
      selector: "LowTideheightm",
      sortable: false,
      allowOverflow: false,
      wrap: true
    },
    {
      name: 'Sunrise',
      selector: "Sunrise",
      sortable: false,
      allowOverflow: false,
      wrap: true
    },
    {
      name: 'Sunset',
      selector: "Sunset",
      sortable: false,
      allowOverflow: false,
      wrap: true
    },
  ];

  createTheme('myTheme', {
    text: {
      primary: "#e8f9e9",
      secondary: "#e8f9e9",
    },
    background: {
      default: "#537ec5",
    },
    context: {
      background: "#537ec5",
      text: "#e8f9e9",
    },
    divider: {
      default: 'rgba(1,0,80,1)',
    },
  });

  const customStyles = {
    headCells: {
    style: {
      fontFamily: "Iceland",
      fontSize: "20px"
    }
  }
  }




    return (
      <Grid>
      <Paper style={styles.mapPaper}>
        <Grid>
        <DataTable
          style={styles.fontLightGreen}
          columns={columns}
          data={data}
          theme="myTheme"
          customStyles={customStyles}
        />
        </Grid>
      </Paper>
      </Grid>

    )
}

export default TideGraph;
