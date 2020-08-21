const express = require('express')
const app = express()
const port = 1234
const parser = require('body-parser')

app.use(express.static('client'));
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.get('/', (req, res) => {
  res.send();
})

app.post('/jsontocsv', (req, res) => {
  console.log(req.body);
  var json = req.body['textarea-json'];
  var text = JSON.parse(json);
  console.log(text);
  res.status(200).send();
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})

function convert(json) {

}