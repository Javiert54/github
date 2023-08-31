import { Component, OnInit } from '@angular/core';
import { profesor } from '../modelos/profesores';
import { ProfesoresService } from '../servicios/profesores.service';
import { posicion } from '../profesores/profesores.component';
@Component({
	selector: 'app-profesor',
	templateUrl: './profesor.component.html',
	styleUrls: ['./profesor.component.css'],
	providers: [ProfesoresService]
})

	export class ProfesorComponent implements OnInit{

		public posicion: number;
		public profesoresLista: Array<profesor>;
		constructor(private _ProfesoresService: ProfesoresService){
			this.posicion = posicion;
			this.profesoresLista = Array<profesor>()
			
		}
	
		sumar(){
			if (this.posicion < this.profesoresLista.length -1){
				this.posicion++;
			} else{
				this.posicion = 0;
			}
	
		}
		restar(){
			if (this.posicion > 0){
				this.posicion--;
			} else{
				this.posicion = this.profesoresLista.length -1;
	
			}
	
	
		}
	
		ngOnInit(): void {
			this.profesoresLista = this._ProfesoresService.getProfesores();
		}

}
