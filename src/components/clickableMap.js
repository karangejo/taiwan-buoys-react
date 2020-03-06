import React from 'react';
import { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import CircleLoader from "react-spinners/CircleLoader";
import api from './../mapsApiKey.js';

//material ui imports
import Button from '@material-ui/core/Button';

const { styles } = require('./../style');


// must set props that handle the selected location in the prop handleLocation
class ClickableMap extends Component {
  state = {
    currentLatitude: 23.624477,
    currentLongitude: 120.956908,
    mapMarkers: [
      {name: "Taitung", Lat: "22.931333", Lng: "121.397919"},
      {name: "Hualien", Lat: "23.861037", Lng: "121.737035"},
      {name: "Yilan", Lat: "25.249205", Lng: "122.109557"},
      {name: "SuAo", Lat: "24.677337", Lng: "121.998504"},
      {name: "XiaoLiuQiu", Lat: "22.303354", Lng: "119.050031"}
    ],
    selectedLocation: "",
    loading: true
  }

  componentWillMount(){
    setTimeout(() => this.setState({loading: false}),50);
  }


 getMapOptions = (maps: any) => {
    return (
      {
        disableDefaultUI: true,
        mapTypeControl: false,
        streetViewControl: false,
        styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
        mapTypeId: "satellite",
        scrollwheel: false
      }
    )
  }

  markerClick = (e) => {
    //console.log(e.currentTarget.value);
    this.props.handleLocation(e.currentTarget.value);
  }

  displayMarkers = () => {
    //console.log(this.state.mapMarkers);
    const markers = this.state.mapMarkers.map((click,index) =>
      <div
        key={index}
        lat={parseFloat(click.Lat)}
        lng={parseFloat(click.Lng)}
        align="center"
      >
        <Button style={styles.mapButtonStyle} align="center" onClick={this.markerClick} value={click.name}>
          {click.name}
        </Button>
      </div>
    )
    return(markers)
  }

  main = () => {
    return(
      <div style={{ height: '50vh' }}>
        <GoogleMapReact
          options={this.getMapOptions()}
          bootstrapURLKeys={{ key: api.key }}
          center={{
                    lat: this.state.currentLatitude,
                    lng: this.state.currentLongitude
                  }}
          defaultZoom={6.5}
        >
        {this.displayMarkers()}

        </GoogleMapReact>
      </div>
    );
  }

  spinnerOrMain = () => {
    if(this.state.loading){
      return(
        <div>
          <CircleLoader
            size={150}
            //size={"150px"} this also works
            color={"#f39422"}
            loading={this.state.loading}
          />
        </div>
      );
    } else {
      return(
        <div>
              {this.main()}
        </div>
      )
    }
  }


  render() {

    return (
      <div>
        {this.spinnerOrMain()}
      </div>
    );
  }

}

export default ClickableMap;
