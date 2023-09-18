const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		},
		textMessage: {
			type: String
		},
	}
);
module.exports = mongoose.model('message', MessageSchema);
