import React from 'react';

//98056506-56aa-11ea-ac48-0242ac130007-98056628-56aa-11ea-ac48-0242ac130007
//22.974713, 121.312026

function WindyIframe() {

    return (
      <iframe
        title="Windy Iframe"
        width="650"
        height="450"
        src="https://embed.windy.com/embed2.html?lat=22.615&lon=120.314&zoom=5&level=surface&overlay=wind&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=22.615&detailLon=120.314&metricWind=default&metricTemp=default&radarRange=-1"
      >
      </iframe>
    )
}

export default WindyIframe;
