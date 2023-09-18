import { Component, OnInit } from '@angular/core';
// import { AlumnosService } from '../servicios/alumnos.service';
// import { alumnoFicha } from "../modelos/alumnos";
import { FormsModule, NgModel } from '@angular/forms';
// import { posicion } from '../alumnos/alumnos.component';
import {MatInputModule} from '@angular/material/input';
// import {NgFor, NgIf} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


interface Food {
	value: string;
	viewValue: string;
}

@Component({
	selector: 'app-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.css'],
	// providers: [AlumnosService]
})

export class SelectComponent implements OnInit {

	// public listaAlumnos: any[];
	// public posicion: number;
	// public mongo:any;
	selectedValue: string;
	
	public foods: Food[] = [
		{value: 'steak-0', viewValue: 'Steak'},
		{value: 'pizza-1', viewValue: 'Pizza'},
		{value: 'tacos-2', viewValue: 'Tacos'},
	];

constructor(){
	this.selectedValue = ''
}
	// constructor(private _alumnosService: AlumnosService) {
	// 	this.posicion = posicion;
	// 	this.listaAlumnos = new Array<alumnoFicha>();
	// 	this.selectedValue = '';
	// }

	ngOnInit(): void {

		// this.listaAlumnos = this._alumnosService.getAlumnos();



	}

	// sumar(){

	// 	if (this.posicion < this.listaAlumnos.length -1){
	// 		this.posicion++;
	// 	} else{
	// 		this.posicion = 0;
	// 	}
		
	// }
	// restar(){
	// 	if (this.posicion > 0){
	// 		this.posicion--;
	// 	} else{
	// 		this.posicion = this.listaAlumnos.length -1;
	
	// 	}
	
	
	// }

}
