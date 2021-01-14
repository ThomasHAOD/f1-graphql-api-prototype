const Qualifying = require('../../models/qualifying');
const NotFoundError = require('./errors/not-found-error');
const mapMongoResults = require('./helpers/map-mongo-results');

module.exports = {
  Query: {
    qualifyings: async () => {
      const result = await Qualifying.find();
      if (!result) throw new NotFoundError('Qualifying', 500);
      const qualifyings = mapMongoResults(result);
      return qualifyings;
    },
    qualifyingByDriver: async (_, { driverRef }) => {
      const result = await Qualifying.find({ driverRef: driverRef });
      if (!result) throw new NotFoundError('Qualifying', 500);

      const results = mapMongoResults(result);
      return results;
    },
    qualifyingByDriverAndPosition: async (_, { driverRef, position }) => {
      const result = await Qualifying.find({
        driverRef: driverRef,
        position: position,
      });
      if (!result) throw new NotFoundError('Qualifying', 500);

      const results = mapMongoResults(result);
      return results;
    },
  },
};
