function prettyPrint() {
  let ugly = document.querySelector('textarea-json').textContent;
  let obj = JSON.parse(ugly);
  let pretty = JSON.stringify(obj, undefine, 4);
  document.querySelector('textarea-json').textContent = pretty;
}