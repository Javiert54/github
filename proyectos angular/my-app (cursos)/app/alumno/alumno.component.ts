import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../servicios/alumnos.service';
import { alumnoFicha } from "../modelos/alumnos";

import { posicion } from '../alumnos/alumnos.component';

@Component({
	selector: 'app-alumno',
	templateUrl: './alumno.component.html',
	styleUrls: ['./alumno.component.css'],
	providers: [AlumnosService]
})

export class AlumnoComponent implements OnInit {

	public listaAlumnos: any[];
	public posicion: number;

	constructor(private _alumnosService: AlumnosService) {
		this.posicion = posicion;
		this.listaAlumnos = new Array<alumnoFicha>();

	}

	ngOnInit(): void {

		this.listaAlumnos = this._alumnosService.getAlumnos();

	}

	sumar(){

		if (this.posicion < this.listaAlumnos.length -1){
			this.posicion++;
		} else{
			this.posicion = 0;
		}
		
	}
	restar(){
		if (this.posicion > 0){
			this.posicion--;
		} else{
			this.posicion = this.listaAlumnos.length -1;
	
		}
	
	
	}

}
