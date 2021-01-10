const fs = require('fs');

const status = require('../../og-data-json/status.json');

const createLookupTable = (data) => {
  const keys = Object.keys(data);
  const lookupTable = {};
  for (const key of keys) {
    const status = data[key].status;
    lookupTable[key] = status;
  }
  return JSON.stringify(lookupTable);
};

fs.writeFile(
  `${__dirname}/lookups/status.json`,
  createLookupTable(status),
  'utf8',
  (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('lookup table was saved');
  }
);
