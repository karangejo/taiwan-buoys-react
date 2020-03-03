//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const {getCurrentDateTime} = require('./currentDate');
const mongoose = require('mongoose');
const Buoy = require('./models/buoy')


mongoose.connect('mongodb://localhost:27017/buoy', {useNewUrlParser: true, useUnifiedTopology: true});


//joining path of directory
const directoryPath = path.join(__dirname, 'buoyData');
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file);
        let location = (String(file)).split('.')[0]
        let rawdata = fs.readFileSync(directoryPath+"/" +file);
        let jsonData = JSON.parse(rawdata);
        let databaseData= {date: getCurrentDateTime(), location: location,  data: jsonData};
        // save this to mongoDB
        const data = new Buoy(databaseData);
        data.save().then(() => console.log('Saved Buoy Data to Database.'));
    });
});

process.exit()
