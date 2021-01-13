const fs = require('fs');

const status = require('../../og-data-json/dataWithRefs/races.json');

const createLookupTable = (data) => {
  const keys = Object.keys(data);
  const lookupTable = {};
  for (const key of keys) {
    const round = data[key].round;
    lookupTable[key] = round;
  }
  return JSON.stringify(lookupTable);
};

fs.writeFile(
  `${__dirname}/raceToRound.json`,
  createLookupTable(status),
  'utf8',
  (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('lookup table was saved');
  }
);
