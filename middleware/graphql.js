const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('../graphql');

module.exports = graphqlHTTP({
  schema: graphqlSchema,
  graphiql: true,
  customFormatErrorFn(err) {
    if (!err.originalError) {
      return err;
    }
    const data = err.originalError.data;
    const message = err.message || 'unknown error';
    const code = err.originalError.code || 500;

    return {
      data,
      message,
      status: code,
    };
  },
});
