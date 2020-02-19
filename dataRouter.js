const fs = require('fs');
const express = require('express')
const router = express.Router()

router.get('/Taitung', (req, res) => {
  let rawdata = fs.readFileSync('Taitung.JSON');
  let df = JSON.parse(rawdata);
  //console.log(df);
  res.send(df)
})



module.exports = router
