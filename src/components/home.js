import React from 'react';
import Grid from '@material-ui/core/Grid';
import Navbar from './navbar';


function Home() {
    return (
      <div>
      <Navbar/>
      <Grid container direction='column' justify='center' alignItems='center'>
          <h1>
            Home
          </h1>
      </Grid>
      </div>
    )
}

export default Home;
