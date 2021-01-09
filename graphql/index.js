const { makeExecutableSchema } = require('@graphql-tools/schema');

const schemas = require('./schemas');
const resolvers = require('./resolvers');

module.exports = makeExecutableSchema({
  typeDefs: schemas,
  resolvers: resolvers,
});
