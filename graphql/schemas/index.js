const path = require('path');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');

const { print } = require('graphql');

const schemasArray = loadFilesSync(path.join(__dirname, '.'), {
  extensions: ['gql'],
});

const schemaString = print(mergeTypeDefs(schemasArray));

module.exports = schemaString;
