
const express = require('express')
const app = express()

app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const dataRouter = require('./dataRouter')
app.use('/', dataRouter)

app.listen(3001, () => console.log('Server Started listening on port 3001'))
