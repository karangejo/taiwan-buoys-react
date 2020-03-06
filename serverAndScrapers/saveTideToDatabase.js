//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const {getCurrentDateTime} = require('./currentDate');
const mongoose = require('mongoose');
const Tide = require('./models/tide')


console.log("***************************************")
console.log("=======================================")
console.log("***************************************")
console.log(getCurrentDateTime());

//joining path of directory
const directoryPath = path.join(__dirname, 'tideData');
//passsing directoryPath and callback function
fs.readdir(directoryPath, async function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    try {
      const conn = await mongoose.connect('mongodb://localhost:27017/tide', {useNewUrlParser: true, useUnifiedTopology: true});


    //listing all files using forEach
      files.forEach(async function (file) {
        // Do whatever you want to do with the file

            let datalist = [];
            console.log(file);
            let location = (String(file)).split('.')[0]
            let rawdata = fs.readFileSync(directoryPath+"/" +file);
            let jsonData = JSON.parse(rawdata);
            for(var i in jsonData){
              let newObj = {};
              for(var key in jsonData[i]){
                //console.log(key);
                const newKey = key.replace(/[\s()]/g,"");
                const value = jsonData[i][key];
                newObj[newKey] = typeof value === "String" ? value.replace(/\s{2,}/," ") : value;
              };
              datalist.push(newObj)
            }
            //console.log(datalist);

            let databaseData= {date: getCurrentDateTime(), location: location,  data: datalist};
            // save this to mongoDB
            const data = new Tide(databaseData);
            const save = await data.save()
            console.log("saved to Database. For location: " + location);
            });
        } catch (e) {
          console.log(e);
        } finally {
          setTimeout((() => mongoose.disconnect()),2000);
        }


});
