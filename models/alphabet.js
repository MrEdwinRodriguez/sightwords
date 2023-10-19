const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlphabetSchema = new Schema({
	letter: String,
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Alphabet', AlphabetSchema);