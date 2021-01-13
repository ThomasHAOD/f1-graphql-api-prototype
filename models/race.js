const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const raceSchema = new Schema({
  year: {
    type: Number,
    required: true,
  },
  round: {
    type: Number,
    required: true,
  },
  circuitId: {
    type: Number,
    required: true,
  },
  circuitRef: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
});

module.exports = mongoose.model('Race', raceSchema);
