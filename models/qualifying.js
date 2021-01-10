const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const qualifyingSchema = new Schema({
  raceId: {
    type: Number,
    required: true,
  },
  driverId: {
    type: Number,
    required: true,
  },
  constructorId: {
    type: Number,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  q1: {
    type: String,
    required: true,
  },
  q2: {
    type: String,
    required: true,
  },
  q3: {
    type: String,
    required: true,
  },
  driverRef: {
    type: String,
    required: true,
  },
  raceRef: {
    type: String,
    required: true,
  },
  constructorRef: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Qualifying', qualifyingSchema);
