const Driver = require('../../models/driver');
const Result = require('../../models/result');

module.exports = {
  Query: {
    drivers: async () => {
      const result = await Driver.find();
      if (!result) {
        const error = new Error('No Drivers found');
        error.code = 500;
        throw error;
      }
      const drivers = result.map((driver) => {
        return {
          ...driver._doc,
          _id: driver._id.toString(),
        };
      });
      return drivers;
    },
    driver: async (_, { ref }) => {
      const result = await Driver.findOne({ driverRef: ref });
      if (!result) {
        const error = new Error('Driver not found');
        error.code = 401;
        throw error;
      }
      return result;
    },
  },
  Driver: {
    results: async (parent) => {
      const result = await Result.find({ driverRef: parent.driverRef });
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
