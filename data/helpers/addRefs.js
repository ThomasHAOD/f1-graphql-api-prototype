const fs = require('fs');
const results = require('../../og-data-json/dataWithRefs/results.json');
const lookupTable = require('./lookups/status.json');

const addRefs = (data, lookupTable, idName, refName) => {
  const newData = {};
  for (key in data) {
    const object = data[key];
    const id = object[idName];

    object[refName] = lookupTable[id];
    newData[key] = object;
  }
  return JSON.stringify(newData);
};

fs.writeFile(
  `${__dirname}/dataWithRefs/results.json`,
  addRefs(results, lookupTable, 'statusId', 'statusRef'),
  'utf8',
  (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('lookup table was saved');
  }
);
