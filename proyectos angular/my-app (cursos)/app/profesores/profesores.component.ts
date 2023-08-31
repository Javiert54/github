import { Component, OnInit } from '@angular/core';
import {ProfesoresService } from '../servicios/profesores.service';
import { Router } from '@angular/router';
import { profesor } from '../modelos/profesores';

export var posicion = 0;

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
  providers: [ProfesoresService]
})





export class ProfesoresComponent implements OnInit {


	// public nombreAlumno: String

	// public cursonombre: String
	// public cursodescripcion: String
	public profesoresLista: Array<profesor>

	// public nombreCurso: String
	// public descripcion: String
	// public duracion: String


	constructor(private _ProfesoresService: ProfesoresService, private router: Router) {

		this.profesoresLista = Array<profesor>()


	}
	expedienteProfesor(posicionbutton:number){

		posicion = posicionbutton;
		this.router.navigate(['/profesor']);

	}
	ngOnInit(): void {
		this.profesoresLista = this._ProfesoresService.getProfesores();


	}



}