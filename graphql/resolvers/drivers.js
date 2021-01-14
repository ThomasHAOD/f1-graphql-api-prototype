const Driver = require('../../models/driver');
const Result = require('../../models/result');
const Qualifying = require('../../models/qualifying');
const mapMongoResults = require('./helpers/map-mongo-results');

module.exports = {
  Query: {
    drivers: async () => {
      console.log('driver');
      const result = await Driver.find();
      if (!result) {
        const error = new Error('No Drivers found');
        error.code = 500;
        throw error;
      }
      const drivers = mapMongoResults(result);
      return drivers;
    },
    driver: async (_, { ref }) => {
      const result = await Driver.findOne({ driverRef: ref });
      if (!result) {
        const error = new Error('Driver not found');
        error.code = 401;
        throw error;
      }
      return result;
    },
  },
  Driver: {
    results: async (parent) => {
      const result = await Result.find({ driverRef: parent.driverRef });
      if (!result) {
        const error = new Error('No Results found');
        error.code = 422;
        throw error;
      }
      const results = mapMongoResults(result);

      return results;
    },
    qualifyings: async (parent) => {
      const result = await Qualifying.find({ driverRef: parent.driverRef });
      if (!result) {
        const error = new Error('No Qualifyings found');
        error.code = 422;
        throw error;
      }
      const results = mapMongoResults(result);
      return results;
    },
  },
};
