/*
The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
You may also assume that child records in the JSON will always be in a property called `children`.
*/

// const sample = require('./sample.json');

exports.converter = function converter(json, output, keys) {
  let csv = output ? output : '';
  let attributes = keys ? keys : [];

  // get header values
  if (csv === '') {
    attributes = Object.keys(json);
    attributes.splice(attributes.indexOf('children'), 1);
    csv = attributes.join(',');
  }

  // get row content
  csv = getValues(json, csv, attributes);

  // deal with the children
  // - no child
  if (json.children.length === 0) {
    return csv;
  }
  // - if there are children, iterate over each one of them
  csv = json.children.reduce((csv, child) => {
    return `${converter(child, csv, attributes)}`;
  }, csv)

  // finally, return the csv text
  return csv;
}

const getValues = (json, csv, attributes) => {
  return attributes.reduce((csv, attribute) => {
    return `${csv},${json[attribute]}`;
  }, csv);
}

// console.log(converter(sample));
