import { Injectable } from "@angular/core";
import { profesor } from "../modelos/profesores";

@Injectable({
    providedIn: 'root'
})


export class ProfesoresService{
	public profesoresLista: Array<profesor>;

	constructor(

	){
        this.profesoresLista = [
			new profesor("José", "Suárez Medina", 32, "Mates", "josuar@gmail.com", "./assets/media/profesor1.jpg",674088994, 0),
			new profesor("María", "Pérez Hernández", 29, "Lengua", "mariher@gmail.com", "./assets/media/profesor2.jpg",669842434,1),
			new profesor("Miguel", "Dávila Medina", 40, "Ciencias", "migmedina@gmail.com", "./assets/media/profesor3.jpg",669492425,2),
			new profesor("Manuel", "Pizarro Díaz", 42, "Educación Física", "mandi@gmail.com", "./assets/media/profesor4.jpg",650497561,3),
		];
	}

	getProfesores(): Array<profesor>{
		return this.profesoresLista;
	}
}
