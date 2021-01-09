const Race = require('../../models/race');

module.exports = {
  Query: {
    racesFromYear: async (_, { year }) => {
      const result = await Race.find({ year: year });
      if (!result) {
        const error = new Error('No Races found');
        error.code = 422;
        throw error;
      }
      const races = result.map((races) => {
        return {
          ...races._doc,
          _id: races._id.toString(),
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
      const races = result.map((races) => {
        return {
          ...races._doc,
          _id: races._id.toString(),
        };
      });
      return races;
    },
  },
};
