const express = require('express')
const app = express()
const port = 1234

const parser = require('body-parser')
const path = require('path');
const fs = require('fs');
const converter = require('./converter.js');
const render = require('./render.js');

app.use(express.static('client'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());


app.get('/', (req, res) => {
  res.send();
})

app.post('/', (req, res) => {
  var jsonStr = req.body['textarea-json'];
  var jsonObj = JSON.parse(jsonStr);
  // convert text to csv
  let csv = converter(jsonObj);
  res.send(csv);
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})
