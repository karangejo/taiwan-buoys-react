const fs = require('fs');
const fetch = require('node-fetch');
const api = require('./stormGlassApiKey');
const mongoose = require('mongoose');
const Tide = require('./models/tide');
const {getCurrentDate} = require('./currentDate');



// connect to mongo and define a schema
mongoose.connect('mongodb://localhost:27017/tide', {useNewUrlParser: true, useUnifiedTopology: true});



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
  fetch(`https://api.stormglass.io/v1/tide/extremes/point?lat=${placeObj.lat}&lng=${placeObj.lng}`, {
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


// save the data to mongodb instead of to file
  const data = new Tide({date: getCurrentDate(), location: file, data: df});
  data.save().then(() => console.log('Saved Tides Data to Database. For location: ' + location));
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
