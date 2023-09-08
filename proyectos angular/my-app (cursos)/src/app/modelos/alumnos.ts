
export var alumnoBase = {

	nombre: "Manuel",
	apellidos: "M.P",
	correo: "profe@asd.com",

}



export class alumnoFicha {
	constructor (
		public userName: String,
		public lastName: String,
		public age: Number,
		public email: String,
		public telephone: String,
		public password: String,
		public photo: String,
		public state: Boolean,
		public isProfessor: Boolean,
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