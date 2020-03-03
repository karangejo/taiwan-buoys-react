const express = require('express');
const router = express.Router();
const Buoy = require('../models/buoy');


// buoy endpoints
router.get('/Taitung', async (req, res) => {
  console.log(req);
  try{
    let rawdata = await Buoy.find({date: req.body.date, location: "Taitung"});
    res.json(rawdata)
  } catch  (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/Hualien', async (req, res) => {
  try{
    let rawdata = await Buoy.find({date: req.body.date, location: "Hualien"});
    res.json(rawdata)
  } catch  (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/Yilan', async (req, res) => {
  try{
    let rawdata = await Buoy.find({date: req.body.date, location: "Yilan"});
    res.json(rawdata)
  } catch  (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/XiaoLiuQiu', async (req, res) => {
  try{
    let rawdata = await Buoy.find({date: req.body.date, location: "XiaoLiuQiu"});
    res.json(rawdata)
  } catch  (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/SuAo', async (req, res) => {
  try{
    let rawdata = await Buoy.find({date: req.body.date, location: "SuAo"});
    res.json(rawdata)
  } catch  (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
