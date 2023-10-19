const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
	scores: {type: Object, default: {}},
    profileImage: { type: String },
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Profile', ProfileSchema);