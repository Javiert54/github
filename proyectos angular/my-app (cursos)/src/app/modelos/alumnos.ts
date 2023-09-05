
export var alumnoBase = {

	nombre: "Manuel",
	apellidos: "M.P",
	correo: "profe@asd.com",

}



export class alumnoFicha {
	constructor (
		public nombreA: String,
		public apellidoA: String,
		public edadA: Number,
		public correoA: String,
		public telefono: String,
		public fotoA: String,
		public estadoA: Boolean,
		public id: number,

	){}

}

export class alumnosBD {
	constructor (
		// public nombreA: String,
		// public apellidoA: String,
		// public edadA: Number,
		// public correoA: String,
		// public telefono: String,
		// public fotoA: String,
		// public estadoA: Boolean,
		public listaAlumnos: Array<alumnoFicha>
	){


	}

}