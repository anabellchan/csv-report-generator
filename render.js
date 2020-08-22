const fs = require('fs');

const render = function render(json, csv) {
  let html = fs.readFileSync('./views/index.html', { encoding: 'utf-8' });
  html = html.replace('<!--json-->', json);
  html = html.replace('<!--csv-->', csv);
  fs.writeFileSync('./client/index.html', html, { encoding: 'utf-8' });
}
const initialize = function initialize() {
  console.log('initializing...');
  let html = fs.readFileSync('./views/index.html', { encoding: 'utf-8' });
  fs.writeFileSync('./client/index.html', html, { encoding: 'utf-8' });
}

exports.render = render;
exports.initialize = initialize;