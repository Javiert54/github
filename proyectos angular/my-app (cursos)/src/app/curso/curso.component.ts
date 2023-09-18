import { Component, OnInit } from '@angular/core';
import { CursosService } from '../servicios/cursos.service';
import { curso } from '../modelos/cursos';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {NgFor, AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
	selector: 'app-curso',
	templateUrl: './curso.component.html',
	styleUrls: ['./curso.component.css'],
	providers: [CursosService],
	standalone: true,
	imports: [
	  FormsModule,
	  MatFormFieldModule,
	  MatInputModule,
	  MatAutocompleteModule,
	  ReactiveFormsModule,
	  NgFor,
	  AsyncPipe,
	],
})


export class CursoComponent implements OnInit {

	searchCurso = new FormControl<string | curso>('');
	filteredOptions: Observable<curso[]>;
	

	public posicion: any;
	public cursosLista: Array<any>;
	constructor(private _CursosService: CursosService) {
		this.posicion = 0;
		this.cursosLista = Array<curso>()
		this.filteredOptions= new Observable()
	}

	ngOnInit(): void {
		this.cursosLista = this._CursosService.getCursos();


		this.filteredOptions = this.searchCurso.valueChanges.pipe(
			startWith(''),
			map(value => {
			  const name = typeof value === 'string' ? value : value?.name;
			  return name ? this._filter(name as string) : this.cursosLista.slice();
			}),
	 	);

	}

	displayFn(curso: curso): any {
		this.posicion = curso.id;
		return curso ? `${curso.name}` : undefined;
	}

	  private _filter(name: string): curso[] {
		const filterValue = name.toLowerCase();
	
		return this.cursosLista.filter(option => option.name.toLowerCase().includes(filterValue));
	  }


	console(curso:curso){
		// for (const element in this.searchCurso) {
		// 	console.log(element);
		// }
		this.posicion = curso.id;
		console.log((this.searchCurso), this.searchCurso.value)
	}
}

