const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SightwordSchema = new Schema({
	unit: Number,
	querter: Number,
	words: Array
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Sightword', SightwordSchema);