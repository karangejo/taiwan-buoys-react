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
router.get('/DongHeForecast', (req, res) => {
  let rawdata = fs.readFileSync('./forecastData/donghe.JSON');
  let df = JSON.parse(rawdata);
  res.send(df);
})

router.get('/FongBinForecast', (req, res) => {
  let rawdata = fs.readFileSync('./forecastData/fongbin.JSON');
  let df = JSON.parse(rawdata);
  res.send(df);
})

router.get('/ChenGongForecast', (req, res) => {
  let rawdata = fs.readFileSync('./forecastData/chenggong.JSON');
  let df = JSON.parse(rawdata);
  res.send(df);
})

router.get('/HualienForecast', (req, res) => {
  let rawdata = fs.readFileSync('./forecastData/hualien.JSON');
  let df = JSON.parse(rawdata);
  res.send(df);
})

router.get('/JiaLeShuiForecast', (req, res) => {
  let rawdata = fs.readFileSync('./forecastData/jialeshui.JSON');
  let df = JSON.parse(rawdata);
  res.send(df);
})

router.get('/NanWanForecast', (req, res) => {
  let rawdata = fs.readFileSync('./forecastData/nanwan.JSON');
  let df = JSON.parse(rawdata);
  res.send(df);
})


module.exports = router
