const express = require('express');
const router = express.Router();
const Astro = require('../models/astro');

// forecast endpoints
router.get('/Taitung', async (req, res) => {
  try{
    let rawdata = await Astro.find({location: "Taitung"}).sort({_id:-1}).limit(1);
    res.json(rawdata)
  } catch  (err) {
    res.status(500).json({ message: err.message })
  }
  })

router.get('/Hualien', async (req, res) => {
  try{
    let rawdata = await Astro.find({location: "Hualien"}).sort({_id:-1}).limit(1);
    res.json(rawdata)
  } catch  (err) {
    res.status(500).json({ message: err.message })
  }
  })

router.get('/Yilan', async (req, res) => {
  try{
    let rawdata = await Astro.find({location: "Yilan"}).sort({_id:-1}).limit(1);
    res.json(rawdata)
  } catch  (err) {
    res.status(500).json({ message: err.message })
  }
  })

router.get('/SuAo', async (req, res) => {
  try{
    let rawdata = await Astro.find({location: "SuAo"}).sort({_id:-1}).limit(1);
    res.json(rawdata)
  } catch  (err) {
    res.status(500).json({ message: err.message })
  }
  })

router.get('/XiaoLiuQiu', async (req, res) => {
  try{
    let rawdata = await Astro.find({location: "XiaoLiuQiu"}).sort({_id:-1}).limit(1);
    res.json(rawdata)
  } catch  (err) {
    res.status(500).json({ message: err.message })
  }
  })

module.exports = router
