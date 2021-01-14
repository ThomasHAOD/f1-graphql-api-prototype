const Season = require('../../models/season');
const Result = require('../../models/result');
const Qualifying = require('../../models/qualifying');
const Race = require('../../models/race');
const mapMongoResults = require('./helpers/map-mongo-results');

module.exports = {
  Query: {
    seasons: async () => {
      const result = await Season.find();
      if (!result) {
        const error = new Error('No seasons found');
        error.code = 500;
        throw error;
      }
      const seasons = mapMongoResults(result);
      return seasons;
    },
    season: async (_, { year }) => {
      const result = await Season.findOne({ year: year });
      if (!result) {
        const error = new Error('No seasons found');
        error.code = 500;
        throw error;
      }
      return result;
    },
  },
  Season: {
    results: async (parent) => {
      const result = await Result.find({ season: parseInt(parent.season) });
      if (!result) {
        const error = new Error('No Results found');
        error.code = 422;
        throw error;
      }
      const results = mapMongoResults(result);
      return results;
    },
    qualifyings: async (parent) => {
      const result = await Qualifying.find({ season: parseInt(parent.season) });
      if (!result) {
        const error = new Error('No qualifyings found');
        error.code = 422;
        throw error;
      }
      const qualifyings = mapMongoResults(result);
      return qualifyings;
    },
    races: async (parent) => {
      const result = await Race.find({ year: parseInt(parent.season) });
      if (!result) {
        const error = new Error('No races found');
        error.code = 422;
        throw error;
      }
      const races = mapMongoResults(result);
      return races;
    },
  },
};
