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
			new alumnoFicha("Carlos", "Rodríguez Santana", 19, "carlosrodrig@gmail.com", "+34 666 66 65 56", "./assets/media/alumno1.jpg", true, 0),
			new alumnoFicha("Pepe", "Machado Hernández", 16, "pepeg@gmail.com", "+34 999 99 56 21", "./assets/media/alumno2.jpg", false, 1),
			new alumnoFicha("Jose", "Fernandez Manzano", 22, "josandez@gmail.com", "+34 444 44 22 10", "./assets/media/alumno3.jpg", true, 2),
			new alumnoFicha("Marta", "Trujillo Quintana", 20, "martquintan@gmail.com", "+34 555 44 21 01", "./assets/media/alumno4.jpg", false, 3),
			new alumnoFicha("Andrea", "Sánchez Martinez", 20, "anchinez@gmail.com", "+34 222 54 24 07", "./assets/media/alumno5.jpg", true, 4),
			new alumnoFicha("Edgar", "Sanabria Montes", 20, "edgmon@gmail.com", "+34 145 74 29 44", "./assets/media/alumno6.jpg", false, 5),
		];
	}

	getAlumnos(): Array<alumnoFicha>{
		return this.alumnos;
	}
}