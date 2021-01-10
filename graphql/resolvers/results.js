const Result = require('../../models/result');

module.exports = {
  Query: {
    resultsByDriver: async (_, { driverRef }) => {
      const result = await Result.find({ driverRef: driverRef });
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
    resultsByDriverAndPosition: async (_, { driverRef, position }) => {
      const result = await Result.find({
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
