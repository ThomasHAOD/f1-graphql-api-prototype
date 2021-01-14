const Race = require('../../models/race');
const Circuit = require('../../models/circuit');
const Result = require('../../models/result');
const mapMongoResults = require('../../helpers/map-mongo-results');
const NotFoundError = require('../../errors/not-found-error');

module.exports = {
  Query: {
    racesFromYear: async (_, { year }) => {
      const result = await Race.find({ year: year });
      if (!result) throw new NotFoundError('Race', 500);
      const races = mapMongoResults(result);
      return races;
    },
    racesFromRound: async (_, { round }) => {
      const result = await Race.find({ round: round });
      if (!result) throw new NotFoundError('Race', 500);

      const races = mapMongoResults(result);
      return races;
    },
    race: async (_, { round, year }) => {
      const result = await Race.findOne({ round: round, year: year });
      if (!result) throw new NotFoundError('Race', 500);

      return result;
    },
  },
  Race: {
    circuit: async (parent) => {
      const result = await Circuit.findOne({ circuitRef: parent.circuitRef });
      if (!result) throw new NotFoundError('Circuit', 500);

      return result;
    },
    results: async (parent) => {
      const result = await Result.find({
        season: parent.year,
        round: parent.round,
      });
      if (!result) throw new NotFoundError('Result', 500);

      const results = mapMongoResults(result);
      return results;
    },
  },
};
