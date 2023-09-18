import { Injectable } from "@angular/core";
import { userFicha } from "../modelos/user";

@Injectable({
    providedIn: 'root'
})


export class UsersService{
	public users: Array<userFicha>;

	constructor(

	){
        this.users = [
			
			new userFicha("Carlos", "Rodríguez Santana", 19, "carlosrodrig@gmail.com", 666666556, "contraseña", "./assets/media/alumno1.jpg", true, "45367380h", false, ""),
			new userFicha("Pepe", "Machado Hernández", 16, "pepeg@gmail.com", 999995621, "12345seis", "./assets/media/alumno2.jpg", false, "45685428k", false, ""),
			new userFicha("Jose", "Fernandez Manzano", 22, "josandez@gmail.com", 444442210, "me gustan las albóndigas", "./assets/media/alumno3.jpg", true, "45886781p", false, ""),
			new userFicha("Marta", "Trujillo Quintana", 20, "martquintan@gmail.com", 555442101, "no sé qué poner", "./assets/media/alumno4.jpg", false, "451992576q", false, ""),
			new userFicha("Andrea", "Sánchez Martinez", 20, "anchinez@gmail.com", 222542407, "20 de junio de 2003", "./assets/media/alumno5.jpg", true, "456678082h", false, ""),
			new userFicha("Edgar", "Sanabria Montes", 20, "edgmon@gmail.com", 145742944, "no me gustan las albóndigas", "./assets/media/alumno6.jpg", false, "45230214k", false, ""),
			new userFicha("José", "Suárez Medina", 32, "josuar@gmail.com", 674088994, "666666", "./assets/media/profesor1.jpg", false, "45275657k", true, "Mates"),
			new userFicha("María", "Pérez Hernández", 29, "mariher@gmail.com", 669842434, "rammstein", "./assets/media/profesor2.jpg", false, "45201228g", true, "Lengua"),
			new userFicha("Miguel", "Dávila Medina", 40, "migmedina@gmail.com", 669492425, "qwertyuiop", "./assets/media/profesor3.jpg", false, "45755214i", true, "Ciencias"),
			new userFicha("Manuel", "Pizarro Díaz", 42, "mandi@gmail.com", 650497561, "añesartnoc", "./assets/media/profesor4.jpg", false, "45317732j", true, "Educación Física"),
		];
	}

	getAlumnos(): Array<userFicha>{
		return this.users.filter(user => !user.isProfessor);
	}
	getProfesores(): Array<userFicha>{
		return this.users.filter(user => user.isProfessor);
	}
}