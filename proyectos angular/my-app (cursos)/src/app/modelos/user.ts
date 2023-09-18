
export var alumnoBase = {

	nombre: "Manuel",
	apellidos: "M.P",
	correo: "profe@asd.com",

}



export class userFicha {
    static _id: string;
	constructor (
		public userName: string,
		public lastName: string,
		public age: number,
		public email: string,
		public telephone: number,
		public password: string,
		public photo: string,
		public state: boolean,
		public dni: string,
		public isProfessor: boolean,
		public subject: string


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
		public listaAlumnos: Array<userFicha>
	){


	}

}