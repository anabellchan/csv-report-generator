const express = require('express')
const app = express()
const path = require('path')
const port = 1234


app.use(express.static('client'));

app.get('/', (req, res) => {
  res.send();
})

app.post('/jsontocsv', (req, res) => {
  console.log(Object.keys(req));
  res.status(200).send();
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})