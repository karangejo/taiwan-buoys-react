const fs = require('fs');
const fetch = require('node-fetch');
const api = require('./stormGlassApiKey');

//console.log(api.key)
// lat and long for DongHe
//const lat = 22.974713;
//const lng = 121.312026;
//const params = 'airTemperature, swellDirection, swellHeight, swellPeriod, waveDirection, waveHeight, wavePeriod, windWaveDirection, windWaveHeight, windWavePeriod, windDirection, windSpeed, gust';
//const source = 'noaa';

//const fileName = 'donghe.JSON';
const dataFolder ='./forecastData/';

// surf spots to be served
const dongHe = {lat:22.974713,
                lng:121.312026,
                fileName: 'donghe.JSON'
                }

const fongBin = {lat:23.598731,
                lng:121.530104,
                fileName: 'fongbin.JSON'
                }

const chengGong = {lat:23.114908,
                lng:121.398776,
                fileName: 'chenggong.JSON'
                }

const jiaLeShui = {lat:21.987092,
                lng:120.846658,
                fileName: 'jialeshui.JSON'
                }

const nanWan = {lat:21.956813,
                lng:120.762142,
                fileName: 'nanwan.JSON'
                }

const huaLien = {lat:23.934235,
                lng:121.614916,
                fileName: 'hualien.JSON'
                }









const getAndSaveData = (placeObj) => {
  fetch(`https://api.stormglass.io/v1/weather/point?lat=${placeObj.lat}&lng=${placeObj.lng}`, {
              headers: {
                'Authorization': api.key
              }
            }).then((response) => response.json()).then((jsonData) => {
              processAndSaveData(jsonData, placeObj.fileName);
            });
}




// getting the noaa values in the second array element
const src = 1
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

getAndSaveData(dongHe);
