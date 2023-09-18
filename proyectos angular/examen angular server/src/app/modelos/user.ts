
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

