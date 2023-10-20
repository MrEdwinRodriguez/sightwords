const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SightwordSchema = new Schema({
	unit: Number,
	querter: Number,
	words: Array,
	is_system_defined_list: {type: String, default: true}
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Sightword', SightwordSchema);