const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		username:{
			type:String
		},
		apellidos:{
			type:String
		},
		edad:{
			type:Number
		},
		correo:{
			type:String,
			unique:true,
			required:true
		},
		contraseña:{
			type:String,
			required:true
		},
		telefono:{
			type:String
		},
		foto:{
			type:String
		},
		estado:{
			type:Boolean
		}
	}
)
module.exports = mongoose.model('user', UserSchema)
