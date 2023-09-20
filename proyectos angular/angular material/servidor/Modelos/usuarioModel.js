const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
	{
		userName: {
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
		telephone: {
			type: String
		},
		password: {
			type: String,
			required: true
		},
		photo: {
			type: String
		},
		state: {
			type: Boolean
		},
		dni: {
			type: String
		},
		isProfessor: {
			type: Boolean,
			required: true
		},
		subject: {
			type: String
		},
		fechaCreacion: {
			type: Date,
			default: Date.now()
		}
	}
);

module.exports = mongoose.model('Users', UserSchema);


