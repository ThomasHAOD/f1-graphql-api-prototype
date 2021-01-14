const Result = require('../../models/result');
const NotFoundError = require('../../errors/not-found-error');
const mapMongoResults = require('../../helpers/map-mongo-results');

module.exports = {
  Query: {
    resultsByDriver: async (_, { driverRef }) => {
      const result = await Result.find({ driverRef: driverRef });
      if (!result) throw new NotFoundError('Result', 500);
      const results = mapMongoResults(result);
      return results;
    },
    resultsByDriverAndPosition: async (_, { driverRef, position }) => {
      const result = await Result.find({
        driverRef: driverRef,
        position: position,
      });
      if (!result) throw new NotFoundError('Result', 500);

      const results = mapMongoResults(result);
      return results;
    },
  },
};
