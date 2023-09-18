import { Component, OnInit } from '@angular/core';
import { UsersService } from '../servicios/users.service';
import { userFicha } from "../modelos/user";

import { posicion } from '../alumnos/alumnos.component';



import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe, NgIf, CommonModule} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-alumno',
	templateUrl: './alumno.component.html',
	styleUrls: ['./alumno.component.css'],
	providers: [UsersService],
		standalone: true,
	imports: [
	  FormsModule,
	  MatFormFieldModule,
	  MatInputModule,
	  MatAutocompleteModule,
	  ReactiveFormsModule,
	  NgFor,
	  AsyncPipe,
	  CommonModule,
	  MatCardModule
	],
})

export class AlumnoComponent implements OnInit {

	searchAlumno = new FormControl<string | userFicha>('');
	filteredOptions: Observable<userFicha[]>;


	public listaAlumnos: any[];
	public posicion: any;
	public mongo:any;
	


	constructor(private UsersService: UsersService) {
	
		this.posicion=posicion
		this.listaAlumnos = new Array<userFicha>();
		this.filteredOptions= new Observable()
	}

	ngOnInit(): void {

		this.listaAlumnos = this.UsersService.getAlumnos();


		this.filteredOptions = this.searchAlumno.valueChanges.pipe(
			startWith(''),
			map(value => {
			  const userName = typeof value === 'string' ? value : value?.userName;
			  return userName ? this._filter(userName as string) : this.listaAlumnos;
			}),
		  );

	}
	displayFn(alumno: userFicha): any {

		return alumno ? `${alumno.userName} ${alumno.lastName} (${alumno.dni})` : undefined;
	}

	private _filter(userName: string): userFicha[] {
		const filterValue = userName.toLowerCase();
	
		return this.listaAlumnos.filter(option => (option.userName + " " + option.lastName + " (" + option.dni + ")" ).toLowerCase().includes(filterValue));
	  }
	
	  console(alumnoIndex:number){
		this.posicion = alumnoIndex;
	}
}
