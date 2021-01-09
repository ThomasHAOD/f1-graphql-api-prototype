const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
  driverRef: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  forename: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  dob: {
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

module.exports = mongoose.model('Driver', driverSchema);
