const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema(
	{
		_id:String,
		codigo: Number,
		nombreUsuario: String,
		codigoTarea: Number,
		puntuacion: String,
		estado: Boolean,

	}
);

module.exports = mongoose.model('curso', CursoSchema);