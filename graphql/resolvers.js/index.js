const Constructor = require('../../models/constructor');

module.exports = {
  Query: {
    constructors: async function (args, req) {
      const result = await Constructor.find();
      const constructors = result.map((constructor) => {
        return {
          ...constructor._doc,
          _id: constructor._id.toString(),
        };
      });
      return constructors;
    },
  },
};
