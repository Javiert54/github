import { Component, OnInit } from '@angular/core';
import { UsersService } from '../servicios/users.service';
import { userFicha } from '../modelos/user';
import { Router } from '@angular/router';
import {NgFor} from '@angular/common';
// import {MatGridListModule} from '@angular/material/grid-list';

export var posicion = 0;

@Component({
	selector: 'app-alumnos',
	templateUrl: './alumnos.component.html',
	styleUrls: ['./alumnos.component.css'],
	providers: [UsersService],

})


export class AlumnosComponent implements OnInit {
	items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
	expandedIndex = 0;
	public Alumnos: any[];
	constructor(private _alumnosService: UsersService, private router: Router) {
		this.Alumnos = new Array<userFicha>()

	}



	expedienteAlumno(posicionbutton:number){

		posicion = posicionbutton;
		this.router.navigate(['/alumno']);

	}

	ngOnInit(): void {
		this.Alumnos = this._alumnosService.getAlumnos()/*.filter( (alumno:any) => {alumno.isProfessor == false })*/;
		console.log(this.Alumnos);
	}

}