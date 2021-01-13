const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const seasonSchema = new Schema({
  year: {
    type: String,
    required: true,
  },
  season: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Season', seasonSchema);
