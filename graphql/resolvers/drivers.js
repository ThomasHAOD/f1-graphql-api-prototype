const Driver = require('../../models/driver');
const Result = require('../../models/result');
const Qualifying = require('../../models/qualifying');
const NotFoundError = require('../../errors/not-found-error');
const mapMongoResults = require('../../helpers/map-mongo-results');

module.exports = {
  Query: {
    drivers: async () => {
      const result = await Driver.find();
      if (!result) throw new NotFoundError('Driver', 500);
      const drivers = mapMongoResults(result);

      return drivers;
    },
    driver: async (_, { ref }) => {
      const result = await Driver.findOne({ driverRef: ref });
      if (!result) throw new NotFoundError('Driver', 500);
      return result;
    },
  },
  Driver: {
    results: async (parent) => {
      const result = await Result.find({ driverRef: parent.driverRef });
      if (!result) throw new NotFoundError('Result', 500);
      const results = mapMongoResults(result);

      return results;
    },
    qualifyings: async (parent) => {
      const result = await Qualifying.find({ driverRef: parent.driverRef });
      if (!result) throw new NotFoundError('Qualifying', 500);
      const results = mapMongoResults(result);

      return results;
    },
  },
};
