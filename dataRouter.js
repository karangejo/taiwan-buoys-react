const fs = require('fs');
const express = require('express')
const router = express.Router()

// buoy endpoints
router.get('/Taitung', (req, res) => {
  let rawdata = fs.readFileSync('./buoyData/Taitung.JSON');
  let df = JSON.parse(rawdata);
  //console.log(df);
  res.send(df);
})

router.get('/Hualien', (req, res) => {
  let rawdata = fs.readFileSync('./buoyData/Hualien.JSON');
  let df = JSON.parse(rawdata);
  //console.log(df);
  res.send(df);
})

router.get('/Yilan', (req, res) => {
  let rawdata = fs.readFileSync('./buoyData/Yilan.JSON');
  let df = JSON.parse(rawdata);
  //console.log(df);
  res.send(df);
})

router.get('/XiaoLiuQiu', (req, res) => {
  let rawdata = fs.readFileSync('./buoyData/XiaoLiuQiu.JSON');
  let df = JSON.parse(rawdata);
  //console.log(df);
  res.send(df);
})

router.get('/SuAo', (req, res) => {
  let rawdata = fs.readFileSync('./buoyData/SuAo.JSON');
  let df = JSON.parse(rawdata);
  //console.log(df);
  res.send(df);
})


// forecast endpoints
router.get('/DongHe', (req, res) => {
  let rawdata = fs.readFileSync('./forecastData/donghe.JSON');
  let df = JSON.parse(rawdata);
  res.send(df);
})



module.exports = router
