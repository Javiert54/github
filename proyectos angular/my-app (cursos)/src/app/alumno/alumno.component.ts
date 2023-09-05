import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../servicios/alumnos.service';
import { alumnoFicha } from "../modelos/alumnos";

import { posicion } from '../alumnos/alumnos.component';

import { MongoService } from '../servicios/mongo.service';

@Component({
	selector: 'app-alumno',
	templateUrl: './alumno.component.html',
	styleUrls: ['./alumno.component.css'],
	providers: [AlumnosService, MongoService]
})

export class AlumnoComponent implements OnInit {

	public listaAlumnos: any[];
	public posicion: number;
	public mongo:any;

	constructor(private _alumnosService: AlumnosService, private _mongo:MongoService) {
		this.posicion = posicion;
		this.listaAlumnos = new Array<alumnoFicha>();

	}

	ngOnInit(): void {

		this.listaAlumnos = this._alumnosService.getAlumnos();
		this.mongo= this._mongo.conexion()


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
