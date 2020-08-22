const express = require('express')
const app = express()
const port = 1234

const parser = require('body-parser')
const path = require('path');
const fs = require('fs');
const converter = require('./converter.js');
const { initialize, render } = require('./render.js');

app.use(express.static('client'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());


app.get('/', (req, res) => {
  initialize();
  res.send();
})

app.post('/', (req, res) => {
  var jsonStr = req.body['textarea-json'];
  var jsonObj = JSON.parse(jsonStr);
  console.log(jsonObj);
  // convert text to csv
  let csv = converter(jsonObj);
  // render csv to index.html
  console.log(csv);
  render(jsonStr, csv);
  res.sendFile(__dirname + '/client/');
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})
