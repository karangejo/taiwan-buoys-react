const fs = require('fs');
const fetch = require('node-fetch');
const api = require('./stormGlassApiKey');

//console.log(api.key)
// lat and long for DongHe
//const lat = 22.974713;
//const lng = 121.312026;
//const params = 'airTemperature, swellDirection, swellHeight, swellPeriod, waveDirection, waveHeight, wavePeriod, windWaveDirection, windWaveHeight, windWavePeriod, windDirection, windSpeed, gust';
//const source = 'noaa';

//folder that will contain the data
const dataFolder ='./forecastData/';

// array to store the list of spot objects
var spotsList = [];

// surf spots to be served
const dongHe = {lat:22.974713,
                lng:121.312026,
                fileName: 'donghe.JSON'
                }
spotsList.push(dongHe);

const fongBin = {lat:23.598731,
                lng:121.530104,
                fileName: 'fongbin.JSON'
                }
spotsList.push(fongBin);

const chengGong = {lat:23.114908,
                lng:121.398776,
                fileName: 'chenggong.JSON'
                }
spotsList.push(chengGong);

const jiaLeShui = {lat:21.987092,
                lng:120.846658,
                fileName: 'jialeshui.JSON'
                }
spotsList.push(jiaLeShui);

const nanWan = {lat:21.956813,
                lng:120.762142,
                fileName: 'nanwan.JSON'
                }
spotsList.push(nanWan);

const huaLien = {lat:23.934235,
                lng:121.614916,
                fileName: 'hualien.JSON'
                }
spotsList.push(huaLien);




// main function to scrape all the data from a location. The place object has the form
// {lat: XXXX, lng: XXXX, fileName: XXXX}

const getAndSaveData = (placeObj) => {
  fetch(`https://api.stormglass.io/v1/weather/point?lat=${placeObj.lat}&lng=${placeObj.lng}`, {
              headers: {
                'Authorization': api.key
              }
            }).then((response) => response.json()).then((jsonData) => {
              processAndSaveData(jsonData, placeObj.fileName);
            });
}



// get storm glass value 0
// get the noaa values 1
const src = 1

//this function re assembles the data into a format suitable for recharts
// and then saves the data
const processAndSaveData = (df,file) => {
  var myData = [];

  for(i in df.hours){
    const rawRowObj = df.hours[i];
    if(!(rawRowObj.swellHeight === undefined || rawRowObj.swellHeight.length == 0)){
      const newDataRow = {swellHeight: rawRowObj.swellHeight[src].value,
                          swellDirection: rawRowObj.swellDirection[src].value,
                          swellPeriod: rawRowObj.swellPeriod[src].value,
                          windDirection: rawRowObj.windDirection[src].value,
                          windSpeed: rawRowObj.windSpeed[src].value,
                          airTemperature: rawRowObj.airTemperature[src].value,
                          time: rawRowObj.time
                          }
      myData.push(newDataRow);
    }
  }

  const fileData = JSON.stringify(myData)
  fs.writeFileSync(dataFolder+file, fileData);
}


for(i in spotsList){
  getAndSaveData(spotsList[i]);
}
