var cron = require('node-cron');
const { exec } = require("child_process");

cron.schedule('*/30 * * * *', () => {
  console.log('running a task every 30 minutes');
  rDataScraper(saveBuoyDataToDatabase);
});

cron.schedule('0 */12 * * *', () => {
  console.log('running a task every 12 hours');
  saveForecastDataToDatabase();
  saveTideDataToDatabase();
});

const saveTideDataToDatabase = function(){
  exec("cd /home/karang/Documents/taiwan-buoys-react/serverAndScrapers/ && node stormGlassTide.js", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });
}


const saveForecastDataToDatabase = function(){
  exec("cd /home/karang/Documents/taiwan-buoys-react/serverAndScrapers/ && node stormGlassData.js", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

const saveBuoyDataToDatabase = function(){
  exec("sleep 300 ; cd /home/karang/Documents/taiwan-buoys-react/serverAndScrapers/ && node saveBuoyToDatabase.js", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

// run the r R script
const rDataScraper = function(saveBuoys){
  exec("cd /home/karang/Documents/taiwan-buoys-react/serverAndScrapers/ && /usr/bin/Rscript /home/karang/Documents/taiwan-buoys-react/serverAndScrapers/ScrapeBuoyData.R ", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
  });
  saveBuoys();
}
