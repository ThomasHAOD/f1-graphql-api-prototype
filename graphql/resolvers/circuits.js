const Circuit = require('../../models/circuit');
const mapMongoResults = require('./helpers/map-mongo-results');

module.exports = {
  Query: {
    circuits: async () => {
      const result = await Circuit.find();
      if (!result) {
        const error = new Error('No Circuits found');
        error.code = 500;
        throw error;
      }
      const circuits = mapMongoResults(result);
      return circuits;
    },
    circuit: async (_, { ref }) => {
      const result = await Circuit.findOne({ circuitRef: ref });
      if (!result) {
        const error = new Error('Circuit not found');
        error.code = 401;
        throw error;
      }
      return result;
    },
  },
};
