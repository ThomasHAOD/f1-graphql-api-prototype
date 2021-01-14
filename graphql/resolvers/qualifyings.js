const Qualifying = require('../../models/qualifying');
const mapMongoResults = require('./helpers/map-mongo-results');

module.exports = {
  Query: {
    qualifyings: async () => {
      const result = await Qualifying.find();
      if (!result) {
        const error = new Error('No Qualifyings found');
        error.code = 500;
        throw error;
      }
      const qualifyings = mapMongoResults(result);
      return qualifyings;
    },
    qualifyingByDriver: async (_, { driverRef }) => {
      const result = await Qualifying.find({ driverRef: driverRef });
      if (!result) {
        const error = new Error('No Results found');
        error.code = 422;
        throw error;
      }
      const results = mapMongoResults(result);
      return results;
    },
    qualifyingByDriverAndPosition: async (_, { driverRef, position }) => {
      const result = await Qualifying.find({
        driverRef: driverRef,
        position: position,
      });
      if (!result) {
        const error = new Error('No Results found');
        error.code = 422;
        throw error;
      }
      const results = mapMongoResults(result);
      return results;
    },
  },
};
