const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true
		},
		lastName: {
			type: String
		},
		age: {
			type: Number
		},
		email: {
			type: String,
			unique: true,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		telephone: {
			type: String
		},
		photo: {
			type: String
		},
		state: {
			type: Boolean
		},
		isProfessor: {
			type: Boolean,
			required: true
		}
	}
);
module.exports = mongoose.model('user', UserSchema);
