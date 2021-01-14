const Result = require('../../models/result');
const mapMongoResults = require('./helpers/map-mongo-results');

module.exports = {
  Query: {
    resultsByDriver: async (_, { driverRef }) => {
      const result = await Result.find({ driverRef: driverRef });
      if (!result) {
        const error = new Error('No Results found');
        error.code = 422;
        throw error;
      }
      const results = mapMongoResults(result);
      return results;
    },
    resultsByDriverAndPosition: async (_, { driverRef, position }) => {
      const result = await Result.find({
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
