import React from 'react';
import Navbar from './navbar';
import { useState, useEffect } from 'react';
import Graphs from './graphDisplay';





function GraphsPage() {

  const [place, setPlace] = useState("Taitung");

    return (
      <div>
          <h1>
            Graphs
          </h1>
          <Graphs place={place}/>
          <Navbar/>
      </div>
    )
}

export default GraphsPage;
