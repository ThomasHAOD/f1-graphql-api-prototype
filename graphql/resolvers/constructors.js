const Constructor = require('../../models/constructor');
const NotFoundError = require('../../errors/not-found-error');
const mapMongoResults = require('../../helpers/map-mongo-results');

module.exports = {
  Query: {
    constructors: async () => {
      const result = await Constructor.find();
      if (!result) throw new NotFoundError('Constructor', 500);
      const constructors = mapMongoResults(result);
      return constructors;
    },
    constructor: async (_, { ref }) => {
      const result = await Constructor.findOne({ constructorRef: ref });
      if (!result) throw new NotFoundError('Constructor', 500);
      return result;
    },
  },
};
