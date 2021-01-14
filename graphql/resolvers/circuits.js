const Circuit = require('../../models/circuit');
const NotFoundError = require('../../errors/not-found-error');
const mapMongoResults = require('../../helpers/map-mongo-results');

module.exports = {
  Query: {
    circuits: async () => {
      const result = await Circuit.find();
      if (!result) throw new NotFoundError('Circuit', 500);
      const circuits = mapMongoResults(result);
      return circuits;
    },
    circuit: async (_, { ref }) => {
      const result = await Circuit.findOne({ circuitRef: ref });
      if (!result) throw new NotFoundError('Circuit', 500);

      return result;
    },
  },
};
