const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const circuitSchema = new Schema({
  circuitRef: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
  alt: {
    type: Number,
  },
  url: {
    type: String,
  },
});

module.exports = mongoose.model('Circuit', circuitSchema);
