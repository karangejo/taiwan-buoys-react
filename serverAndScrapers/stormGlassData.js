const fetch = require('node-fetch');
const api = require('./stormGlassApiKey');
const mongoose = require('mongoose');
const Forecast = require('./models/forecast')
const {getCurrentDate} = require('./currentDate');



// connect to mongo and define a schema
mongoose.connect('mongodb://localhost:27017/forecast', {useNewUrlParser: true, useUnifiedTopology: true});


//console.log(api.key)
// lat and long for DongHe
//const lat = 22.974713;
//const lng = 121.312026;
//const params = 'airTemperature, swellDirection, swellHeight, swellPeriod, waveDirection, waveHeight, wavePeriod, windWaveDirection, windWaveHeight, windWavePeriod, windDirection, windSpeed, gust';
//const source = 'noaa';

//folder that will contain the data
//const dataFolder ='./forecastData/';

// array to store the list of spot objects
var spotsList = [];

// surf spots to be served
const taitung = {lat:22.872005,
                lng:121.250046,
                fileName: 'Taitung'
                }
spotsList.push(taitung);

const hualien = {lat:23.719626,
                lng:121.620303,
                fileName: 'Hualien'
                }
spotsList.push(hualien);

const suao = {lat:24.552165,
                lng:121.893323,
                fileName: 'SuAo'
                }
spotsList.push(suao);

const yilan = {lat:24.901836,
                lng:121.972881,
                fileName: 'Yilan'
                }
spotsList.push(yilan);

const xiaoliuqiu = {lat:22.304580,
                    lng:120.359826,
                    fileName: 'XiaoLiuQiu'
                }
spotsList.push(xiaoliuqiu);


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

// save the data to mongodb instead of to file
  const data = new Forecast({date: getCurrentDate(), location: file, data: myData});
  //console.log(data);
  //data.save().then(() => console.log('Saved Forecast Data to Database.'));
  data.save((err, value) => {
    if(err){
      console.log(err);
    }
    console.log("Saved Forecast Data to Database");
  });
  //const fileData = JSON.stringify(myData)
  //fs.writeFileSync(dataFolder+file, fileData);
}

try {
  for(i in spotsList){
    getAndSaveData(spotsList[i]);
  }
} catch (e) {
  console.log(e);
} finally {
  setTimeout((() => mongoose.disconnect()),2000);
}
