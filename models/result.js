const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resultSchema = new Schema({
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
  grid: {
    type: Number,
    required: true,
  },
  position: {
    type: Number,
    required: true,
  },
  positionText: {
    type: Number,
  },
  positionOrder: {
    type: Number,
  },
  points: {
    type: Number,
  },
  laps: {
    type: Number,
  },
  time: {
    type: String,
  },
  milliseconds: {
    type: Number,
  },
  fastestLap: {
    type: Number,
  },
  rank: {
    type: Number,
  },
  fastestLapTime: {
    type: String,
  },
  fastestLapSpeed: {
    type: Number,
  },
  statusId: {
    type: Number,
  },
  raceRef: {
    type: String,
    required: true,
  },
  driverRef: {
    type: String,
    required: true,
  },
  constructorRef: {
    type: String,
    required: true,
  },
  statusRef: {
    type: String,
  },
});

module.exports = mongoose.model('Result', resultSchema);
