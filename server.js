const express = require('express')
const app = express()
const port = 1234
const path = require('path')


app.use(express.static('client'));


app.get('/', (req, res) => {
  res.send();
})

app.post('/jsontocsv', (req, res) => {
  console.log(Object.keys(req));
  console.log(req.body);
  res.status(200).send();
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})