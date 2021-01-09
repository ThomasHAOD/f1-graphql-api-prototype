const Driver = require('../../models/driver');

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
};
