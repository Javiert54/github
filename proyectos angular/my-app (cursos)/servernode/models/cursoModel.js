const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema(
	{

		nombreCurso: {
			type: String
		},
		duracion: {
			type: Number
		},
		descripcion: {
			type: String
		},
		fotoPortada: {
			type: String
		}

	}
);

module.exports = mongoose.model('curso', CursoSchema);