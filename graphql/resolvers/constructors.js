const Constructor = require('../../models/constructor');

module.exports = {
  Query: {
    constructors: async () => {
      const result = await Constructor.find();
      if (!result) {
        const error = new Error('No Constructors found');
        error.code = 500;
        throw error;
      }
      const constructors = result.map((constructor) => {
        return {
          ...constructor._doc,
          _id: constructor._id.toString(),
        };
      });
      return constructors;
    },
    constructor: async (_, { ref }) => {
      const result = await Constructor.findOne({ constructorRef: ref });
      if (!result) {
        const error = new Error('Constructor not found');
        error.code = 401;
        throw error;
      }
      return result;
    },
  },
};
