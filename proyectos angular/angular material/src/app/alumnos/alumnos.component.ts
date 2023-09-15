import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../servicios/alumnos.service';
import { alumnoFicha } from '../modelos/alumnos';
import { Router } from '@angular/router';
import {NgFor} from '@angular/common';
// import {MatGridListModule} from '@angular/material/grid-list';

export var posicion = 0;

@Component({
	selector: 'app-alumnos',
	templateUrl: './alumnos.component.html',
	styleUrls: ['./alumnos.component.css'],
	providers: [AlumnosService],

})


export class AlumnosComponent implements OnInit {
	items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
	expandedIndex = 0;
	public Alumnos: any[];
	constructor(private _alumnosService: AlumnosService, private router: Router) {
		this.Alumnos = new Array<alumnoFicha>()

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