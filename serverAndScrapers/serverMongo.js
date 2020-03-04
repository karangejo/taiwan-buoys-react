const express = require('express')
const app = express()
const mongoose = require('mongoose')

console.log('mongodb://localhost:27017/')
mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const forecastRouter = require('./routes/forecastRouter')
app.use('/forecast', forecastRouter)

const buoyRouter = require('./routes/buoyRouter')
app.use('/buoy', buoyRouter)

const tideRouter = require('./routes/tideRouter')
app.use('/tide', tideRouter)

const astroRouter = require('./routes/astroRouter')
app.use('/astro', astroRouter)


app.listen(3001, () => console.log('Server Started listening on port 3001'))
