const Race = require('../../models/race');
const Circuit = require('../../models/circuit');
const Result = require('../../models/result');

module.exports = {
  Query: {
    racesFromYear: async (_, { year }) => {
      const result = await Race.find({ year: year });
      if (!result) {
        const error = new Error('No Races found');
        error.code = 422;
        throw error;
      }
      const races = result.map((race) => {
        return {
          ...race._doc,
          _id: race._id.toString(),
        };
      });
      return races;
    },
    racesFromRound: async (_, { round }) => {
      const result = await Race.find({ round: round });
      if (!result) {
        const error = new Error('No Races found');
        error.code = 422;
        throw error;
      }
      const races = result.map((race) => {
        return {
          ...race._doc,
          _id: race._id.toString(),
        };
      });
      return races;
    },
    race: async (_, { round, year }) => {
      const result = await Race.findOne({ round: round, year: year });
      if (!result) {
        const error = new Error('No Races found');
        error.code = 422;
        throw error;
      }
      return result;
    },
  },
  Race: {
    circuit: async (parent) => {
      const result = await Circuit.findOne({ circuitRef: parent.circuitRef });
      if (!result) {
        const error = new Error('Circuit not found');
        error.code = 422;
        throw error;
      }
      return result;
    },
    results: async (parent) => {
      const result = await Result.find({
        season: parent.year,
        round: parent.round,
      });
      if (!result) {
        const error = new Error('Result not found');
        error.code = 422;
        throw error;
      }
      const results = result.map((result) => {
        return {
          ...result._doc,
          _id: result._id.toString(),
        };
      });
      return results;
    },
  },
};
