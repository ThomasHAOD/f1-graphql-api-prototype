const Qualifying = require('../../models/qualifying');

module.exports = {
  Query: {
    qualifyings: async () => {
      const result = await Qualifying.find();
      if (!result) {
        const error = new Error('No Qualifyings found');
        error.code = 500;
        throw error;
      }
      const qualifyings = result.map((qualifying) => {
        return {
          ...qualifying._doc,
          _id: qualifying._id.toString(),
        };
      });
      return qualifyings;
    },
    qualifyingByDriver: async (_, { driverRef }) => {
      const result = await Qualifying.find({ driverRef: driverRef });
      if (!result) {
        const error = new Error('No Results found');
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
    qualifyingByDriverAndPosition: async (_, { driverRef, position }) => {
      const result = await Qualifying.find({
        driverRef: driverRef,
        position: position,
      });
      if (!result) {
        const error = new Error('No Results found');
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
