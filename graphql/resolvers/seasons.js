const Season = require('../../models/season');
const Result = require('../../models/result');
const Qualifying = require('../../models/qualifying');
const Race = require('../../models/race');
const mapMongoResults = require('./helpers/map-mongo-results');

module.exports = {
  Query: {
    seasons: async () => {
      const result = await Season.find();
      if (!result) throw new NotFoundError('Season', 500);
      const seasons = mapMongoResults(result);
      return seasons;
    },
    season: async (_, { year }) => {
      const result = await Season.findOne({ year: year });
      if (!result) throw new NotFoundError('Season', 500);

      return result;
    },
  },
  Season: {
    results: async (parent) => {
      const result = await Result.find({ season: parseInt(parent.season) });
      if (!result) throw new NotFoundError('Result', 500);

      const results = mapMongoResults(result);
      return results;
    },
    qualifyings: async (parent) => {
      const result = await Qualifying.find({ season: parseInt(parent.season) });
      if (!result) throw new NotFoundError('Qualifying', 500);

      const qualifyings = mapMongoResults(result);
      return qualifyings;
    },
    races: async (parent) => {
      const result = await Race.find({ year: parseInt(parent.season) });
      if (!result) throw new NotFoundError('Race', 500);

      const races = mapMongoResults(result);
      return races;
    },
  },
};
