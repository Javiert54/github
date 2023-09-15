import { Component, OnInit } from '@angular/core';
import { profesor } from '../modelos/profesores';
import { ProfesoresService } from '../servicios/profesores.service';
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
	providers: [ProfesoresService],
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

	searchProfesor = new FormControl<string | profesor>('');
	filteredOptions: Observable<profesor[]>;



	public posicion: number;
	public profesoresLista: Array<profesor>;
	constructor(private _ProfesoresService: ProfesoresService) {
		this.posicion = posicion;
		this.profesoresLista = Array<profesor>()
		this.filteredOptions = new Observable()
	}


	ngOnInit(): void {
		this.profesoresLista = this._ProfesoresService.getProfesores();


		this.filteredOptions = this.searchProfesor.valueChanges.pipe(
			startWith(''),
			map(value => {
				const lastName = typeof value === 'string' ? value : value?.lastName;
				const userName = typeof value === 'string' ? value : value?.userName;
				return userName && lastName ? this._filter(userName as string) : this.profesoresLista;
			}),
		);

	}

	displayFn(profesor: profesor): any {
		this.posicion = profesor.id;
		return profesor ? `${profesor.userName} ${profesor.lastName}` : undefined;
	}

	private _filter(name: string): profesor[] {

 	const filterNameValue = name.toLowerCase();

		return this.profesoresLista.filter(option => (option.userName + " " + option.lastName).toLowerCase().includes(filterNameValue));
	}

	console(profesor: profesor) {
		this.posicion = profesor.id;
		console.log((this.searchProfesor), this.searchProfesor.value)
	}

}
