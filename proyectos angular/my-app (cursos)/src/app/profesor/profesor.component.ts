import { Component, OnInit } from '@angular/core';
// import { profesor } from '../modelos/profesores';
import { userFicha } from '../modelos/user';
// import { ProfesoresService } from '../servicios/profesores.service';
import { UsersService } from '../servicios/users.service';
import { posicion } from '../profesores/profesores.component';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { MatCardModule } from '@angular/material/card';

@Component({
	selector: 'app-profesor',
	templateUrl: './profesor.component.html',
	styleUrls: ['./profesor.component.css'],
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
		MatCardModule
	],
})

export class ProfesorComponent implements OnInit {

	searchProfesor = new FormControl<string | userFicha>('');
	filteredOptions: Observable<userFicha[]>;



	public posicion: number;
	public profesoresLista: Array<userFicha>;
	constructor(private UsersService: UsersService) {
		this.posicion = posicion;
		this.profesoresLista = Array<userFicha>()
		this.filteredOptions = new Observable()
	}


	ngOnInit(): void {
		this.profesoresLista = this.UsersService.getProfesores();


		this.filteredOptions = this.searchProfesor.valueChanges.pipe(
			startWith(''),
			map(value => {

				const userName = typeof value === 'string' ? value : value?.userName;
				return userName ? this._filter(userName as string) : this.profesoresLista;
			}),
		);

	}

	displayFn(profesor: userFicha): any {
		return profesor ? `${profesor.userName} ${profesor.lastName}` : undefined;
	}

	private _filter(name: string): userFicha[] {

 	const filterNameValue = name.toLowerCase();

		return this.profesoresLista.filter(option => (option.userName + " " + option.lastName).toLowerCase().includes(filterNameValue));
	}

	console(profesorIndex: number) {
		this.posicion = profesorIndex

	}

}
