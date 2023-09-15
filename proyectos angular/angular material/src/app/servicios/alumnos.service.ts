import { Injectable } from "@angular/core";
import { alumnoFicha } from "../modelos/alumnos";

@Injectable({
    providedIn: 'root'
})


export class AlumnosService{
	public alumnos: Array<alumnoFicha>;

	constructor(

	){
        this.alumnos = [
			
			new alumnoFicha("Carlos", "Rodríguez Santana", 19, "carlosrodrig@gmail.com", "+34 666 66 65 56", "contraseña", "./assets/media/alumno1.jpg", true, false, 0),
			new alumnoFicha("Pepe", "Machado Hernández", 16, "pepeg@gmail.com", "+34 999 99 56 21", "12345seis", "./assets/media/alumno2.jpg", false, false, 1),
			new alumnoFicha("Jose", "Fernandez Manzano", 22, "josandez@gmail.com", "+34 444 44 22 10", "me gustan las albóndigas", "./assets/media/alumno3.jpg", true, false, 2),
			new alumnoFicha("Marta", "Trujillo Quintana", 20, "martquintan@gmail.com", "+34 555 44 21 01", "no sé qué poner", "./assets/media/alumno4.jpg", false, false, 3),
			new alumnoFicha("Andrea", "Sánchez Martinez", 20, "anchinez@gmail.com", "+34 222 54 24 07", "20 de junio de 2003", "./assets/media/alumno5.jpg", true, false, 4),
			new alumnoFicha("Edgar", "Sanabria Montes", 20, "edgmon@gmail.com", "+34 145 74 29 44", "no me gustan las albóndigas", "./assets/media/alumno6.jpg", false, false, 5),
		];
	}

	getAlumnos(): Array<alumnoFicha>{
		return this.alumnos;
	}
}