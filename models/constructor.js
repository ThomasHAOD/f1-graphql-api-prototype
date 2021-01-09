const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const constuctorSchema = new Schema({
  constructorRef: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
});

module.exports = mongoose.model('Constructor', constuctorSchema);
