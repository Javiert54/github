import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../servicios/alumnos.service';
import { alumnoFicha } from "../modelos/alumnos";

import { posicion } from '../alumnos/alumnos.component';
import {MatSelectModule} from '@angular/material/select';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe, NgIf, CommonModule} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
	selector: 'app-alumno',
	templateUrl: './alumno.component.html',
	styleUrls: ['./alumno.component.css'],
	providers: [AlumnosService],
		standalone: true,
	imports: [
	  FormsModule,
	  MatFormFieldModule,
	  MatInputModule,
	  MatAutocompleteModule,
	  ReactiveFormsModule,
	  NgFor,
	  AsyncPipe,
	  CommonModule
	],
})

export class AlumnoComponent implements OnInit {

	searchAlumno = new FormControl<string | alumnoFicha>('');
	filteredOptions: Observable<alumnoFicha[]>;


	public listaAlumnos: any[];
	public posicion: any;
	public mongo:any;
	


	constructor(private _alumnosService: AlumnosService) {
	
		this.posicion=posicion
		this.listaAlumnos = new Array<alumnoFicha>();
		this.filteredOptions= new Observable()
	}

	ngOnInit(): void {

		this.listaAlumnos = this._alumnosService.getAlumnos();


		this.filteredOptions = this.searchAlumno.valueChanges.pipe(
			startWith(''),
			map(value => {
			  const userName = typeof value === 'string' ? value : value?.userName;
			  return userName ? this._filter(userName as string) : this.listaAlumnos.slice();
			}),
		  );

	}
	displayFn(alumno: alumnoFicha): any {

		return alumno ? `${alumno.userName}` : undefined;
	}

	private _filter(userName: string): alumnoFicha[] {
		const filterValue = userName.toLowerCase();
	
		return this.listaAlumnos.filter(option => option.userName.toLowerCase().includes(filterValue));
	  }
	
	  console(alumno:alumnoFicha){
		this.posicion = alumno.id;
	}
}
