const fs = require('fs');

exports.render = function render(csv) {
  let html = fs.readFileSync('./client/index.html', {encoding: 'utf-8'});
  html = html.replace('<!--csv-->', csv);
  fs.writeFileSync('./client/index.html', html, { encoding: 'utf-8' });
}