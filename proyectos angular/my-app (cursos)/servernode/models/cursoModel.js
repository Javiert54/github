const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema(
	{

		Codigo: {
			type: Number
		},
		name: {
			type: String
		},
		codigoTarea: {
			type: Number
		},
		puntuacion: {
			type: String
		},
		estado: {
			type: Boolean
		}

	}
);

module.exports = mongoose.model('curso', CursoSchema);