import { Component, OnInit } from '@angular/core';

import { userFicha } from '../modelos/user';
import { UsersService } from '../servicios/users.service';
import { Router } from '@angular/router';

export var posicion = 0;

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css'],
  providers: [UsersService]
})





export class ProfesoresComponent implements OnInit {


	// public nombreAlumno: String

	// public cursonombre: String
	// public cursodescripcion: String
	public profesoresLista: Array<userFicha>

	// public nombreCurso: String
	// public descripcion: String
	// public duracion: String


	constructor(private _ProfesoresService: UsersService, private router: Router) {

		this.profesoresLista = Array<userFicha>()


	}
	expedienteProfesor(posicionbutton:number){

		posicion = posicionbutton;
		this.router.navigate(['/profesor']);

	}
	ngOnInit(): void {
		this.profesoresLista = this._ProfesoresService.getProfesores();


	}



}